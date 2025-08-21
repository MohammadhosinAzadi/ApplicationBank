import { UserRepository } from "../Repository/interface";

export async function deleteAccount(userId: number, repo: UserRepository): Promise<void> {
  await repo.deleteUser(userId);
}
