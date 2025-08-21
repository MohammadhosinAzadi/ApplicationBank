import { UserRepository } from "../Repository/interface";
import { SessionManager } from "../Session/interface";
import { validateUser } from "../Validation/Lojic-Validation/validateUser";
import { balanceInquiryView } from "../View/Prompts/balanceInquiryView";
import { balanceInquiry } from "../Model/balanceInquiry";

export async function balanceInquiryController(
  repo: UserRepository,
  session: SessionManager,
  validateFn = validateUser,
  displayFn = balanceInquiryView,
  displayError = (msg: string) => console.error(`Error: ${msg}`)
): Promise<void> {
  try {
    const userId = await validateFn(repo, session);
    const balance = await balanceInquiry(userId, repo);
    displayFn(balance);
  } catch (error) {
    displayError(error instanceof Error ? error.message : "Unexpected error");
  }
}
