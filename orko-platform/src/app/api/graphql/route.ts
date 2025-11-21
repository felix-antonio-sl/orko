import { createSchema, createYoga } from 'graphql-yoga';
import { NextRequest, NextResponse } from 'next/server';
// Force rebuild
import { PrismaClient } from '@prisma/client';
import { write, read } from '@/lib/neo4j';
import crypto from 'crypto';

const prisma = new PrismaClient();

const CREATE_FLOW_QUERY = `
  MATCH (o:Organization {slug: $orgSlug})
  CREATE (f:FlowAsset:ValueStream {
    id: $flowId,
    name: $name,
    description: $description,
    flow_type: $flowType,
    cognitive_level: $cognitiveLevel,
    outcome: $outcome,
    customer: $customer,
    owner: $owner,
    criticality: $criticality,
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
    timeout_seconds: $timeout,
    inputs: $inputs,
    outputs: $outputs
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

const LINK_ASSET_CONSUMES_QUERY = `
  MATCH (s:FlowStep {id: $stepId})
  MATCH (d:DataAsset {id: $assetId})
  CREATE (s)-[:CONSUMES]->(d)
`;

const LINK_ASSET_PRODUCES_QUERY = `
  MATCH (s:FlowStep {id: $stepId})
  MATCH (d:DataAsset {id: $assetId})
  CREATE (s)-[:PRODUCES]->(d)
`;

const GET_FLOW_QUERY = `
  MATCH(f: FlowAsset { id: $flowId })
  OPTIONAL MATCH(f) - [r: HAS_STEP] -> (s:FlowStep)
  OPTIONAL MATCH(s) - [: EXECUTED_BY] -> (c)
  OPTIONAL MATCH(s) - [: CONSUMES] -> (d_in:DataAsset)
  OPTIONAL MATCH(s) - [: PRODUCES] -> (d_out:DataAsset)
  WITH f, s, r, c, collect(DISTINCT d_in.id) as consumedIds, collect(DISTINCT d_out.id) as producedIds
  ORDER BY r.order
  RETURN f, collect(CASE WHEN s IS NOT NULL THEN {
    id: s.id,
    name: s.name,
    timeoutSeconds: s.timeout_seconds,
    capacityId: CASE WHEN c IS NOT NULL THEN elementId(c) ELSE null END,
    inputs: s.inputs,
    outputs: s.outputs,
    consumedAssetIds: consumedIds,
    producedAssetIds: producedIds
} ELSE null END) as steps
`;

const UPDATE_FLOW_QUERY = `
MATCH(f: FlowAsset { id: $flowId })
  SET f.name = $name,
    f.description = $description,
    f.flow_type = $flowType,
    f.cognitive_level = $cognitiveLevel,
    f.outcome = $outcome,
    f.customer = $customer,
    f.owner = $owner,
    f.criticality = $criticality
  RETURN f
    `;

const DELETE_FLOW_STEPS_QUERY = `
MATCH(f: FlowAsset { id: $flowId }) - [r: HAS_STEP] -> (s:FlowStep)
  DETACH DELETE s
    `;

const CREATE_TEAM_QUERY = `
MATCH(o: Organization { slug: $orgSlug })
CREATE(t: Team {
    id: $id,
    name: $name,
    type: $type,
    description: $description
})
CREATE(t) - [: BELONGS_TO] -> (o)
  RETURN t
    `;

const CREATE_PERSON_QUERY = `
MATCH(o: Organization { slug: $orgSlug })
CREATE(p: Person {
    id: $id,
    name: $name,
    role: $role,
    email: $email
})
CREATE(p) - [: BELONGS_TO] -> (o)
  RETURN p
    `;

const GET_CAPACITIES_QUERY = `
MATCH(o: Organization { slug: $orgSlug })
MATCH(c) - [: BELONGS_TO] -> (o)
  WHERE c:Team OR c: Person
  RETURN c
    `;

const CREATE_DATA_ASSET_QUERY = `
MATCH(o: Organization { slug: $orgSlug })
CREATE(d: DataAsset {
    id: $id,
    name: $name,
    type: $type,
    description: $description,
    source: $source
})
CREATE(d) - [: BELONGS_TO] -> (o)
  RETURN d
    `;

const ADD_MEMBER_QUERY = `
MATCH(t: Team { id: $teamId })
MATCH(p: Person { id: $personId })
CREATE(p) - [: MEMBER_OF] -> (t)
  RETURN t
    `;

const GET_DATA_ASSETS_QUERY = `
MATCH(o: Organization { slug: $orgSlug })
MATCH(d: DataAsset) - [: BELONGS_TO] -> (o)
  RETURN d
    `;

const CREATE_STRATEGIC_OBJECTIVE_QUERY = `
  MATCH(o: Organization { slug: $orgSlug })
  CREATE(obj: StrategicObjective {
    id: $id,
    description: $description,
    type: $type,
    status: $status
  })
  CREATE(obj) - [: BELONGS_TO] -> (o)
  RETURN obj
    `;

const GET_STRATEGIC_OBJECTIVES_QUERY = `
  MATCH(o: Organization { slug: $orgSlug })
  MATCH(obj: StrategicObjective) - [: BELONGS_TO] -> (o)
  RETURN obj
    `;

const LINK_FLOW_TO_OBJECTIVE_QUERY = `
  MATCH(f: FlowAsset { id: $flowId })
  MATCH(obj: StrategicObjective { id: $objectiveId })
  MERGE(f) - [: CONTRIBUTES_TO] -> (obj)
    `;

const UNLINK_FLOW_OBJECTIVES_QUERY = `
  MATCH (f:FlowAsset {id: $flowId})-[r:CONTRIBUTES_TO]->(:StrategicObjective)
  DELETE r
