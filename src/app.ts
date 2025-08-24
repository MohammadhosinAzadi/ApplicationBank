import { mainMenu } from "./View/MainMenu/mainMenu";

export async function app(): Promise<void> {
  try {
    await mainMenu();
  } catch (error) {
    console.error("An error occurred:", error instanceof Error ? error.message : "Unexpected error");
  }
}
