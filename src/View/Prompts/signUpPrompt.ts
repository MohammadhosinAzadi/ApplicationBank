import { promptsBank } from "../promptsBank";
import { getValidInput } from "../../View/getValidInput";
import { validatePhone } from '../../Validation/UI-validation/Details/validatePhone';
import { validateFirstName } from "../../Validation/UI-validation/Details/validateFirstName";
import { validateLastName } from "../../Validation/UI-validation/Details/validateLastName";

export interface SignUpInput {
    phone: string;
    firstName: string;
    lastName: string;
}

export async function signUpPrompt(): Promise<SignUpInput> {
    const phone = await getValidInput([promptsBank.getDetails[0]], validatePhone)as string;
    const firstName = await getValidInput([promptsBank.getDetails[1]], validateFirstName)as string; 
    const lastName = await getValidInput([promptsBank.getDetails[2]], validateLastName)as string;
    console.log(`Sign up successful! Welcome, ${firstName} ${lastName}.`);

    return { phone, firstName, lastName };
}
