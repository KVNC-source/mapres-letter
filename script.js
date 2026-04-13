const extraMessages = [
  "Take a deep breath. Inhale… exhale… you're okay 🤍",
  "You don't have to do everything at once. Just the next small step.",
  "Even on your worst day, you're still incredible.",
  "I'm here for you, always. You're not doing this alone.",
  "Rest for a bit if you need to. You deserve that too.",
];

let lastIndex = -1;
let typingTimeout;
let isTyping = false;

/* ================= RANDOM MESSAGE ================= */
function getRandomMessage() {
  let index;
  do {
    index = Math.floor(Math.random() * extraMessages.length);
  } while (index === lastIndex);

  lastIndex = index;
  return extraMessages[index];
}

/* ================= TYPEWRITER ================= */
function typeWriter(element, text, speed = 35) {
  clearTimeout(typingTimeout);
  element.innerHTML = "";
  let i = 0;
  isTyping = true;

  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      typingTimeout = setTimeout(typing, speed);
    } else {
      isTyping = false;
    }
  }

  typing();
}

/* ================= SHOW EXTRA ================= */
function showExtra() {
  const extra = document.getElementById("extra");
  const message = getRandomMessage();

  clearTimeout(typingTimeout);

  extra.style.opacity = 0;
  extra.style.transform = "translateY(10px)";

  setTimeout(() => {
    typeWriter(extra, message);

    extra.style.transition = "all 0.6s ease";
    extra.style.opacity = 1;
    extra.style.transform = "translateY(0)";
  }, 150);
}

/* ================= SCROLL ================= */
function scrollTopSmooth() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/* ================= BACKGROUND SLIDESHOW ================= */
const images = [
  "images/img1.jpeg",
  "images/img2.jpeg",
  "images/img3.jpeg",
  "images/img4.jpeg",
  "images/img5.jpeg",
  "images/img6.jpeg",
];

let currentIndex = 0;

/* create background layer */
const bgLayer = document.createElement("div");
bgLayer.style.position = "fixed";
bgLayer.style.inset = "0";
bgLayer.style.zIndex = "-2";
bgLayer.style.backgroundSize = "cover";
bgLayer.style.backgroundPosition = "center";
bgLayer.style.transition = "opacity 1.5s ease";
bgLayer.style.opacity = "1";
bgLayer.style.filter = "blur(2px)";

document.body.appendChild(bgLayer);

/* initial image */
bgLayer.style.backgroundImage = `url(${images[0]})`;

function changeBackground() {
  bgLayer.style.opacity = "0";

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    bgLayer.style.backgroundImage = `url(${images[currentIndex]})`;
    bgLayer.style.opacity = "1";
  }, 800);
}

/* change every 5 seconds */
setInterval(changeBackground, 5000);

/* ================= BREATHING EFFECT ================= */
setInterval(() => {
  document.body.style.transition = "transform 4s ease-in-out";
  document.body.style.transform = "scale(1.003)";

  setTimeout(() => {
    document.body.style.transform = "scale(1)";
  }, 2000);
}, 6000);
