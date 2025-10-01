import { Database } from 'sqlite3';
import { ensureDataDirectory, getDbPath } from '../Database/fileSystem';
import { connectToDatabase } from '../Database/databaseConnection';
import { setupTables } from '../Database/tableSchema';

export const setupDatabase = async (): Promise<Database> => {
  try {
    ensureDataDirectory();
    const dbPath = getDbPath();
    const db = await connectToDatabase(dbPath);
    await setupTables(db);
    return db;
  } catch (err: any) {
    console.error(`Failed to initialize database: ${err.message}`);
    process.exit(1);
  }
};

export const dbPromise: Promise<Database> = setupDatabase();
