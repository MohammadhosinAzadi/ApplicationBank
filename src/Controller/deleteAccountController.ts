import { deleteAccount } from "../Model/deleteAccount";
import { deleteAccountPrompt } from "../View/Prompts/deleteAccountPrompt";
import { deleteAccountView } from "../View/Prompts/deleteAccountView";
import { UserRepository } from "../Repository/interface";
import { SessionManager } from "../Session/interface";
import { validateUser } from "../Validation/Lojic-Validation/validateUser";

export async function deleteAccountController(
  repo: UserRepository,
  session: SessionManager,
  promptFn = deleteAccountPrompt,
  deleteFn = deleteAccount,
  displayFn = deleteAccountView,
  displayError = (msg: string) => console.error(`Error: ${msg}`)
): Promise<boolean> {
  try {
    const userId = await validateUser(repo, session);
    const { confirm } = await promptFn();
    if (!confirm) {
      console.log("Account deletion cancelled.");
      return false;
    }
    await deleteFn(userId, repo);
    displayFn();
    return true;
  } catch (error) {
    displayError(error instanceof Error ? error.message : "Unexpected error");
    return false;
  }
}