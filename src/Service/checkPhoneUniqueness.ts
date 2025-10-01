import { sqliteUserRepository } from "../Repository/sqliteUserRepository";
import { validateUniquePhone } from "../Validation/Lojic-Validation/validateUniquePhone";

export async function checkPhoneUniqueness(phone: string): Promise<void> {
  const existingUserId = await sqliteUserRepository.getUserIdByPhone(phone);
  validateUniquePhone(existingUserId);
}
