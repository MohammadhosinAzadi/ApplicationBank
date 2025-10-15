import { sqliteUserRepository } from "../Repository/sqliteUserRepository";
import { hashedPassword } from "../Security/hashPassword";

export async function createNewUser(firstName: string, lastName: string, phone: string, password: string, initialDeposit: string): Promise<number> {
  const existingUserId = await sqliteUserRepository.getUserIdByPhone(phone);
  if (existingUserId !== null) {
    throw new Error("Phone number already registered.");
  }
  const hashPassword = await hashedPassword(password);
  return await sqliteUserRepository.createUser(firstName, lastName, phone, hashPassword, initialDeposit);
}
