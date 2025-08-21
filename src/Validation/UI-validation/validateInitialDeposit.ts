export function validateInitialDeposit(value: number): string | true {
    if (isNaN(value)) return "Initial deposit must be a valid number.";
    if (value < 5000) return "Initial deposit must be at least 5000.";
    if (value > 100000) return "Initial deposit cannot exceed 100000.";
    return true;
}