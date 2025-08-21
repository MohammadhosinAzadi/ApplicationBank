import { UserRepository } from "../Repository/interface";

export async function balanceInquiry(userId: number, repo: UserRepository): Promise<number> {
    const balance = await repo.getBalance(userId);
    return balance;
}
