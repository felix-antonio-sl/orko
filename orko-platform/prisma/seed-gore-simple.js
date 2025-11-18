require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Seeding GORE de Ñuble (Simple)...');

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
                        budget: 'FNDR'
                    }
                }
            }
        }
    });

    console.log('Organization created:', org.id);

    await prisma.snapshot.create({
        data: {
            organizationId: org.id,
            triggerSource: 'seed-simple',
            hOrgScore: {
                create: {
                    value: 55,
                    healthGate: 'G1',
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
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
