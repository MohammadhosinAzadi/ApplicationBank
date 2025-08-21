import { DistinctQuestion } from "inquirer";
import { Action } from "../View/MainMenu/actions.enum";

export const promptsBank: Record<string, DistinctQuestion[]> = {
    mainMenu: [
        {
          type: "list" as const,
          name: "action",
          message: "Welcome, please select an option:",
          choices: Object.values(Action) as string[],
        },
      ],

    getDetails: [
        {type: "input",name: "phone",message: "Enter your phone number:"},
        {type: "input",name: "firstName",message: "Enter your first name:"},
        {type: "input",name: "lastName",message: "Enter your last name:"}
    ],

    login: [
        {type: "input",name: "phone",message: "Please enter your phone number to log in to your account."}
    ],

    openAccount: [
        {type: "number",name: "initialDeposit",message: "A minimum deposit is required to open an account (minimum $5000):",},
    ],

    Deposit: [
        {type: "number",name: "deposit",message: "Please enter the amount you wish to deposit (maximum $100000)"}
    ],

    Withdraw: [
        {type: "number", name: "withdraw",message: "Please enter the amount you wish to withdraw."}
    ],

    balanceAction: [
        {
            type: "list",
            name: "balanceOption",
            message: "Do you want to apply interest to your current balance or deposit more money?",
            choices: [
                "Apply interest to my current balance",
                "Deposit money to increase my balance"
            ]
        }
    ],

    deleteAccount: [
        {
            type: "confirm",
            name: "confirm",
            message: "Are you sure you want to delete your account?",
            default: false,
        },
      ],
    
    exit: [
        {
            type: "confirm",
            name: "confirm",
            message: "Are you sure you want to exit?",
            default: false,
        },
      ],

    anotherRequest: [
        {
            type: "confirm",
            name: "continue",
            message: "Would you like to perform another action?",
            default: true,
        }
    ],
}