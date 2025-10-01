import { sqliteUserRepository } from "../Repository/sqliteUserRepository";

export async function getBalance(userId: number): Promise<number> {
  return await sqliteUserRepository.getBalance(userId);
}
