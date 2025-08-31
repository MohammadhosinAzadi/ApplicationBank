import { UserRepository } from "../Repository/interface";
import { SessionManager } from "../Session/interface";
import { signUp } from "../Model/singnUp";
import { signUpPrompt } from "../View/Prompts/signUpPrompt";

export async function signUpController(repo: UserRepository,session: SessionManager): Promise<boolean> {
  try {
    const { phone, firstName, lastName } = await signUpPrompt();
    const userId = await signUp(firstName, lastName, phone, repo);
    session.setUser(userId);
    console.log(`User registered successfully with ID: ${userId}`);
    return true;
  } catch (error) {
    console.error(error instanceof Error ? error.message : "Unexpected error");
    return true;
  }
}
