import neo4j, { Driver, Session, Transaction } from 'neo4j-driver';

let driver: Driver;

export function getDriver(): Driver {
    if (!driver) {
        const uri = process.env.NEO4J_URI || 'bolt://localhost:7687';
        const user = process.env.NEO4J_USER || 'neo4j';
        const password = process.env.NEO4J_PASSWORD || 'orkopassword';

        driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
    }
    return driver;
}

export async function read(cypher: string, params: Record<string, any> = {}) {
    const session = getDriver().session();
    try {
        const result = await session.executeRead((tx: Transaction) => tx.run(cypher, params));
        return result.records.map(record => record.toObject());
    } finally {
        await session.close();
    }
}

export async function write(cypher: string, params: Record<string, any> = {}) {
    const session = getDriver().session();
    try {
        const result = await session.executeWrite((tx: Transaction) => tx.run(cypher, params));
        return result.records.map(record => record.toObject());
    } finally {
        await session.close();
    }
}
