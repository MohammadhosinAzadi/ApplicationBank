import { sqliteUserRepository } from "../Repository/sqliteUserRepository";

export async function executeWithdraw(userId: number, amount: number): Promise<number> {
  await sqliteUserRepository.setBalance(userId, -amount);
  return await sqliteUserRepository.getBalance(userId);
}
