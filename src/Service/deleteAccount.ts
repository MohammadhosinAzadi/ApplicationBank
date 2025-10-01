import { sqliteUserRepository } from "../Repository/sqliteUserRepository";

export async function deleteAccount(userId: number): Promise<void> {
  await sqliteUserRepository.deleteUser(userId);
}