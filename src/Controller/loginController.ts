import { loginPrompt, LoginInput } from "../View/Prompts/loginPrompt";
import { login } from "../Model/login";
import { UserRepository } from "../Repository/interface";
import { SessionManager } from "../Session/interface";

export async function loginController(
  repo: UserRepository,
  session: SessionManager,
  promptFn: () => Promise<LoginInput> = loginPrompt,
  loginFn = login,
  displaySuccess = (userId: number) => console.log(`Login successful! Welcome back, user ID: ${userId}.`),
  displayError = (msg: string) => console.error(`Login failed: ${msg}`)
): Promise<boolean> {
  try {
    const { phone } = await promptFn();
    const userId = await loginFn(phone, repo);
    session.setUser(userId);
    displaySuccess(userId);
    return true; 
  } catch (error) {
    displayError(error instanceof Error ? error.message : "Unexpected error");
    return true;
  }
}
