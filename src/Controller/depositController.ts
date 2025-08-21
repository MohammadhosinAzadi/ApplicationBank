import { UserRepository } from "../Repository/interface";
import { SessionManager } from "../Session/interface";
import { deposit } from "../Model/deposit";
import { depositPrompt } from "../View/Prompts/depositPrompt";

export async function depositController(
  repo: UserRepository,
  session: SessionManager,
  promptFn = depositPrompt,
  depositFn = deposit,
  displaySuccess = (amount: number) => console.log(`Deposited ${amount} successfully.`),
  displayError = (msg: string) => console.error(`Deposit failed: ${msg}`)
): Promise<void> {
  try {
    const userId = session.getUser();
    if (!userId) throw new Error("No user is logged in.");
    const { deposit } = await promptFn();
    await depositFn(userId, deposit, repo);
    displaySuccess(deposit);
  } catch (error) {
    displayError(error instanceof Error ? error.message : "Unexpected error");
  }
}