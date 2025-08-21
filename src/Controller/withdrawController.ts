import { UserRepository } from "../Repository/interface";
import { SessionManager } from "../Session/interface";
import { withdraw } from "../Model/withdraw";
import { withdrawPrompt } from "../View/Prompts/withdrawPrompt";

export async function withdrawController(
  repo: UserRepository,
  session: SessionManager,
  promptFn = withdrawPrompt,
  withdrawFn = withdraw,
  displaySuccess = (amount: number) => console.log(`Withdrawn ${amount} successfully.`),
  displayError = (msg: string) => console.error(`Withdrawal failed: ${msg}`)
): Promise<void> {
  try {
    const userId = session.getUser();
    if (!userId) throw new Error("No user is logged in.");
    const { withdraw } = await promptFn();
    await withdrawFn(userId, withdraw, repo);
    displaySuccess(withdraw);
  } catch (error) {
    displayError(error instanceof Error ? error.message : "Unexpected error");
  }
}