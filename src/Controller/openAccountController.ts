import { openAccountPrompt, OpenAccountInput } from "../View/Prompts/openAccountPrompt";
import { openAccount } from "../Model/openAccount";
import { UserRepository } from "../Repository/interface";
import { SessionManager } from "../Session/interface";

export async function openAccountController(
  repo: UserRepository,
  session: SessionManager,
  promptFn: () => Promise<OpenAccountInput> = openAccountPrompt,
  openAccountFn = openAccount,
  displaySuccess = (userId: number) => console.log(`Account opened successfully! User ID: ${userId}`),
  displayError = (msg: string) => console.error(`Error opening account: ${msg}`)
): Promise<void> {
  try {
    const userId = session.getUser();
    if (!userId) {
      throw new Error("No user is logged in. Please sign up first.");
    }
    const { initialDeposit } = await promptFn();
    const accountId = await openAccountFn(userId, initialDeposit, repo);
    displaySuccess(accountId);
  } catch (error) {
    displayError(error instanceof Error ? error.message : "Unexpected error");
  }
}