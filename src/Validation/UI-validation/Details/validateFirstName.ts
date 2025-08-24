export function validateFirstName(value: string): string | true {
  if (!value) return "First name is required.";
  if (value.trim().length < 2) {
    return "First name must be at least 2 characters.";
  }
  if (value.trim().length > 30) {
    return "First name must not exceed 30 characters.";
  }
  if (!/^[a-zA-Zآ-ی\s]+$/.test(value)) {
    return "First name must contain only letters and spaces.";
  }
  return true;
}
