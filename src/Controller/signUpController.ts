import { UserRepository } from "../Repository/interface";
import { SessionManager } from "../Session/interface";
import { signUp } from "../Model/singnUp"; // ✅ اصلاح مسیر
import { signUpPrompt } from "../View/Prompts/signUpPrompt";

export async function signUpController(
  repo: UserRepository,
  session: SessionManager,
  promptFn = signUpPrompt,
  signUpFn = signUp,
  displaySuccess = (id: number) => console.log(`User registered successfully with ID: ${id}`),
  displayError = (msg: string) => console.error(`Registration failed: ${msg}`)
): Promise<boolean> {
  try {
    const { phone, firstName, lastName } = await promptFn();
    const userId = await signUpFn(firstName, lastName, phone, repo);
    session.setUser(userId);
    displaySuccess(userId);
    return true; 
  } catch (error) {
    displayError(error instanceof Error ? error.message : "Unexpected error");
    return true; 
  }
}
