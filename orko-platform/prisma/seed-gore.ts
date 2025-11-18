require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const neo4j = require('neo4j-driver');

const prisma = new PrismaClient();

const driver = neo4j.driver(
    process.env.NEO4J_URI || 'bolt://localhost:7687',
    neo4j.auth.basic(
        process.env.NEO4J_USER || 'neo4j',
        process.env.NEO4J_PASSWORD || 'orkopassword'
    )
);

async function main() {
    console.log('Seeding GORE de Ñuble...');

    // 1. Create Organization in Postgres
    const org = await prisma.organization.upsert({
        where: { slug: 'gore-nuble' },
        update: {},
        create: {
            name: 'Gobierno Regional de Ñuble',
            slug: 'gore-nuble',
            context: {
                create: {
                    attributes: {
                        sector: 'Public',
                        region: 'Ñuble',
                        budget: 'FNDR',
                        painPoints: ['Low Execution', 'Silos']
                    }
                }
            }
        }
    });

    console.log('Organization created:', org.id);

    // 2. Create Initial Snapshot (Survival Mode)
    // H_org = 55 (Survival)
    // Architecture: 40 (Silos)
    // Processes: 50 (Manual)
    // Data: 60 (Fragmented)
    // Operation: 70 (Functional but slow)

    await prisma.snapshot.create({
        data: {
            organizationId: org.id,
            triggerSource: 'seed',
            hOrgScore: {
                create: {
                    value: 55,
                    healthGate: 'G1', // Critical
                    dimensions: {
                        create: [
                            { dimension: 'Architecture', value: 40 },
                            { dimension: 'Processes', value: 50 },
                            { dimension: 'Data', value: 60 },
                            { dimension: 'Operation', value: 70 },
                        ]
                    }
                }
            }
        }
    });

    console.log('Snapshot created.');

    // 3. Seed Graph in Neo4j
    const session = driver.session();
    try {
        // Clear existing GORE nodes if any (by label or property, but for now we just add)
        // Ideally we should namespace by orgId, but for MVP we'll just add them.

        // Create Divisions (Teams)
        await session.run(`
      CREATE (g:Organization {name: 'GORE Ñuble', slug: 'gore-nuble'})
      CREATE (diplade:Team {name: 'DIPLADE', type: 'Strategy', org: 'gore-nuble'})
      CREATE (daf:Team {name: 'DAF', type: 'Enabling', org: 'gore-nuble'})
      CREATE (dipir:Team {name: 'DIPIR', type: 'StreamAligned', org: 'gore-nuble'})
      CREATE (dideso:Team {name: 'DIDESO', type: 'StreamAligned', org: 'gore-nuble'})
      CREATE (juridica:Team {name: 'Jurídica', type: 'Enabling', org: 'gore-nuble'})
      
      CREATE (diplade)-[:REPORTS_TO]->(g)
      CREATE (daf)-[:REPORTS_TO]->(g)
      CREATE (dipir)-[:REPORTS_TO]->(g)
      CREATE (dideso)-[:REPORTS_TO]->(g)
      CREATE (juridica)-[:REPORTS_TO]->(g)
    `);

        // Create Value Stream: Investment Cycle (FNDR)
        await session.run(`
      MATCH (diplade:Team {name: 'DIPLADE'}), (dipir:Team {name: 'DIPIR'}), (daf:Team {name: 'DAF'})
      
      CREATE (vs:ValueStream {name: 'Ciclo Inversión FNDR', org: 'gore-nuble'})
      
      // Flow
      CREATE (diplade)-[:OWNS_STEP {step: 'Evaluación Técnica'}]->(vs)
      CREATE (dipir)-[:OWNS_STEP {step: 'Asignación Presupuestaria'}]->(vs)
      CREATE (daf)-[:OWNS_STEP {step: 'Ejecución Financiera'}]->(vs)
      
      // Friction (The problem)
      CREATE (diplade)-[:BLOCKS {reason: 'Slow RS Approval'}]->(dipir)
    `);

        console.log('Neo4j Graph seeded.');

    } catch (error) {
        console.error('Neo4j Error:', error);
    } finally {
        await session.close();
        await driver.close();
        await prisma.$disconnect();
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
