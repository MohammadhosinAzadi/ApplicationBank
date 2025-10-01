export async function validateOpenAccount(balance: number, initialDeposit: number): Promise<void> {
  if (initialDeposit < 5000 || initialDeposit > 100000) {
    throw new Error("Initial deposit must be between 5000 and 100000.");
  }
  if (balance !== 0) {
    throw new Error("You already has an account.");
  }
}