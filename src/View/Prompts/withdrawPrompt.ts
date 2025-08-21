import { promptsBank } from "../../View/promptsBank";
import { getValidInput } from "../../View/getValidInput";
import { validateWithdraw } from "../../Validation/UI-validation/validateWithdraw";

export interface WithdrawInput {
  withdraw: number;
}

export async function withdrawPrompt(): Promise<WithdrawInput> {
  const withdraw = await getValidInput(promptsBank.Withdraw, validateWithdraw)as number;
  return { withdraw };
}