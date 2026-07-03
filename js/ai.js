const API_ENDPOINT = "/api/ai";

const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const typingIndicator = document.getElementById("typing-indicator");

/* =========================
   ADD MESSAGE TO UI
========================= */
function addMessage(role, text) {
  const msg = document.createElement("div");
  msg.className = role === "user" ? "msg-user" : "msg-ai";
  msg.textContent = text;

  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

/* =========================
   TYPING INDICATOR
========================= */
function showTyping() {
  typingIndicator.style.display = "flex";
}

function hideTyping() {
  typingIndicator.style.display = "none";
}

/* =========================
   FRONTEND SAFETY FILTER
========================= */
function isObviouslyInvalidTopic(text) {
  const blockedKeywords = [
    "code", "programming", "math", "physics",
    "politics", "religion", "movie", "song",
    "game", "sports", "crack", "hack",
    "earn money", "investment", "stock"
  ];

  const lower = text.toLowerCase();
  return blockedKeywords.some(word => lower.includes(word));
}

/* =========================
   SEND MESSAGE (CORE)
========================= */
async function sendMessage(message) {
  try {
    showTyping();

    const res = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();

    hideTyping();

    if (data?.reply) {
      addMessage("ai", data.reply);
    } else {
      addMessage("ai", "Sorry, something went wrong. Please try again.");
    }

  } catch (error) {
    hideTyping();
    addMessage("ai", "Network error. Please check your connection.");
  }
}

/* =========================
   SAFE WRAPPER (ONLY ONE FLOW)
========================= */
function safeSend() {
  const message = userInput.value.trim();
  if (!message) return;

  // user message show
  addMessage("user", message);

  userInput.value = "";
  userInput.style.height = "auto";

  // safety check
  if (isObviouslyInvalidTopic(message)) {
    addMessage(
      "ai",
      "SafePK AI only helps with cybersecurity awareness in Pakistan (scams, fraud, phishing, OTP safety, etc)."
    );
    return;
  }

  sendMessage(message);
}

/* =========================
   EVENTS (FIXED - NO DUPLICATES)
========================= */

// send button
sendBtn.addEventListener("click", safeSend);

// enter key send
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    safeSend();
  }
});

/* =========================
   QUICK QUESTIONS
========================= */
document.querySelectorAll(".quick-questions button").forEach(btn => {
  btn.addEventListener("click", () => {
    userInput.value = btn.textContent.trim();
    userInput.focus();
  });
});

/* =========================
   AUTO FOCUS
========================= */
window.addEventListener("load", () => {
  userInput?.focus();
});
