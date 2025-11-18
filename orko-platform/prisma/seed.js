const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const org = await prisma.organization.upsert({
        where: { slug: 'generic-corp' },
        update: {},
        create: {
            name: 'Generic Corp',
            slug: 'generic-corp',
            context: {
                create: {
                    attributes: {
                        size: 'Enterprise',
                        industry: 'Finance'
                    }
                }
            },
            snapshots: {
                create: {
                    triggerSource: 'seed',
                    hOrgScore: {
                        create: {
                            value: 50,
                            healthGate: 'G1',
                            dimensions: {
                                create: [
                                    { dimension: 'Architecture', value: 50 },
                                    { dimension: 'Processes', value: 50 },
                                    { dimension: 'Data', value: 50 },
                                    { dimension: 'Operation', value: 50 },
                                ]
                            }
                        }
                    }
                }
            }
        },
    });
    console.log({ org });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
