export interface UserRepository {
    createUser(firstName: string, lastName: string, phone: string): Promise<number>;
    getUserIdByPhone(phone: string): Promise<number | null>;
    setBalance(userId: number, amount: number): Promise<void>;
    getBalance(userId: number): Promise<number>;
    checkUserExists(userId: number): Promise<boolean>;
    deleteUser(userId: number): Promise<void>;
}