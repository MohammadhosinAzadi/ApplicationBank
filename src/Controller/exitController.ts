import { exitPrompt, ExitInput } from "../View/Prompts/exitPrompt";
import { exitView } from "../View/Prompts/exitView";
import { UserRepository } from "../Repository/interface";
import { SessionManager } from "../Session/interface";
import { validateUser } from "../Validation/Lojic-Validation/validateUser";

export async function exitController(
  repo: UserRepository,
  session: SessionManager,
  promptFn = exitPrompt,
  displayFn = exitView,
  validateFn = validateUser,
  displayError = (msg: string) => console.error(`Error: ${msg}`)
): Promise<boolean> {
  try {
    await validateFn(repo, session);
    const { confirm } = await promptFn();
    if (!confirm) {
      console.log("Exit cancelled.");
      return false;
    }
    displayFn();
    return true;
  } catch (error) {
    displayError(error instanceof Error ? error.message : "Unexpected error");
    return false;
  }
}