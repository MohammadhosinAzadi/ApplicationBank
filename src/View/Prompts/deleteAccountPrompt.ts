import { promptsBank } from "../promptsBank";
import { getValidInput } from "../getValidInput";

export interface DeleteAccountInput {
    confirm: boolean;
}

export async function deleteAccountPrompt(): Promise<DeleteAccountInput> {
    const answers = await getValidInput<{ confirm: boolean }>(promptsBank.deleteAccount);
    return { confirm: answers.confirm };
}