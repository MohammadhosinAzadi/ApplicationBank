import { UserRepository } from "../Repository/interface";
import { SessionManager } from "../Session/interface";
import { deposit } from "../Model/deposit";
import { depositPrompt } from "../View/Prompts/depositPrompt";

export async function depositController(repo: UserRepository,session: SessionManager): Promise<void> {
  try {
    const userId = session.getUser();
    if (!userId) throw new Error("No user is logged in.");
    const { deposit: depositAmount } = await depositPrompt();
    await deposit(userId, depositAmount, repo);
    console.log(`Deposited ${depositAmount} successfully.`);
  } catch (error) {
    console.error(error instanceof Error ? error.message : "Unexpected error");
  }
}
