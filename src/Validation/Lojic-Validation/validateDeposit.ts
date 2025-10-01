export async function validateDeposit(amount: number,currentBalance: number): Promise<void> {
  if (amount <= 0) {
    throw new Error("Please enter a deposit amount greater than $0.");
  }
  if (amount > 100000) {
    throw new Error("Deposit amount cannot exceed $100,000.");
  }
  if (currentBalance + amount > 1000000) {
    throw new Error("Your account balance cannot exceed $1,000,000 after this deposit.");
  }
}