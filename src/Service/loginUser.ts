import { sqliteUserRepository } from "../Repository/sqliteUserRepository";
import { comparePassword } from "../Security/hashPassword";
import jwt from "jsonwebtoken";

const JWT_SECRET = "YOUR_SECRET_KEY";

export async function loginUser(phone: string, password: string) {
    const user = await sqliteUserRepository.getUserByPhone(phone);
    if (!user) {
        throw new Error("User not found");
    }
    const passwordValid = await comparePassword(password, user.password);
    if (!passwordValid) {
        throw new Error("Invalid password");
    }
    const token = jwt.sign(
        { id: user.id, phone: user.phone }, 
        JWT_SECRET, 
        { expiresIn: "1h" }
    );
    return {id: user.id, firstName: user.firstName, lastName: user.lastName, balance: user.balance, token,};
}
