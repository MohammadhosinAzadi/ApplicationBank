import { UserRepository } from "../../Repository/interface";
import { SessionManager } from "../../Session/interface";

export async function validateUser(repo: UserRepository, session: SessionManager): Promise<number> {
  const userId = session.getUser();
  if (!userId) {
    throw new Error("Please sign up or login first.");
  }
  const exists = await repo.checkUserExists(userId);
  if (!exists) {
    throw new Error("User not found.");
  }
  return userId;
}