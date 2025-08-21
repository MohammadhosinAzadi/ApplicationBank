import { promptsBank } from "../promptsBank";
import { getValidInput } from "../getValidInput";
import { validateInitialDeposit } from '../../Validation/UI-validation/validateInitialDeposit';

export interface OpenAccountInput {
    initialDeposit: number;
}

export async function openAccountPrompt(): Promise<OpenAccountInput> {
    const initialDeposit = await getValidInput(promptsBank.openAccount, validateInitialDeposit)as number;
    return { initialDeposit };
}