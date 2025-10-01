import { sqliteUserRepository } from "../Repository/sqliteUserRepository";
import { validateOpenAccount } from "../Validation/Lojic-Validation/validateOpenAccount";

export async function validateExecuteAccount(userId: number, initialDeposit: number): Promise<void> {
    const balance = await sqliteUserRepository.getBalance(userId);
    validateOpenAccount(balance, initialDeposit);
}