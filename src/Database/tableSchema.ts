import { Database } from 'sqlite3';

export const setupTables = (db: Database): Promise<void> =>
  new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run(
        `
        CREATE TABLE IF NOT EXISTS accounts (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          firstName TEXT NOT NULL,
          lastName TEXT NOT NULL,
          phone TEXT UNIQUE NOT NULL,
          balance REAL NOT NULL DEFAULT 0
        )
        `,
        (err) => {
          if (err) {
            console.error("Error creating 'accounts' table:", err.message);
            reject(err);
            return;
          }
          console.log("'accounts' table created successfully.");
          resolve();
        }
      );
    });
});