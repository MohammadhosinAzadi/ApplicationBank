import { setupDatabase } from "./Database/databaseSetup"
import { app } from "./app";
import { db } from "./Database/databaseSetup"

db.serialize(() => {
  setupDatabase();
  app();
});