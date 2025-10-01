const form = document.getElementById("signup-form");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phone = document.getElementById("phone").value;
  const initialDeposit = document.getElementById("initialDeposit").value;

  try {
    const res = await fetch("/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, phone, initialDeposit }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.error || "Sign up failed");

    message.textContent = `${data.message} (User ID: ${data.userId}, Balance: ${data.balance})`;
    message.style.color = "green";
  } catch (err) {
    message.textContent = err.message;
    message.style.color = "red";
  }
});


