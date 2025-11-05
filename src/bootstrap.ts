import { createApp } from "./createApp";
import { dbPromise } from "./Database/index";

const PORT = process.env.PORT || 3000;

export async function startApp() {
    await dbPromise;
    const app = await createApp();
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT} ----`);
    });
}