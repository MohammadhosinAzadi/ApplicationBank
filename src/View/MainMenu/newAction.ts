import { signUpController } from "../../Controller-cli/signUpController";
import { loginController } from "../../Controller-cli/loginController";
import { openAccountController } from "../../Controller-cli/openAccountController";
import { depositController } from "../../Controller-cli/depositController";
import { withdrawController } from "../../Controller-cli/withdrawController";
import { balanceInquiryController } from "../../Controller-cli/balanceInquiryController";
import { deleteAccountController } from "../../Controller-cli/deleteAccountController";
import { exitController } from "../../Controller-cli/exitController";
import { sqliteUserRepository } from "../../Repository/sqliteUserRepository";
import { memorySessionManager } from "../../Session/memorySessionManager";

export const newAction = {
  signUp: {
    message: "signUp",
    handle: signUpController
  },

  Login: {
    message: "Login",
    handle: loginController
  },

  OpenAccount: {
    message: "Open Account",
    handle: openAccountController
  },

  Deposit: {
    message: "Deposit",
    handle: depositController
  },

  Withdraw: {
    message: "Withdraw",
    handle: withdrawController
  },

  BalanceInquiry: {
    message: "Balance Inquiry",
    handle: balanceInquiryController
  },

  DeleteAccount: {
    message: "Delete Account",
    handle: async (repo: typeof sqliteUserRepository, session: typeof memorySessionManager) => {
      const deleted = await deleteAccountController(repo, session);
      if (deleted) session.clearUser();
      return true;
    },
  },

  Exit: {
    message: "Exit",
    handle: exitController
  },
};