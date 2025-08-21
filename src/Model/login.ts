import { UserRepository } from "../Repository/interface";
import { validateExistingPhone } from "../Validation/Lojic-Validation/validateExistingPhone";

export async function login(phone: string, repo: UserRepository): Promise<number> {
  return validateExistingPhone(phone, repo);
}