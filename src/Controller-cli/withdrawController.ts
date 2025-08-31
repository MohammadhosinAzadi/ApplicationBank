import { UserRepository } from "../Repository/interface";
import { SessionManager } from "../Session/interface";
import { withdraw } from "../Model/withdraw";
import { withdrawPrompt } from "../View/Prompts/withdrawPrompt";

export async function withdrawController(repo: UserRepository,session: SessionManager): Promise<void> {
  try {
    const userId = session.getUser();
    if (!userId) throw new Error("No user is logged in.");
    const { withdraw: withdrawAmount } = await withdrawPrompt();
    await withdraw(userId, withdrawAmount, repo);
    console.log(`Withdrawn ${withdrawAmount} successfully.`);
  } catch (error) {
    console.error(error instanceof Error ? error.message : "Unexpected error");
  }
}
