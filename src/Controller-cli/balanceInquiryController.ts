import { UserRepository } from "../Repository/interface";
import { SessionManager } from "../Session/interface";
import { validateUser } from "../Validation/Lojic-Validation/validateUser";
import { balanceInquiryView } from "../View/Prompts/balanceInquiryView";
import { balanceInquiry } from "../Model/balanceInquiry";

export async function balanceInquiryController(repo: UserRepository,session: SessionManager): Promise<void> {
  try {
    const userId = await validateUser(repo, session);
    const balance = await balanceInquiry(userId, repo);
    balanceInquiryView(balance);
  } catch (error) {
    console.error(error instanceof Error ? error.message : "Unexpected error");
  }
}
