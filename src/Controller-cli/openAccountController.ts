import { openAccountPrompt } from "../View/Prompts/openAccountPrompt";
import { openAccount } from "../Model/openAccount";
import { UserRepository } from "../Repository/interface";
import { SessionManager } from "../Session/interface";

export async function openAccountController(repo: UserRepository,session: SessionManager): Promise<void> {
  try {
    const userId = session.getUser();
    if (!userId) throw new Error("No user is logged in. Please sign up first.");
    const { initialDeposit } = await openAccountPrompt();
    const accountId = await openAccount(userId, initialDeposit, repo);
    console.log(`Account opened successfully! User ID: ${accountId}`);
  } catch (error) {
    console.error(error instanceof Error ? error.message : "Unexpected error");
  }
}
