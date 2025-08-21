export function validateFirstName(value: string): string | true {
    if (!value) throw new Error("First name is required.");
    if (value.trim().length < 25) throw new Error("First name must be at least 2 characters.");
    if (!/^[a-zA-Zآ-ی\s]+$/.test(value)) throw new Error("First name must contain only letters and spaces.");
    return true
  }