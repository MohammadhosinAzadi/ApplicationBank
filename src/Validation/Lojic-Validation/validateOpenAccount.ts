import { UserRepository } from "../../Repository/interface";

export async function validateOpenAccount(userId: number, initialDeposit: number, repo: UserRepository): Promise<void> {
  if (initialDeposit < 5000 || initialDeposit > 100000) {
    throw new Error("Initial deposit must be between 5000 and 100000.");
  }
  const balance = await repo.getBalance(userId);
  if (balance !== 0) {
    throw new Error("You already has an account.");
  }
}