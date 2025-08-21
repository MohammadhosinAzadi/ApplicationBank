import { UserRepository } from "../Repository/interface";
import { validateWithdraw } from "../Validation/Lojic-Validation/validateWithdraw";
import { validateUserAndAccount } from "../Validation/Lojic-Validation/validateUserAndAccount";

export async function withdraw(userId: number,amount: number,repo: UserRepository): Promise<number> {
  await validateUserAndAccount(userId, repo, true);
  await validateWithdraw(userId, amount, repo);
  await repo.setBalance(userId, -amount);
  return repo.getBalance(userId);
}