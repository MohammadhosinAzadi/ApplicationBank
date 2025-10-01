import { sqliteUserRepository } from "../Repository/sqliteUserRepository";
import { validateDeposit } from "../Validation/Lojic-Validation/validateDeposit";

export async function validateDepositAmount(userId: number, amount: number): Promise<void> {
  const currentBalance = await sqliteUserRepository.getBalance(userId);
  validateDeposit(amount, currentBalance);
}
