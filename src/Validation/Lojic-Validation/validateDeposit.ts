import { UserRepository } from "../../Repository/interface";

export async function validateDeposit(userId: number, amount: number, repo: UserRepository): Promise<void> {
  if (amount <= 0) {
    throw new Error("Please enter a deposit amount greater than $0.");
  }
  if (amount > 100000) {
    throw new Error("Deposit amount cannot exceed $100,000.");
  }
  const balance = await repo.getBalance(userId);
  if (balance + amount > 1000000) {
    throw new Error("Your account balance cannot exceed $1,000,000 after this deposit.");
  }
}