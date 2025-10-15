import { sqliteUserRepository } from "../Repository/sqliteUserRepository";
import { validateDeposit } from "../Validation/Lojic-Validation/validateDeposit";

export async function executeDeposit(userId: number, amount: number): Promise<number> {
  const userExists = await sqliteUserRepository.checkUserExists(userId);
  const currentBalance = await sqliteUserRepository.getBalance(userId);
  if (!userExists) throw new Error("User not found");
  validateDeposit(amount, currentBalance);
  await sqliteUserRepository.setBalance(userId, amount);
  return await sqliteUserRepository.getBalance(userId);
}