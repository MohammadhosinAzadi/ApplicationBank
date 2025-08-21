import { promptsBank } from "../promptsBank";
import { getValidInput } from "../getValidInput";

export interface ExitInput {
  confirm: boolean;
}

export async function exitPrompt(): Promise<ExitInput> {
  const answers = await getValidInput<{ confirm: boolean }>(promptsBank.exit);
  return { confirm: answers.confirm };
}