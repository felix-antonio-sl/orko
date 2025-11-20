import { createSchema, createYoga } from 'graphql-yoga';
import { PrismaClient } from '@prisma/client';
import { write, read } from '@/lib/neo4j';
import crypto from 'crypto';

const prisma = new PrismaClient();

const CREATE_FLOW_QUERY = `
  MERGE (o:Organization {slug: $orgSlug})
  CREATE (f:FlowAsset:ValueStream {
    id: $flowId,
    name: $name,
    description: $description,
    flow_type: $flowType,
    cognitive_level: $cognitiveLevel,
    org: $orgSlug
  })
  CREATE (f)-[:BELONGS_TO]->(o)
  RETURN f
`;

const CREATE_STEP_QUERY = `
  MATCH (f:FlowAsset {id: $flowId})
  CREATE (s:FlowStep {
    id: $stepId,
    name: $name,
    timeout_seconds: $timeout
  })
  CREATE (f)-[:HAS_STEP {order: $order}]->(s)
  RETURN s
`;

const LINK_CAPACITY_QUERY = `
  MATCH (s:FlowStep {id: $stepId})
  MATCH (c) WHERE elementId(c) = $capId OR c.name = $capId
  CREATE (s)-[:EXECUTED_BY]->(c)
`;

const LINK_STEPS_QUERY = `
  MATCH (prev:FlowStep {id: $prevId})
  MATCH (curr:FlowStep {id: $currId})
  CREATE (prev)-[:NEXT]->(curr)
`;

const GET_FLOW_QUERY = `
  MATCH (f:FlowAsset {id: $flowId})
  OPTIONAL MATCH (f)-[r:HAS_STEP]->(s:FlowStep)
  OPTIONAL MATCH (s)-[:EXECUTED_BY]->(c)
  WITH f, s, r, c
  ORDER BY r.order
  RETURN f, collect(CASE WHEN s IS NOT NULL THEN {
    id: s.id,
    name: s.name,
    timeoutSeconds: s.timeout_seconds,
    capacityId: CASE WHEN c IS NOT NULL THEN elementId(c) ELSE null END
  } ELSE null END) as steps
`;

const UPDATE_FLOW_QUERY = `
  MATCH (f:FlowAsset {id: $flowId})
  SET f.name = $name,
      f.description = $description,
      f.flow_type = $flowType,
      f.cognitive_level = $cognitiveLevel
  RETURN f
`;

const DELETE_FLOW_STEPS_QUERY = `
  MATCH (f:FlowAsset {id: $flowId})-[r:HAS_STEP]->(s:FlowStep)
  DETACH DELETE s
`;

const typeDefs = `
  type Query {
    organization(slug: String!): Organization
    health(orgId: ID!): HealthState
    strategy(orgId: ID!): Strategy
    activePlaybooks(orgId: ID!): [PlaybookRun!]!
    flow(id: ID!): FlowAsset
  }

  type Mutation {
    recordAssessment(input: AssessmentInput!): HealthState
    startPlaybook(orgId: ID!, code: String!): PlaybookRun
    createFlow(input: FlowInput!): FlowAsset
    updateFlow(id: ID!, input: FlowInput!): FlowAsset
  }

  type Organization {
    id: ID!
    name: String!
    slug: String!
    health: HealthState
    fabric: FabricGraph
    strategy: Strategy
    activePlaybooks: [PlaybookRun!]!
  }

  type HealthState {
    score: Float!
    gate: String!
    dimensions: [DimensionScore!]!
    history(limit: Int): [Snapshot!]!
  }

  type Strategy {
    trajectory: String!
    description: String!
    focus: String!
    playbooks: [Playbook!]!
  }

  type Playbook {
    id: ID!
    code: String!
    name: String!
    description: String!
  }

  type DimensionScore {
    dimension: String!
    value: Float!
  }

  type Snapshot {
    id: ID!
    recordedAt: String!
    score: Float
  }

  type FabricGraph {
    nodes: [FabricNode!]!
    links: [FabricLink!]!
  }

  type FabricNode {
    id: ID!
    label: String!
    type: String!
    group: String
  }

  type FabricLink {
    source: ID!
    target: ID!
    type: String!
  }

  type PlaybookRun {
    id: ID!
    playbookCode: String!
    status: String!
    progress: Float!
    startedAt: String!
  }

  type Team {
    name: String!
    type: String
  }

  input AssessmentInput {
    orgId: ID!
    arch: Float!
    proc: Float!
    data: Float!
    ops: Float!
  }

  type FlowAsset {
    id: ID!
    name: String!
    description: String
    flowType: String!
    cognitiveLevel: String!
    steps: [FlowStep!]!
  }

  type FlowStep {
    id: ID!
    name: String!
    capacityId: String
    timeoutSeconds: Int
  }

  input FlowInput {
    orgSlug: String!
    name: String!
    description: String
    flowType: String!
    cognitiveLevel: String!
    steps: [FlowStepInput!]!
  }

  input FlowStepInput {
    name: String!
    capacityId: String
    timeoutSeconds: Int
  }
`;

