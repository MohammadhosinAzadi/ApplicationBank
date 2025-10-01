import { sqliteUserRepository } from "../Repository/sqliteUserRepository";

export async function openAccount(userId: number, initialDeposit: number): Promise<number> {
  await sqliteUserRepository.setBalance(userId, initialDeposit);
  return await sqliteUserRepository.getBalance(userId);
}
