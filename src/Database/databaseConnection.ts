import { Database } from 'sqlite3';
import * as sqlite3 from 'sqlite3';

export const connectToDatabase = (dbPath: string): Promise<Database> =>
  new Promise((resolve, reject) => {
    const db = new Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
      if (err) {
        console.error(`Failed to connect to the database: ${err.message}`);
        reject(err);
        return;
      }
      console.log('Successfully connected to the bank database.');
      resolve(db);
    });
});