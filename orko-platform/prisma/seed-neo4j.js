const neo4j = require('neo4j-driver');

const driver = neo4j.driver(
    process.env.NEO4J_URI || 'bolt://localhost:7687',
    neo4j.auth.basic(
        process.env.NEO4J_USER || 'neo4j',
        process.env.NEO4J_PASSWORD || 'orkopassword'
    )
);

async function main() {
    const session = driver.session();
    try {
        // Clear existing data (optional, be careful in prod)
        await session.run('MATCH (n) DETACH DELETE n');

        // Create Teams
        await session.run(`
      CREATE (t1:Team {name: 'Platform Engineering', type: 'Enabling'})
      CREATE (t2:Team {name: 'Product Alpha', type: 'StreamAligned'})
      CREATE (t3:Team {name: 'Data Science', type: 'ComplicatedSubsystem'})
    `);

        // Create People
        await session.run(`
      MATCH (t1:Team {name: 'Platform Engineering'})
      CREATE (p1:Person {name: 'Alice'})
      CREATE (p1)-[:MEMBER_OF]->(t1)
    `);

        // Create Value Streams
        await session.run(`
      MATCH (t2:Team {name: 'Product Alpha'})
      CREATE (vs1:ValueStream {name: 'Customer Onboarding'})
      CREATE (t2)-[:OWNS]->(vs1)
    `);

        console.log('Neo4j seeded successfully');
    } catch (error) {
        console.error('Error seeding Neo4j:', error);
    } finally {
        await session.close();
        await driver.close();
    }
}

main();
