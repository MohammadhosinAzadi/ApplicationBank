import sqlite3 from "sqlite3";
import path from "path";
import fs from "fs";

const dataDir = path.resolve(__dirname, "../../data");
const dbPath = path.join(dataDir, "user.db");

console.log("Database path:", dbPath);

try {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
    console.log("Created data directory:", dataDir);
  }
  fs.accessSync(dataDir, fs.constants.W_OK);
  console.log("Data directory is writable.");
} catch (err: any) {
  console.error("Failed to create or access data directory:", err.message);
  process.exit(1);
}

export const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) {
    console.error("Failed to connect to the database:", err.message);
    process.exit(1);
  }
  console.log("Successfully connected to the bank database.");
  setupDatabase();
});

export const setupDatabase = () => {
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
          process.exit(1);
        }
        console.log("'accounts' table created successfully.");
      }
    );
  });
};