const resolvers = {
    Query: {
        organization: async (_: any, { slug }: { slug: string }) => {
            return await prisma.organization.findUnique({ where: { slug } });
        },
        health: async (_: any, { orgId }: { orgId: string }) => {
            const snapshot = await prisma.snapshot.findFirst({
                where: { organizationId: orgId },
                orderBy: { recordedAt: 'desc' },
                include: { hOrgScore: { include: { dimensions: true } } }
            });

            if (!snapshot || !snapshot.hOrgScore) return null;

            return {
                score: snapshot.hOrgScore.value,
                gate: snapshot.hOrgScore.healthGate,
                dimensions: snapshot.hOrgScore.dimensions,
            };
        },
        strategy: async (_: any, { orgId }: { orgId: string }) => {
            const snapshot = await prisma.snapshot.findFirst({
                where: { organizationId: orgId },
                orderBy: { recordedAt: 'desc' },
                include: { hOrgScore: true }
            });

            if (!snapshot || !snapshot.hOrgScore) return null;

            const hOrg = snapshot.hOrgScore.value;

            let trajectory = 'SURVIVAL';
            let description = 'Modo Supervivencia: Riesgo inminente de colapso sistémico.';
            let focus = 'Estabilidad Operativa';
            let playbooks = [
                { id: 'p1', code: 'P01', name: 'Recuperación', description: 'Estabilizar flujos críticos.' },
                { id: 'p2', code: 'R1', name: 'Reducción de Deuda', description: 'Eliminar cuellos de botella técnicos.' }
            ];

            if (hOrg >= 80) {
                trajectory = 'ADVANCED';
                description = 'Modo Líquido: Alta adaptabilidad y resiliencia.';
                focus = 'Innovación Continua';
                playbooks = [
                    { id: 'p5', code: 'I1', name: 'Experimentación', description: 'Explorar nuevos modelos de negocio.' },
                    { id: 'p6', code: 'S1', name: 'Escalamiento', description: 'Amplificar el impacto.' }
                ];
            } else if (hOrg >= 60) {
                trajectory = 'MINIMAL';
                description = 'Agilidad Mínima Viable: Flujo estable pero optimizable.';
                focus = 'Eficiencia de Flujo';
                playbooks = [
                    { id: 'p3', code: 'O1', name: 'Optimización', description: 'Mejorar métricas de flujo.' },
                    { id: 'p4', code: 'A1', name: 'Alineación', description: 'Conectar estrategia con ejecución.' }
                ];
            }

            return {
                trajectory,
                description,
                focus,
                playbooks
            };
        },
        activePlaybooks: async (_: any, { orgId }: { orgId: string }) => {
            return await prisma.playbookRun.findMany({
                where: {
                    organizationId: orgId,
                    status: { in: ['IN_PROGRESS', 'PLANNED'] }
                },
                orderBy: { startedAt: 'desc' }
            });
        },
        flow: async (_: any, { id }: { id: string }) => {
            try {
                const result = await read(GET_FLOW_QUERY, { flowId: id });
                if (result.length === 0) return null;

                const record = result[0];
                const f = record.f.properties;
                const steps = record.steps.filter((s: any) => s !== null); // Filter out nulls from optional match

                return {
                    id: f.id,
                    name: f.name,
                    description: f.description,
                    flowType: f.flow_type,
                    cognitiveLevel: f.cognitive_level,
                    steps: steps
                };
            } catch (error) {
                console.error("Error fetching flow:", error);
                return null;
            }
        }
    },
    Mutation: {
        recordAssessment: async (_: any, { input }: { input: any }) => {
            const { orgId, arch, proc, data, ops } = input;
            const avg = (arch + proc + data + ops) / 4;

            let gate = 'G1';
            if (avg >= 80) gate = 'G4';
            else if (avg >= 70) gate = 'G3';
            else if (avg >= 60) gate = 'G2';

            const snapshot = await prisma.snapshot.create({
                data: {
                    organizationId: orgId,
                    triggerSource: 'manual',
                    hOrgScore: {
                        create: {
                            value: avg,
                            healthGate: gate,
                            dimensions: {
                                create: [
                                    { dimension: 'Architecture', value: arch },
                                    { dimension: 'Processes', value: proc },
                                    { dimension: 'Data', value: data },
                                    { dimension: 'Operation', value: ops },
                                ]
                            }
                        }
                    }
                },
                include: { hOrgScore: { include: { dimensions: true } } }
            });

            return {
                score: snapshot.hOrgScore!.value,
                gate: snapshot.hOrgScore!.healthGate,
                dimensions: snapshot.hOrgScore!.dimensions,
            };
        },
        startPlaybook: async (_: any, { orgId, code }: { orgId: string, code: string }) => {
            return await prisma.playbookRun.create({
                data: {
                    organizationId: orgId,
                    playbookId: code,
                    status: 'IN_PROGRESS',
                    progress: 0
                }
            });
        },
        createFlow: async (_: any, { input }: { input: any }) => {
            const { orgSlug, name, description, flowType, cognitiveLevel, steps } = input;
            const flowId = crypto.randomUUID();

            try {
                // 1. Create Flow Node
                await write(CREATE_FLOW_QUERY, {
                    orgSlug,
                    flowId,
                    name,
                    description,
                    flowType,
                    cognitiveLevel
                });

                // 2. Create Steps
                let previousStepId = null;

                for (let i = 0; i < steps.length; i++) {
                    const step = steps[i];
                    const stepId = crypto.randomUUID();

                    await write(CREATE_STEP_QUERY, {
                        flowId,
                        stepId,
                        name: step.name,
                        timeout: step.timeoutSeconds || 0,
                        order: i
                    });

                    // Link to Capacity
                    if (step.capacityId) {
                        await write(LINK_CAPACITY_QUERY, { stepId, capId: step.capacityId });
                    }

                    // Link steps sequentially
                    if (previousStepId) {
                        await write(LINK_STEPS_QUERY, { prevId: previousStepId, currId: stepId });
                    }

                    previousStepId = stepId;
                }

                return {
                    id: flowId,
                    name,
                    description,
                    flowType,
                    cognitiveLevel,
                    steps: steps.map((s: any, i: number) => ({
                        id: `step-${i}`,
                        name: s.name,
                        capacityId: s.capacityId,
                        timeoutSeconds: s.timeoutSeconds
                    }))
                };

            } catch (error) {
                console.error("Error creating flow:", error);
                throw new Error("Failed to create flow in Neo4j");
            }
        },
        updateFlow: async (_: any, { id, input }: { id: string, input: any }) => {
            const { name, description, flowType, cognitiveLevel, steps } = input;

            try {
                // 1. Update Flow Node properties
                await write(UPDATE_FLOW_QUERY, {
                    flowId: id,
                    name,
                    description,
                    flowType,
                    cognitiveLevel
                });

                // 2. Delete existing steps
                await write(DELETE_FLOW_STEPS_QUERY, { flowId: id });

                // 3. Re-create Steps
                let previousStepId = null;

                for (let i = 0; i < steps.length; i++) {
                    const step = steps[i];
                    const stepId = crypto.randomUUID();

                    await write(CREATE_STEP_QUERY, {
                        flowId: id,
                        stepId,
                        name: step.name,
                        timeout: step.timeoutSeconds || 0,
                        order: i
                    });

                    // Link to Capacity
                    if (step.capacityId) {
                        await write(LINK_CAPACITY_QUERY, { stepId, capId: step.capacityId });
                    }

                    // Link steps sequentially
                    if (previousStepId) {
                        await write(LINK_STEPS_QUERY, { prevId: previousStepId, currId: stepId });
                    }

                    previousStepId = stepId;
                }

                return {
                    id,
                    name,
                    description,
                    flowType,
                    cognitiveLevel,
                    steps: steps.map((s: any, i: number) => ({
                        id: `step-${i}`,
                        name: s.name,
                        capacityId: s.capacityId,
                        timeoutSeconds: s.timeoutSeconds
                    }))
                };

            } catch (error) {
                console.error("Error updating flow:", error);
                throw new Error("Failed to update flow in Neo4j");
            }
        },
    },
    Organization: {
        health: async (parent: any) => {
            const snapshot = await prisma.snapshot.findFirst({
                where: { organizationId: parent.id },
                orderBy: { recordedAt: 'desc' },
                include: { hOrgScore: { include: { dimensions: true } } }
            });

            if (!snapshot || !snapshot.hOrgScore) return null;

            return {
                score: snapshot.hOrgScore.value,
                gate: snapshot.hOrgScore.healthGate,
                dimensions: snapshot.hOrgScore.dimensions,
            };
        },
        strategy: async (parent: any) => {
            const snapshot = await prisma.snapshot.findFirst({
                where: { organizationId: parent.id },
                orderBy: { recordedAt: 'desc' },
                include: { hOrgScore: { include: { dimensions: true } } }
            });

            if (!snapshot || !snapshot.hOrgScore) return null;
            const hOrg = snapshot.hOrgScore.value;

            let trajectory = 'SURVIVAL';
            let description = 'Modo Supervivencia: Riesgo inminente de colapso sistémico.';
            let focus = 'Estabilidad Operativa';
            let playbooks = [
                { id: 'p1', code: 'P01', name: 'Recuperación', description: 'Estabilizar flujos críticos.' },
                { id: 'p2', code: 'R1', name: 'Reducción de Deuda', description: 'Eliminar cuellos de botella técnicos.' }
            ];

            if (hOrg >= 80) {
                trajectory = 'ADVANCED';
                description = 'Modo Líquido: Alta adaptabilidad y resiliencia.';
                focus = 'Innovación Continua';
                playbooks = [
                    { id: 'p5', code: 'I1', name: 'Experimentación', description: 'Explorar nuevos modelos de negocio.' },
                    { id: 'p6', code: 'S1', name: 'Escalamiento', description: 'Amplificar el impacto.' }
                ];
            } else if (hOrg >= 60) {
                trajectory = 'MINIMAL';
                description = 'Agilidad Mínima Viable: Flujo estable pero optimizable.';
                focus = 'Eficiencia de Flujo';
                playbooks = [
                    { id: 'p3', code: 'O1', name: 'Optimización', description: 'Mejorar métricas de flujo.' },
                    { id: 'p4', code: 'A1', name: 'Alineación', description: 'Conectar estrategia con ejecución.' }
                ];
            }

            return { trajectory, description, focus, playbooks };
        },
        fabric: async (parent: any) => {
            try {
                const query = `
                    MATCH (n)
                    OPTIONAL MATCH (n)-[r]->(m)
                    RETURN n, r, m
                `;

                const result = await read(query);

                const nodesMap = new Map();
                const links: any[] = [];

                result.forEach((record: any) => {
                    const n = record.n;
                    if (n) {
                        nodesMap.set(n.elementId, {
                            id: n.elementId,
                            label: n.properties.name || n.labels[0],
                            type: n.labels[0],
                            group: n.labels[0]
                        });
                    }

                    const m = record.m;
                    if (m) {
                        nodesMap.set(m.elementId, {
                            id: m.elementId,
                            label: m.properties.name || m.labels[0],
                            type: m.labels[0],
                            group: m.labels[0]
                        });
                    }

                    const r = record.r;
                    if (r) {
                        links.push({
                            source: r.startNodeElementId,
                            target: r.endNodeElementId,
                            type: r.type
                        });
                    }
                });

                return {
                    nodes: Array.from(nodesMap.values()),
                    links: links
                };
            } catch (error) {
                console.error("Neo4j Error:", error);
                return { nodes: [], links: [] };
            }
        },
        activePlaybooks: async (parent: any) => {
            return await prisma.playbookRun.findMany({
                where: {
                    organizationId: parent.id,
                    status: { in: ['IN_PROGRESS', 'PLANNED'] }
                },
                orderBy: { startedAt: 'desc' }
            });
        }
    },
    PlaybookRun: {
        playbookCode: (parent: any) => parent.playbookId,
        startedAt: (parent: any) => parent.startedAt.toISOString()
    }
};

const schema = createSchema({
    typeDefs,
    resolvers,
});

const { handleRequest } = createYoga({
    schema,
    graphqlEndpoint: '/api/graphql',
    fetchAPI: { Response }
});

export { handleRequest as GET, handleRequest as POST };
