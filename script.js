// Function to show the dropdown menu
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

// Function to hide the dropdown menu
function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter effect
const texts = [
    "DEVELOPER",
    "ETHICAL HACKER",
    "VIDEO EDITOR",
    "PHOTO EDITOR",
    "GRAPHIC DESIGNER"
];

let speed = 100;  // Typing speed
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);  // Delay before erasing
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);  // Erasing speed
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500);  // Delay before typing the next text
    }
}

// Ensure the typewriter element exists before initializing
if (textElements) {
    window.onload = typeWriter;
}

// Smooth transition for the dropdown menu (suggested addition to your CSS)
/*
.dropdown {
    transition: transform 0.5s ease-in-out;
}
*/
document.getElementById("toggleAbout").addEventListener("click", function() {
    const aboutInfo = document.getElementById("aboutInfo");
    if (aboutInfo.classList.contains("hidden")) {
        aboutInfo.classList.remove("hidden");
        this.textContent = "Show Less";
    } else {
        aboutInfo.classList.add("hidden");
        this.textContent = "Learn More";
    }
});
