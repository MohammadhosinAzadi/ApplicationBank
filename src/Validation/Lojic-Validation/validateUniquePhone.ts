export async function validateUniquePhone(phone: number | null): Promise<void> {
  if (phone !== null) {
    console.error("Phone number already registered.");
  }
}
 