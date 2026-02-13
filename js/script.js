function showLove() {
    alert("Hehe I knew it 😌💗 You belong to me now.");
}

window.onbeforeunload = function () {
    return "Where are you going??? 😡💖";
};
window.onload = function() {
    document.body.addEventListener("click", function() {
        document.getElementById("bgMusic").play();
    }, { once: true });
};
function openLetter() {
    document.getElementById("letter").classList.remove("hidden");
    typeWriter();
}

let message = "From the moment you came into my life, everything turned pink and magical. 🌸💖 " +
"I don’t just like you… I am OBSESSED with you. 😤💕 " +
"You are my happiness, my comfort, my favorite notification. 💌 " +
"And just so you know… you’re not allowed to leave. Ever. 💗😌";

let i = 0;

function typeWriter() {
    if (i < message.length) {
        document.getElementById("typeText").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}
let reasons = [
    "Because your smile fixes my worst days 💖",
    "Because you are literally my favorite person 😌",
    "Because you’re cute even when you’re mad 😤💕",
    "Because you make my world pink 🌸",
    "Because you are mine. Yes. Mine. 💗",
    "Because I feel safe with you 💞",
    "Because life is boring without you 😭",
    "Because I choose you. Always. 💘"
];

function showReason() {
    let randomIndex = Math.floor(Math.random() * reasons.length);
    document.getElementById("reasonText").innerHTML = reasons[randomIndex];
}
function moveButton() {
    let button = document.getElementById("noBtn");
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    button.style.position = "absolute";
    button.style.left = x + "px";
    button.style.top = y + "px";
}

function yesClicked() {
    window.location.href = "forever.html";
}
function createHearts() {
    const container = document.querySelector(".hearts-container");

    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
        

    }, 400);
}


createHearts();
const music = document.getElementById("bgMusic");

if (localStorage.getItem("musicTime")) {
    music.currentTime = localStorage.getItem("musicTime");
}

music.play();

setInterval(() => {
    localStorage.setItem("musicTime", music.currentTime);
}, 1000);
const music = document.getElementById("bgMusic");

if (localStorage.getItem("musicTime")) {
    music.currentTime = localStorage.getItem("musicTime");
}

music.play();

setInterval(() => {
    localStorage.setItem("musicTime", music.currentTime);
}, 1000);
