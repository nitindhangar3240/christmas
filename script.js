// ========== SNOW EFFECT ==========
document.addEventListener("DOMContentLoaded", () => {
  const snowContainer = document.getElementById("snow-container");
  const snowflakesCount = 70;

  for (let i = 0; i < snowflakesCount; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❆";

    const size = Math.random() * 1.4 + 0.6; // 0.6 to 2.0
    const left = Math.random() * 100; // percentage
    const duration = Math.random() * 10 + 8; // 8 to 18 sec
    const delay = Math.random() * 10; // 0 to 10 sec

    snowflake.style.fontSize = size + "rem";
    snowflake.style.left = left + "vw";
    snowflake.style.animationDuration = duration + "s";
    snowflake.style.animationDelay = delay + "s";

    snowContainer.appendChild(snowflake);
  }
});

// ========== FLIP CARD (CLICK ONLY) ==========
const loveCard = document.getElementById("love-card");
if (loveCard) {
  loveCard.addEventListener("click", () => {
    loveCard.classList.toggle("flipped");
  });
}

// ========== TYPEWRITER MESSAGE ==========
const messageText =
  "This Christmas, I just want to thank you for being in my life. 💖 " +
  "You are my comfort in every stress, my smile in every sadness, and my warmth in every cold night. " +
  "No matter how many stars shine in the sky, my favorite one will always be you. 🎄❤️";

let index = 0;
const speed = 40;

function typeWriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;

  if (index < messageText.length) {
    el.innerHTML += messageText.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

const openMsgBtn = document.getElementById("open-message");
if (openMsgBtn) {
  openMsgBtn.addEventListener("click", () => {
    const msgSection = document.getElementById("message");
    if (msgSection) {
      msgSection.scrollIntoView({ behavior: "smooth" });
    }
    const el = document.getElementById("typewriter");
    if (el && el.innerHTML.trim().length === 0) {
      typeWriter();
    }
  });
}

// ========== LOVE LETTER OPEN/CLOSE ==========
const envelope = document.getElementById("envelope");
const openLetterBtn = document.getElementById("open-letter");

if (envelope && openLetterBtn) {
  openLetterBtn.addEventListener("click", () => {
    envelope.classList.toggle("open");
  });
}

// ========== VIRTUAL HUG ==========
const hugButton = document.getElementById("hug-button");
const hugText = document.getElementById("hug-text");

if (hugButton && hugText) {
  hugButton.addEventListener("click", () => {
    hugText.textContent =
      "🤗 Tightest virtual hug wrapped in all my love, just for you! 💖";
    hugText.style.opacity = 0;
    hugText.style.transition = "opacity 0.7s ease";
    setTimeout(() => {
      hugText.style.opacity = 1;
    }, 50);
  });
}
