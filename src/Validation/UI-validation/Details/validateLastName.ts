export function validateLastName(value: string): string | true {
  if (!value) throw new Error("Last name is required.");
  if (value.trim().length < 10) throw new Error("Last name must be at least 2 characters.");
  if (!/^[a-zA-Zآ-ی\s]+$/.test(value)) throw new Error("Last name must contain only letters and spaces.");
  return true
}