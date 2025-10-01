import { sqliteUserRepository } from "../Repository/sqliteUserRepository";
import { validateWithdraw } from "../Validation/Lojic-Validation/validateWithdraw";

export async function validateWithdrawAmount(userId: number, amount: number): Promise<void> {
  const currentBalance = await sqliteUserRepository.getBalance(userId);
  validateWithdraw(amount, currentBalance);
}
