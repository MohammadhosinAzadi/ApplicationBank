import { promptsBank } from "../../View/promptsBank";
import { getValidInput } from "../../View/getValidInput";
import { validatePhone } from "../../Validation/UI-validation/Details/validatePhone";

export interface LoginInput {
  phone: string;
}

export async function loginPrompt(): Promise<LoginInput> {
  const phone = await getValidInput(promptsBank.login, validatePhone) as string;
  return { phone };
}