`;

// Individual node GET queries
const GET_TEAM_QUERY = `
  MATCH (t:Team {id: $id})
  RETURN t
`;

const GET_PERSON_QUERY = `
  MATCH (p:Person {id: $id})
  RETURN p
`;

const GET_DATA_ASSET_QUERY = `
  MATCH (d:DataAsset {id: $id})
  RETURN d
`;

const GET_STRATEGIC_OBJECTIVE_QUERY = `
  MATCH (o:StrategicObjective {id: $id})
  RETURN o
`;

// UPDATE queries
const UPDATE_TEAM_QUERY = `
  MATCH (t:Team {id: $id})
  SET t.name = $name,
      t.type = $type,
      t.description = $description
  RETURN t
`;

const UPDATE_PERSON_QUERY = `
  MATCH (p:Person {id: $id})
  SET p.name = $name,
      p.role = $role,
      p.email = $email
  RETURN p
`;

const UPDATE_DATA_ASSET_QUERY = `
  MATCH (d:DataAsset {id: $id})
  SET d.name = $name,
      d.type = $type,
      d.description = $description,
      d.source = $source
  RETURN d
`;

const UPDATE_STRATEGIC_OBJECTIVE_QUERY = `
  MATCH (o:StrategicObjective {id: $id})
  SET o.description = $description,
      o.type = $type,
      o.status = $status
  RETURN o
`;

const typeDefs = `
  input TeamInput {
    orgSlug: String!
    name: String!
    type: String!
    description: String
}

  input PersonInput {
    orgSlug: String!
    name: String!
    role: String!
    email: String
}

  input DataAssetInput {
    orgSlug: String!
    name: String!
    type: String!
    description: String
    source: String
}

type Query {
    organization(slug: String!): Organization
    health(orgId: ID!): HealthState
    strategy(orgId: ID!): Strategy
    activePlaybooks(orgId: ID!): [PlaybookRun!]!
    flow(id: ID!): FlowAsset
    capacities(orgSlug: String!): [Capacity!]!
    dataAssets(orgSlug: String!): [DataAsset!]!
    strategicObjectives(orgSlug: String!): [StrategicObjective!]!
    team(id: ID!): Team
    person(id: ID!): Person
    dataAsset(id: ID!): DataAsset
    strategicObjective(id: ID!): StrategicObjective
}

type Mutation {
    recordAssessment(input: AssessmentInput!): HealthState
    startPlaybook(orgId: ID!, code: String!): PlaybookRun
    createFlow(input: FlowInput!): FlowAsset
    updateFlow(id: ID!, input: FlowInput!): FlowAsset
    createTeam(input: TeamInput!): Team
    createPerson(input: PersonInput!): Person
    createDataAsset(input: DataAssetInput!): DataAsset
    addMemberToTeam(teamId: ID!, personId: ID!): Team
    createStrategicObjective(input: StrategicObjectiveInput!): StrategicObjective
    updateTeam(id: ID!, input: TeamInput!): Team
    updatePerson(id: ID!, input: PersonInput!): Person
    updateDataAsset(id: ID!, input: DataAssetInput!): DataAsset
    updateStrategicObjective(id: ID!, input: StrategicObjectiveInput!): StrategicObjective
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
    id: ID!
    name: String!
    type: String
    description: String
}

type Person {
    id: ID!
    name: String!
    role: String
    email: String
}

type Capacity {
    id: ID!
    name: String!
    type: String!
}

