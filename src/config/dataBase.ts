import MongoClient from 'mongodb'
import chalk from 'chalk'
class DataBase {

    async init() {
        const MONGODB = String(process.env.DATABASE);
        const client = await MongoClient.connect(MONGODB, { useNewUrlParser: true });
        const db = await client.db();
        if (client.isConnected()) {
            console.log("==========DataBase========");
            console.log(`Status: ${chalk.greenBright('Online')}`);
            console.log(`Status: ${chalk.greenBright(db.databaseName)}`);
        }
        return db;
    }
}

export default DataBase;