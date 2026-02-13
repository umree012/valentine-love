/* =========================================
   💖 VALENTINE WEBSITE - MAIN SCRIPT FILE
   Organized & Clean Version
========================================= */

/* =========================================
   🌸 GLOBAL VARIABLES
========================================= */

let typeIndex = 0;
let typingSpeed = 40;

const loveMessage =
    "From the moment you came into my life, everything turned pink and magical. 🌸💖 " +
    "I don’t just like you… I am OBSESSED with you. 😤💕 " +
    "You are my happiness, my comfort, my favorite notification. 💌 " +
    "And just so you know… you’re not allowed to leave. Ever. 💗😌";

const reasonsList = [
    "Because your smile fixes my worst days 💖",
    "Because you are literally my favorite person 😌",
    "Because you’re cute even when you’re mad 😤💕",
    "Because you make my world pink 🌸",
    "Because you are mine. Yes. Mine. 💗",
    "Because I feel safe with you 💞",
    "Because life is boring without you 😭",
    "Because I choose you. Always. 💘",
    "Because my heart feels calm with you 💓",
    "Because you are my favorite human 🥰"
];


/* =========================================
   🚀 DOM LOADED INITIALIZATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    initializeMusic();
    initializeHearts();
    initializeExitWarning();

});


/* =========================================
   🎵 BACKGROUND MUSIC CONTROLLER
========================================= */

function initializeMusic() {

    const music = document.getElementById("bgMusic");
    if (!music) return;

    // Restore saved time if exists
    const savedTime = localStorage.getItem("musicTime");
    if (savedTime) {
        music.currentTime = parseFloat(savedTime);
    }

    // Play music after first interaction
    document.body.addEventListener("click", function () {
        music.play().catch(() => {});
    }, { once: true });

    // Save time every second
    setInterval(() => {
        if (!music.paused) {
            localStorage.setItem("musicTime", music.currentTime);
        }
    }, 1000);
}


/* =========================================
   💌 LOVE LETTER FUNCTIONS
========================================= */

function openLetter() {
    const letter = document.getElementById("letter");
    if (!letter) return;

    letter.classList.remove("hidden");
    startTypingEffect();
}

function startTypingEffect() {

    const textElement = document.getElementById("typeText");
    if (!textElement) return;

    if (typeIndex < loveMessage.length) {
        textElement.innerHTML += loveMessage.charAt(typeIndex);
        typeIndex++;
        setTimeout(startTypingEffect, typingSpeed);
    }
}


/* =========================================
   💘 RANDOM REASONS GENERATOR
========================================= */

function showReason() {

    const reasonElement = document.getElementById("reasonText");
    if (!reasonElement) return;

    const randomIndex = Math.floor(Math.random() * reasonsList.length);
    reasonElement.innerHTML = reasonsList[randomIndex];
}


/* =========================================
   😤 RUNNING NO BUTTON
========================================= */

function moveButton() {

    const button = document.getElementById("noBtn");
    if (!button) return;

    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

function yesClicked() {
    window.location.href = "forever.html";
}


/* =========================================
   💗 FLOATING HEARTS ANIMATION
========================================= */

function initializeHearts() {

    const container = document.querySelector(".hearts-container");
    if (!container) return;

    setInterval(() => {

        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 20 + 15) + "px";
        heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }, 400);
}


/* =========================================
   💕 FUN ALERT FUNCTION
========================================= */

function showLove() {
    alert("Hehe I knew it 😌💗 You belong to me now.");
}


/* =========================================
   😡 CLINGY EXIT WARNING
========================================= */

function initializeExitWarning() {

    window.onbeforeunload = function () {
        return "Where are you going??? 😡💖";
    };
}
