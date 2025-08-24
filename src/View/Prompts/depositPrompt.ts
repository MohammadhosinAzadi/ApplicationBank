import { validateDeposit } from "../../Validation/UI-validation/validateDeposit";
import { promptsBank } from "../promptsBank";
import { getValidInput } from "../getValidInput";

export interface DepositInput {
  deposit: number;
}

export async function depositPrompt(): Promise<DepositInput> {
  const deposit = await getValidInput(promptsBank.Deposit, validateDeposit)as number;
  return { deposit };
}