import { getValidInput } from "../../View/getValidInput";
import { promptsBank } from "../../View/promptsBank";
import { newAction } from "../../View/MainMenu/newAction";
import { sqliteUserRepository } from "../../Repository/sqliteUserRepository";
import { memorySessionManager } from "../../Session/memorySessionManager";

export async function mainMenu(): Promise<void> {
  const repo = sqliteUserRepository;
  const session = memorySessionManager;
  const actionMap = newAction

  while (true) {
    try {
      const action = await getValidInput(promptsBank.mainMenu);
      const handler = actionMap[action as keyof typeof newAction].handle;
      if (!handler) {
        console.log("Invalid action selected.");
        continue;
      }
      const result = await handler(repo, session);
      if (result === false) {
        break;
      }
    } catch (error) {
      console.error("An error occurred:", error instanceof Error ? error.message : "Unexpected error");
    }
  }
}



