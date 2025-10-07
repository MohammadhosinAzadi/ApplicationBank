const form = document.getElementById("withdraw-form");
const message = document.getElementById("message");

form.addEventListener("submit", async(e) => {
    e.preventDefault();

    const userId = Number(document.getElementById("userId").value)
    const amount = Number(document.getElementById("amount").value)

    try {
        const res = await fetch (`/transactions/${userId}/withdraw`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount })
        ,});

        const data = await res.json()

        if (!res.ok) throw new Error(data.error || "Withdraw failed");

        message.textContent = `${data.message} (New Balance: ${data.newBalance})`;
        message.style.color = "green";


    } catch (err) {
        message.textContent = err.message;
        message.style.color = "red";
    }
})