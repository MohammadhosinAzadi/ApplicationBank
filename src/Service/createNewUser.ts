import { sqliteUserRepository } from "../Repository/sqliteUserRepository";

export async function createNewUser(firstName: string, lastName: string, phone: string, initialDeposit: string): Promise<number> {
  return await sqliteUserRepository.createUser(firstName, lastName, phone, initialDeposit);
}
