export async function validateUserAndAccount(userExists: boolean, balance?: number): Promise<void> {
    if (!userExists) { 
        throw new Error("User not found. Please sign up first.");
    }
    if (balance !== undefined && balance === 0) {
        throw new Error("You don't have an active account. Please open an account first.");
    }
}
