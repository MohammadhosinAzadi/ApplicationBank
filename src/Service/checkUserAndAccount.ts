import { sqliteUserRepository } from "../Repository/sqliteUserRepository";
import { validateUserAndAccount } from "../Validation/Lojic-Validation/validateUserAndAccount";

export async function checkUserAndAccount(userId: number): Promise<void> {
  const userExists = await sqliteUserRepository.checkUserExists(userId);
  const balance = await sqliteUserRepository.getBalance(userId);

  validateUserAndAccount(userExists, balance);
}
