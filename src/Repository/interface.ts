import { hashedPassword } from "../Security/hashPassword";

export interface UserRepository {
    createUser(firstName: string, lastName: string, phone: string, password: string, initialDeposit: string): Promise<number>;
    getUserIdByPhone(phone: string): Promise<number | null>;
    getUserByPhone(phone: string): Promise<{ id: number; firstName: string; lastName: string; phone: string; password: string, balance: number } | null>;
    setBalance(userId: number, amount: number): Promise<void>;
    getBalance(userId: number): Promise<number>;
    checkUserExists(userId: number): Promise<boolean>;
    deleteUser(userId: number): Promise<void>;
}