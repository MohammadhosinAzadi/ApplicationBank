import { createApp } from "./app-server";
import { dbPromise } from "./Database/index";

const PORT = process.env.PORT || 3000;

async function startApp() {
  try {
    await dbPromise;
    const app = await createApp();
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (err: any) {
    console.error(`❌ Failed to start server: ${err.message}`);
    process.exit(1);
  }
}

startApp();
