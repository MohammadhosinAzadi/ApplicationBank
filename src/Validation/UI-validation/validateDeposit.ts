export function validateDeposit(value: number | undefined) {
    if (value === undefined || value === null || isNaN(value)){
        return "Please enter a valid number.";
    } 
    if (value > 0 && value <= 100000) return true;
    return "The deposit amount must not exceed $100,000.";
}