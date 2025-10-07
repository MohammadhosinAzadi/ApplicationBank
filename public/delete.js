const form = document.getElementById("delete-form");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userId = Number(document.getElementById("userId").value);
  if (!userId || userId < 1) {
    message.textContent = "Please enter a valid User ID.";
    message.style.color = "red";
    return;
  }

  const ok = confirm(`Are you sure you want to delete the account with ID ${userId}? This action cannot be undone.`);
  if (!ok) return;

  try {
    const res = await fetch(`/accounts/${userId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) throw new Error(data.error || `Failed to delete account (status ${res.status})`);

    message.textContent = data.message || "Account deleted successfully.";
    message.style.color = "green";
  } catch (err) {
    message.textContent = err.message || "An error occurred while deleting the account.";
    message.style.color = "red";
  }
});
