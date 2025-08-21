import { mainMenu } from "./View/MainMenu/mainMenu";
import { anotherRequest } from "./View/Prompts/anotherRequest";

export async function app(): Promise<void> {
  try {
    const continueApp = await mainMenu();
    if (continueApp) {
      await anotherRequest();
    } 
  } catch (error) {
    console.error("An error occurred:", error instanceof Error ? error.message : "Unexpected error");
  }
}