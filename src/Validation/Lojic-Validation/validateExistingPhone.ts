export async function validateExistingPhone(phone: number | null): Promise<number> {
  if (!phone) {
    throw new Error("No user found with this phone number. Please sign up first.");
  }
  return phone;
}
