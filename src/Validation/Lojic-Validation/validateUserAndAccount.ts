import { UserRepository } from "../../Repository/interface";

export async function validateUserAndAccount(userId: number, repo: UserRepository, requireAccount: boolean = false): Promise<void> {
    const userExists = await repo.checkUserExists(userId);
    if (!userExists) {
        throw new Error("User not found. Please sign up first.");
    }
    if (requireAccount) {
        const balance = await repo.getBalance(userId);
    if (balance === 0) {
        throw new Error("You don't have an active account. Please open an account first.");
    }
  }
}