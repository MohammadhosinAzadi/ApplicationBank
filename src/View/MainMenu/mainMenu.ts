import { getValidInput } from "../../View/getValidInput";
import { promptsBank } from "../../View/promptsBank";
import { Action } from "./actions.enum";
import { sqliteUserRepository } from "../../Repository/sqliteUserRepository";
import { memorySessionManager } from "../../Session/memorySessionManager";
import { signUpController } from "../../Controller/signUpController";
import { loginController } from "../../Controller/loginController";
import { openAccountController } from "../../Controller/openAccountController";
import { depositController } from "../../Controller/depositController";
import { withdrawController } from "../../Controller/withdrawController";
import { balanceInquiryController } from "../../Controller/balanceInquiryController";
import { deleteAccountController } from "../../Controller/deleteAccountController";
import { exitController } from "../../Controller/exitController";

export async function mainMenu(): Promise<void> {
  const repo = sqliteUserRepository;
  const session = memorySessionManager;

  const actionMap: Record<Action, () => Promise<boolean | void>> = {
    [Action.SignUp]: () => signUpController(repo, session),
    [Action.Login]: () => loginController(repo, session), 
    [Action.OpenAccount]: () => openAccountController(repo, session),
    [Action.Deposit]: () => depositController(repo, session),
    [Action.Withdraw]: () => withdrawController(repo, session),
    [Action.BalanceInquiry]: () => balanceInquiryController(repo, session),
    [Action.DeleteAccount]: async () => {
      const deleted = await deleteAccountController(repo, session);
      if (deleted) session.clearUser();
      return true;
    },
    [Action.Exit]: () => exitController(repo, session),
  };

  while (true) {
    try {
      const action = await getValidInput<Action>(promptsBank.mainMenu);
      const handler = actionMap[action];
      if (!handler) {
        console.log("Invalid action selected.");
        continue;
      }
      const result = await handler();
      if (result === false) {
        break;
      }
    } catch (error) {
      console.error("An error occurred:", error instanceof Error ? error.message : "Unexpected error");
    }
  }
}
