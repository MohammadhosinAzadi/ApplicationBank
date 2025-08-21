import { getValidInput } from "../../View/getValidInput";
import { promptsBank } from "../../View/promptsBank";
import { app } from "../../app";

interface AnotherRequestInput {
  continue: boolean;
}

export async function anotherRequest(): Promise<void> {
  try {
    const { continue: shouldContinue } = await getValidInput<AnotherRequestInput>(promptsBank.anotherRequest);
    if (shouldContinue) {
      await app();
    }
  } catch (error) {
    console.error("An error occurred:", error instanceof Error ? error.message : "Unexpected error");
  }
}