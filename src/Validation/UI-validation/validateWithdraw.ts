export function validateWithdraw(value: number): string | true {
    if (isNaN(value)) {
      return "Please enter a valid number for the withdrawal amount.";
    }
    if (value <= 0) {
      return "Please enter a withdrawal amount greater than $0.";
    }
    if (value > 100000) {
      return "Withdrawal amount cannot exceed $100,000.";
    }
    return true;
  }
