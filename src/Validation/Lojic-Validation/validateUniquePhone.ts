import { UserRepository } from "../../Repository/interface";

export async function validateUniquePhone(phone: string, repo: UserRepository): Promise<void> {
  const existingId = await repo.getUserIdByPhone(phone);
  if (existingId) throw new Error("Phone already registered.");
}
