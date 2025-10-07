import { sqliteUserRepository } from "../Repository/sqliteUserRepository";
import { validateWithdraw } from "../Validation/Lojic-Validation/validateWithdraw";
import { validateUserAndAccount } from "../Validation/Lojic-Validation/validateUserAndAccount";

export async function executeWithdraw(userId: number, amount: number): Promise<number> {
  const userExists = await sqliteUserRepository.checkUserExists(userId);
  const currentBalance = await sqliteUserRepository.getBalance(userId);

  validateUserAndAccount(userExists, currentBalance);
  validateWithdraw(amount, currentBalance);

  await sqliteUserRepository.setBalance(userId, -amount);
  
  return await sqliteUserRepository.getBalance(userId);
}
