import { loginPrompt } from "../View/Prompts/loginPrompt";
import { login } from "../Model/login";
import { UserRepository } from "../Repository/interface";
import { SessionManager } from "../Session/interface";

export async function loginController(repo: UserRepository,session: SessionManager): Promise<boolean> {
  try {
    const { phone } = await loginPrompt();
    const userId = await login(phone, repo);
    session.setUser(userId);
    console.log(`Login successful! Welcome back, user ID: ${userId}.`);
    return true;
  } catch (error) {
    console.error(error instanceof Error ? error.message : "Unexpected error");
    return true;
  }
}
