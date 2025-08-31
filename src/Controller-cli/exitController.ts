import { exitPrompt } from "../View/Prompts/exitPrompt";
import { exitView } from "../View/Prompts/exitView";
import { UserRepository } from "../Repository/interface";
import { SessionManager } from "../Session/interface";
import { validateUser } from "../Validation/Lojic-Validation/validateUser";

export async function exitController(repo: UserRepository,session: SessionManager): Promise<boolean> {
  try {
    await validateUser(repo, session);
    const { confirm } = await exitPrompt();
    if (!confirm) {
      console.log("Exit cancelled.");
      return false;
    }
    exitView();
    return true;
  } catch (error) {
    console.error(error instanceof Error ? error.message : "Unexpected error");
    return false;
  }
}
