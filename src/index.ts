import { app } from "./app";
import { setupDatabase } from "./Database/index"

const initializeApp = async() : Promise<void> => {
  try {
    await setupDatabase();
    await app();
    console.log("Application and database initialized successfully.");
  } catch (err : any) {
    console.error(`Failed to initialize application: ${err.message}`);
    process.exit(1);
  }
}

initializeApp()