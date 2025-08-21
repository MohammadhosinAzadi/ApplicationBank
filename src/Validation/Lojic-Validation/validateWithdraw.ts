import { UserRepository } from "../../Repository/interface";

export async function validateWithdraw(userId: number, amount: number, repo: UserRepository): Promise<void> {
  if (amount <= 0) {
    throw new Error("Please enter a withdrawal amount greater than $0.");
  }
  if (amount > 100000) {
    throw new Error("Withdrawal amount cannot exceed $100,000.");
  }
  const balance = await repo.getBalance(userId);
  if (balance < amount) {
    throw new Error("Your account balance is insufficient for this withdrawal.");
  }
}