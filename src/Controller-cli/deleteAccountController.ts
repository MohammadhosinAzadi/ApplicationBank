import { deleteAccount } from "../Model/deleteAccount";
import { deleteAccountPrompt } from "../View/Prompts/deleteAccountPrompt";
import { deleteAccountView } from "../View/Prompts/deleteAccountView";
import { UserRepository } from "../Repository/interface";
import { SessionManager } from "../Session/interface";
import { validateUser } from "../Validation/Lojic-Validation/validateUser";

export async function deleteAccountController(repo: UserRepository,session: SessionManager): Promise<boolean> {
  try {
    const userId = await validateUser(repo, session);
    const { confirm } = await deleteAccountPrompt();
    if (!confirm) {
      console.log("Account deletion cancelled.");
      return false;
    }
    await deleteAccount(userId, repo);
    deleteAccountView();
    return true;
  } catch (error) {
    console.error(error instanceof Error ? error.message : "Unexpected error");
    return false;
  }
}
