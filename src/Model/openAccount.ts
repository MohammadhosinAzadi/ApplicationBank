import { UserRepository } from "../Repository/interface";
import { validateOpenAccount } from "../Validation/Lojic-Validation/validateOpenAccount";
import { validateUserAndAccount } from "../Validation/Lojic-Validation/validateUserAndAccount";

export async function openAccount(userId: number,initialDeposit: number,repo: UserRepository): Promise<number> {
  await validateUserAndAccount(userId, repo, false);
  await validateOpenAccount(userId, initialDeposit, repo);
  await repo.setBalance(userId, initialDeposit);
  return userId;
}