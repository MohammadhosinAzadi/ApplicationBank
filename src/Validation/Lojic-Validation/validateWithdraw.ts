export async function validateWithdraw(amount: number,currentBalance: number): Promise<void> {
  if (amount <= 0) {
    throw new Error("Please enter a withdrawal amount greater than $0.");
  }
  if (amount > 100000) {
    throw new Error("Withdrawal amount cannot exceed $100,000.");
  }
  if (currentBalance < amount) {
    throw new Error("Your account balance is insufficient for this withdrawal.");
  }
}