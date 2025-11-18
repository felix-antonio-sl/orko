import { createSchema, createYoga } from 'graphql-yoga';
import { PrismaClient } from '@prisma/client';
import { read } from '@/lib/neo4j';

const prisma = new PrismaClient();

const typeDefs = `
  type Query {
    organization(slug: String!): Organization
    health(orgId: ID!): HealthState
    strategy(orgId: ID!): Strategy
  }

  type Mutation {
    recordAssessment(input: AssessmentInput!): HealthState
  }

  type Organization {
    id: ID!
    name: String!
    slug: String!
    health: HealthState
    fabric: FabricGraph
    strategy: Strategy
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
    teams: [Team!]!
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
            // Re-use the strategy logic or call the resolver
            // For simplicity in this MVP, we'll just call the logic again or delegate
            // But since we have the ID, we can just return null and let the client query 'strategy(orgId)'
            // Or better, implement it here too for nested queries.

            const snapshot = await prisma.snapshot.findFirst({
                where: { organizationId: parent.id },
                orderBy: { recordedAt: 'desc' },
                include: { hOrgScore: true }
            });

            if (!snapshot || !snapshot.hOrgScore) return null;
            const hOrg = snapshot.hOrgScore.value;

            // Logic duplication for MVP speed - in real app extract to service
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
            // Fetch teams from Neo4j
            const result = await read(`MATCH (t:Team) RETURN t`);
            const teams = result.map((r: any) => r.t.properties);
            return { teams };
        }
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