type DataAsset {
    id: ID!
    name: String!
    type: String!
    description: String
    source: String
}

type StrategicObjective {
    id: ID!
    description: String!
    type: String!
    status: String!
}

  input StrategicObjectiveInput {
    orgSlug: String!
    description: String!
    type: String!
    status: String!
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
    outcome: String
    customer: String
    owner: String
    criticality: String
    steps: [FlowStep!]!
    isOrphaned: Boolean!
    objectiveId: String
}

type FlowStep {
    id: ID!
    name: String!
    capacityId: String
    timeoutSeconds: Int
    inputs: String
    outputs: String
    consumedAssetIds: [ID!]
    producedAssetIds: [ID!]
}

  input FlowInput {
    orgSlug: String!
    name: String!
    description: String
    flowType: String!
    cognitiveLevel: String!
    outcome: String
    customer: String
    owner: String
    criticality: String
    steps: [FlowStepInput!]!
    objectiveId: String
}

  input FlowStepInput {
    name: String!
    capacityId: String
    timeoutSeconds: Int
    inputs: String
    outputs: String
    consumedAssetIds: [ID!]
    producedAssetIds: [ID!]
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
                const steps = record.steps.filter((s: any) => s !== null);

                return {
                    id: f.id,
                    name: f.name,
                    description: f.description,
                    flowType: f.flow_type,
                    cognitiveLevel: f.cognitive_level,
                    outcome: f.outcome,
                    customer: f.customer,
                    owner: f.owner,
                    criticality: f.criticality,
                    steps: steps,
                    isOrphaned: !f.customer || f.customer.trim() === ''
                };
            } catch (error) {
                console.error("Error fetching flow:", error);
                return null;
            }
        },
        capacities: async (_: any, { orgSlug }: { orgSlug: string }) => {
            try {
                const result = await read(GET_CAPACITIES_QUERY, { orgSlug });
                return result.map((record: any) => {
                    const c = record.c.properties;
                    return {
                        id: c.id,
                        name: c.name,
                        type: record.c.labels.includes('Team') ? 'Team' : 'Person'
                    };
                });
            } catch (error) {
                console.error("Error fetching capacities:", error);
                return [];
            }
        },
        dataAssets: async (_: any, { orgSlug }: { orgSlug: string }) => {
            try {
                const result = await read(GET_DATA_ASSETS_QUERY, { orgSlug });
                return result.map((record: any) => {
                    const d = record.d.properties;
                    return {
                        id: d.id,
                        name: d.name,
                        type: d.type,
                        description: d.description,
                        source: d.source
                    };
                });
            } catch (error) {
                console.error("Error fetching data assets:", error);
                return [];
            }
        },
        strategicObjectives: async (_: any, { orgSlug }: { orgSlug: string }) => {
            try {
                const result = await read(GET_STRATEGIC_OBJECTIVES_QUERY, { orgSlug });
                return result.map((record: any) => {
                    const obj = record.obj.properties;
                    return {
                        id: obj.id,
                        description: obj.description,
                        type: obj.type,
                        status: obj.status
                    };
                });
            } catch (error) {
                console.error("Error fetching strategic objectives:", error);
                return [];
            }
        },
        team: async (_: any, { id }: { id: string }) => {
            try {
                const result = await read(GET_TEAM_QUERY, { id });
                if (result.length === 0) return null;
                const t = result[0].t.properties;
                return {
                    id: t.id,
                    name: t.name,
                    type: t.type,
                    description: t.description
                };
            } catch (error) {
                console.error('Error fetching team:', error);
                return null;
            }
        },
        person: async (_: any, { id }: { id: string }) => {
            try {
                const result = await read(GET_PERSON_QUERY, { id });
                if (result.length === 0) return null;
                const p = result[0].p.properties;
                return {
                    id: p.id,
                    name: p.name,
                    role: p.role,
                    email: p.email
                };
            } catch (error) {
                console.error('Error fetching person:', error);
                return null;
            }
        },
        dataAsset: async (_: any, { id }: { id: string }) => {
            try {
                const result = await read(GET_DATA_ASSET_QUERY, { id });
                if (result.length === 0) return null;
                const d = result[0].d.properties;
                return {
                    id: d.id,
                    name: d.name,
                    type: d.type,
                    description: d.description,
                    source: d.source
                };
            } catch (error) {
                console.error('Error fetching data asset:', error);
                return null;
            }
        },
        strategicObjective: async (_: any, { id }: { id: string }) => {
            try {
                const result = await read(GET_STRATEGIC_OBJECTIVE_QUERY, { id });
                if (result.length === 0) return null;
                const o = result[0].o.properties;
                return {
                    id: o.id,
                    description: o.description,
                    type: o.type,
                    status: o.status
                };
            } catch (error) {
                console.error('Error fetching strategic objective:', error);
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
            const { orgSlug, name, description, flowType, cognitiveLevel, outcome, customer, owner, criticality, steps, objectiveId } = input;
            const flowId = crypto.randomUUID();

            try {
                // 1. Create Flow Node
                await write(CREATE_FLOW_QUERY, {
                    orgSlug,
                    flowId,
                    name,
                    description,
                    flowType,
                    cognitiveLevel,
                    outcome: outcome || null,
                    customer: customer || null,
                    owner: owner || null,
                    criticality: criticality || null
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
                        inputs: step.inputs || null,
                        outputs: step.outputs || null,
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

                    // Link Data Assets (Consumes)
                    if (step.consumedAssetIds && step.consumedAssetIds.length > 0) {
                        for (const assetId of step.consumedAssetIds) {
                            await write(LINK_ASSET_CONSUMES_QUERY, { stepId, assetId });
                        }
                    }

                    // Link Data Assets (Produces)
                    if (step.producedAssetIds && step.producedAssetIds.length > 0) {
                        for (const assetId of step.producedAssetIds) {
                            await write(LINK_ASSET_PRODUCES_QUERY, { stepId, assetId });
                        }
                    }
                }

                // Link to Strategic Objective
                if (objectiveId) {
                    await write(LINK_FLOW_TO_OBJECTIVE_QUERY, { flowId, objectiveId });
                }

                return {
                    id: flowId,
                    name,
                    description,
                    flowType,
                    cognitiveLevel,
                    steps: steps.map((s: any, i: number) => ({
                        id: `step - ${i} `,
                        name: s.name,
                        capacityId: s.capacityId,
                        timeoutSeconds: s.timeoutSeconds,
                        consumedAssetIds: s.consumedAssetIds || [],
                        producedAssetIds: s.producedAssetIds || []
                    })),
                    objectiveId
                };

            } catch (error) {
                console.error("Error creating flow:", error);
                throw new Error("Failed to create flow in Neo4j");
            }
        },
        updateFlow: async (_: any, { id, input }: { id: string, input: any }) => {
            const { name, description, flowType, cognitiveLevel, outcome, customer, owner, criticality, steps, objectiveId } = input;

            try {
                // 1. Update Flow Node properties
                await write(UPDATE_FLOW_QUERY, {
                    flowId: id,
                    name,
                    description,
                    flowType,
                    cognitiveLevel,
                    outcome: outcome || null,
                    customer: customer || null,
                    owner: owner || null,
                    criticality: criticality || null
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
                        inputs: step.inputs || null,
                        outputs: step.outputs || null,
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

                    // Link Data Assets (Consumes)
                    if (step.consumedAssetIds && step.consumedAssetIds.length > 0) {
                        for (const assetId of step.consumedAssetIds) {
                            await write(LINK_ASSET_CONSUMES_QUERY, { stepId, assetId });
                        }
                    }

                    // Link Data Assets (Produces)
                    if (step.producedAssetIds && step.producedAssetIds.length > 0) {
                        for (const assetId of step.producedAssetIds) {
                            await write(LINK_ASSET_PRODUCES_QUERY, { stepId, assetId });
                        }
                    }
                }

                // Link to Strategic Objective
                // First remove existing links
                await write(UNLINK_FLOW_OBJECTIVES_QUERY, { flowId: id });

                if (objectiveId) {
                    await write(LINK_FLOW_TO_OBJECTIVE_QUERY, { flowId: id, objectiveId });
                }

                return {
                    id,
                    name,
                    description,
                    flowType,
                    cognitiveLevel,
                    outcome,
                    customer,
                    owner,
                    criticality,
                    steps: steps.map((s: any, i: number) => ({
                        id: `step - ${i} `,
                        name: s.name,
                        capacityId: s.capacityId,
                        timeoutSeconds: s.timeoutSeconds,
                        inputs: s.inputs,
                        outputs: s.outputs,
                        consumedAssetIds: s.consumedAssetIds || [],
                        producedAssetIds: s.producedAssetIds || []
                    })),
                    objectiveId
                };

            } catch (error) {
                console.error("Error updating flow:", error);
                throw new Error("Failed to update flow in Neo4j");
            }
        },
        createTeam: async (_: any, { input }: { input: any }) => {
            const { orgSlug, name, type, description } = input;
            const id = crypto.randomUUID();
            try {
                const result = await write(CREATE_TEAM_QUERY, { id, orgSlug, name, type, description: description || '' });
                return result[0].t.properties;
            } catch (error) {
                console.error("Error creating team:", error);
                throw new Error("Failed to create team");
            }
        },
        createPerson: async (_: any, { input }: { input: any }) => {
            const { orgSlug, name, role, email } = input;
            const id = crypto.randomUUID();
            try {
                const result = await write(CREATE_PERSON_QUERY, { id, orgSlug, name, role, email: email || '' });
                return result[0].p.properties;
            } catch (error) {
                throw new Error("Failed to create person");
            }
        },
        createDataAsset: async (_: any, { input }: { input: any }) => {
            const { orgSlug, name, type, description, source } = input;
            const id = crypto.randomUUID();
            try {
                const result = await write(CREATE_DATA_ASSET_QUERY, {
                    id,
                    orgSlug,
                    name,
                    type,
                    description: description || '',
                    source: source || ''
                });
                return result[0].d.properties;
            } catch (error) {
                console.error("Error creating data asset:", error);
                throw new Error("Failed to create data asset");
            }
        },
        addMemberToTeam: async (_: any, { teamId, personId }: { teamId: string, personId: string }) => {
            try {
                const result = await write(ADD_MEMBER_QUERY, { teamId, personId });
                return result[0].t.properties;
            } catch (error) {
                console.error("Error adding member to team:", error);
                throw new Error("Failed to add member to team");
            }
        },
        createStrategicObjective: async (_: any, { input }: { input: any }) => {
            const { orgSlug, description, type, status } = input;
            const id = crypto.randomUUID();
            try {
                const result = await write(CREATE_STRATEGIC_OBJECTIVE_QUERY, {
                    id,
                    orgSlug,
                    description,
                    type,
                    status
                });
                return result[0].obj.properties;
            } catch (error) {
                console.error("Error creating strategic objective:", error);
                throw new Error("Failed to create strategic objective");
            }
        },
        updateTeam: async (_: any, { id, input }: { id: string; input: any }) => {
            const { name, type, description } = input;
            try {
                const result = await write(UPDATE_TEAM_QUERY, {
                    id,
                    name,
                    type,
                    description: description || null
                });
                if (result.length === 0) return null;
                const t = result[0].t.properties;
                return {
                    id: t.id,
                    name: t.name,
                    type: t.type,
                    description: t.description
                };
            } catch (error) {
                console.error('Error updating team:', error);
                return null;
            }
        },
        updatePerson: async (_: any, { id, input }: { id: string; input: any }) => {
            const { name, role, email } = input;
            try {
                const result = await write(UPDATE_PERSON_QUERY, {
                    id,
                    name,
                    role,
                    email: email || null
                });
                if (result.length === 0) return null;
                const p = result[0].p.properties;
                return {
                    id: p.id,
                    name: p.name,
                    role: p.role,
                    email: p.email
                };
            } catch (error) {
                console.error('Error updating person:', error);
                return null;
            }
        },
        updateDataAsset: async (_: any, { id, input }: { id: string; input: any }) => {
            const { name, type, description, source } = input;
            try {
                const result = await write(UPDATE_DATA_ASSET_QUERY, {
                    id,
                    name,
                    type,
                    description: description || null,
                    source: source || null
                });
                if (result.length === 0) return null;
                const d = result[0].d.properties;
                return {
                    id: d.id,
                    name: d.name,
                    type: d.type,
                    description: d.description,
                    source: d.source
                };
            } catch (error) {
                console.error('Error updating data asset:', error);
                return null;
            }
        },
        updateStrategicObjective: async (_: any, { id, input }: { id: string; input: any }) => {
            const { description, type, status } = input;
            try {
                const result = await write(UPDATE_STRATEGIC_OBJECTIVE_QUERY, {
                    id,
                    description,
                    type,
                    status
                });
                if (result.length === 0) return null;
                const o = result[0].o.properties;
                return {
                    id: o.id,
                    description: o.description,
                    type: o.type,
                    status: o.status
                };
            } catch (error) {
                console.error('Error updating strategic objective:', error);
                return null;
            }
        }
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
                    { id: 'p4', code: 'A1', name: 'Alineación', description: 'Conectar estrategia con ejecución.' },
                    { id: 'p_gore_1', code: 'FT1', name: 'Fast-Track Inversión', description: 'Acelerar ejecución FNDR (GORE).' }
                ];
            }

            return { trajectory, description, focus, playbooks };
        },
        fabric: async (parent: any) => {
            try {
                const query = `
MATCH(n)
                    OPTIONAL MATCH(n) - [r] -> (m)
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
