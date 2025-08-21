import { UserRepository } from "../Repository/interface";
import { validateDeposit } from "../Validation/Lojic-Validation/validateDeposit";
import { validateUserAndAccount } from "../Validation/Lojic-Validation/validateUserAndAccount";

export async function deposit(userId: number, amount: number, repo: UserRepository): Promise<number> {
  await validateUserAndAccount(userId, repo, true);
  await validateDeposit(userId, amount, repo);
  await repo.setBalance(userId, amount);
  return repo.getBalance(userId);
}