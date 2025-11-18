const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const org = await prisma.organization.findUnique({
        where: { slug: 'gore-nuble' },
        include: { snapshots: true }
    });
    console.log('GORE Organization:', org);
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
