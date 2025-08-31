import { existsSync, mkdirSync, accessSync, constants } from 'fs';
import { join, resolve } from 'path';

const dataDir: string = resolve(__dirname, '../../data');
const dbPath: string = join(dataDir, 'user.db');

export const ensureDataDirectory = (): void => {
    try {
        if (!existsSync(dataDir)) {
        mkdirSync(dataDir, { recursive: true });
        console.log(`Created data directory: ${dataDir}`);
    }
    accessSync(dataDir, constants.W_OK);
    console.log('Data directory is writable.');
  } catch (err: any) {
        console.error(`Failed to create or access data directory: ${err.message}`);
        process.exit(1);
    }
};

export const getDbPath = (): string => dbPath;