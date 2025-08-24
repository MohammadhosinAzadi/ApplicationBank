export function validateLastName(value: string): string | true {
  if (!value) return "Last name is required.";
  if (value.trim().length < 2) {
    return "Last name must be at least 2 characters.";
  }
  if (value.trim().length > 30) {
    return "Last name must not exceed 30 characters.";
  }
  if (!/^[a-zA-Zآ-ی\s]+$/.test(value)) {
    return "Last name must contain only letters and spaces.";
  }
  return true;
}