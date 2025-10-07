const form = document.getElementById("balance-form");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userId = Number(document.getElementById("userId").value);

  try {
    const res = await fetch(`/accounts/${userId}/balance`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.error || "Failed to get balance");

    message.textContent = `Current Balance: ${data.balance}`;
    message.style.color = "green";
  } catch (err) {
    message.textContent = err.message;
    message.style.color = "red";
  }
});
