const API_ENDPOINT = "/api/ai";

const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const typingIndicator = document.getElementById("typing-indicator");

/* =========================
   ADD MESSAGE
========================= */
function addMessage(role, text) {
  const div = document.createElement("div");
  div.className = role === "user" ? "msg-user" : "msg-ai";
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

/* =========================
   TYPING
========================= */
function showTyping() {
  typingIndicator.style.display = "flex";
}

function hideTyping() {
  typingIndicator.style.display = "none";
}

/* =========================
   SEND MESSAGE
========================= */
async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage("user", message);

  userInput.value = "";
  userInput.style.height = "auto";

  showTyping();

  try {
    const res = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await res.json();

    hideTyping();

    addMessage("ai", data.reply || "No response received.");

  } catch (err) {
    hideTyping();
    addMessage("ai", "Network error. Try again.");
  }
}

/* =========================
   SAFE WRAPPER (optional)
========================= */
function isBlocked(text) {
  const blocked = ["movie","song","game","hack","crack","sports","politics"];
  return blocked.some(k => text.toLowerCase().includes(k));
}

async function safeSend() {
  const message = userInput.value.trim();
  if (!message) return;

  if (isBlocked(message)) {
    addMessage("ai", "SafePK AI sirf cybersecurity topics cover karta hai.");
    userInput.value = "";
    return;
  }

  await sendMessage();
}

/* =========================
   EVENTS (FIXED)
========================= */
sendBtn.addEventListener("click", safeSend);

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    safeSend();
  }
});

/* AUTO FOCUS */
window.addEventListener("load", () => {
  userInput.focus();
});
