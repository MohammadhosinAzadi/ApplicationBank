import { UserRepository } from "../Repository/interface";
import { validateUniquePhone } from "../Validation/Lojic-Validation/validateUniquePhone";

export async function signUp(firstName: string,lastName: string,phone: string,repo: UserRepository): Promise<number> {
  await validateUniquePhone(phone, repo);
  return repo.createUser(firstName, lastName, phone);
}