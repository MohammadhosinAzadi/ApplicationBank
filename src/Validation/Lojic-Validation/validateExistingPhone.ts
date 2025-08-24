import { UserRepository } from "../../Repository/interface";

export async function validateExistingPhone(phone: string, repo: UserRepository): Promise<number> {
  const userId = await repo.getUserIdByPhone(phone);
  if (!userId) {
    throw new Error("No user found with this phone number. Please sign up first.");
  }
  return userId;
}
