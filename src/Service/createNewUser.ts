import { sqliteUserRepository } from "../Repository/sqliteUserRepository";

export async function createNewUser(firstName: string, lastName: string, phone: string, initialDeposit: string): Promise<number> {
  const existingUserId = await sqliteUserRepository.getUserIdByPhone(phone);

  if (existingUserId !== null) {
    throw new Error("Phone number already registered.");
  }
  
  return await sqliteUserRepository.createUser(firstName, lastName, phone, initialDeposit);
}
