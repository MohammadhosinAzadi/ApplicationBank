const form = document.getElementById("deposit-form");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const phone = document.getElementById("phone").value;
  const amount = document.getElementById("amount").value;

  try {
    const res = await fetch("/users/deposit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, amount }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.error || "Deposit failed");

    message.textContent = `${data.message} (New Balance: ${data.newBalance})`;
    message.style.color = "green";
  } catch (err) {
    message.textContent = err.message;
    message.style.color = "red";
  }
});
