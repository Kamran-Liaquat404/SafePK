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

  if (role === "user") {
    msg.className = "msg-user";
  } else {
    msg.className = "msg-ai";
  }

  msg.textContent = text;
  chatMessages.appendChild(msg);

  chatMessages.scrollTop = chatMessages.scrollHeight;
}

/* =========================
   SHOW / HIDE TYPING
========================= */
function showTyping() {
  typingIndicator.style.display = "flex";
}

function hideTyping() {
  typingIndicator.style.display = "none";
}

/* =========================
   SEND MESSAGE TO BACKEND
========================= */
async function sendMessage() {
  const message = userInput.value.trim();

  if (!message) return;

  // Add user message
  addMessage("user", message);

  userInput.value = "";
  userInput.style.height = "auto";

  showTyping();

  try {
    const res = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message
      }),
    });

    const data = await res.json();

    hideTyping();

    if (data && data.reply) {
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
   EVENT LISTENERS
========================= */
sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

/* =========================
   FRONTEND SAFETY FILTER (LIGHT LAYER)
   (Backend will enforce real rules)
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
   SAFE SEND WRAPPER
========================= */
async function safeSend() {
  const message = userInput.value.trim();

  if (!message) return;

  // Frontend quick block (UX only)
  if (isObviouslyInvalidTopic(message)) {
    addMessage(
      "ai",
      "SafePK AI only helps with cybersecurity awareness in Pakistan (scams, fraud, phishing, OTP safety, etc)."
    );
    userInput.value = "";
    return;
  }

  await sendMessage();
}

/* =========================
   OVERRIDE EVENTS (SAFE FLOW)
========================= */
sendBtn.removeEventListener("click", sendMessage);
sendBtn.addEventListener("click", safeSend);

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    safeSend();
  }
});

/* =========================
   QUICK QUESTIONS HANDLER
========================= */
document.querySelectorAll(".quick-questions button").forEach(btn => {
  btn.addEventListener("click", () => {
    const text = btn.textContent.trim();
    userInput.value = text;
    userInput.focus();
  });
});

/* =========================
   AUTO FOCUS ON LOAD
========================= */
window.addEventListener("load", () => {
  userInput.focus();
});