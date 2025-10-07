import { createApp } from "./app-server";
import { dbPromise } from "./Database/index";

const PORT = process.env.PORT || 3000;

async function startApp() {
    await dbPromise;
    const app = await createApp();
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT} ----`);
    });

}

startApp().catch((err) => {
  throw new Error(`App failed to start: ${err.message}`);
  
});
