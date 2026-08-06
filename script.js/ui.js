// ============================================
// UI.JS
// User Interface Functions
// ============================================

// ===============================
// Get HTML Elements
// ===============================

const startBtn = document.getElementById("startBtn");
const heroBtn = document.getElementById("heroBtn");
const calculatorSection = document.getElementById("calculator");

const messageBox = document.getElementById("messageBox");

const generateSemesterBtn = document.getElementById("generateSemesterBtn");
const generateSubjectsBtn = document.getElementById("generateSubjectsBtn");
const calculateBtn = document.getElementById("calculateBtn");

// ===============================
// Smooth Scroll
// ===============================

function scrollToCalculator() {

    calculatorSection.scrollIntoView({

        behavior: "smooth",
        block: "start"

    });

}

// Navigation Button

if (startBtn) {

    startBtn.addEventListener("click", scrollToCalculator);

}

// Hero Button

if (heroBtn) {

    heroBtn.addEventListener("click", scrollToCalculator);

}

// ===============================
// Message Box
// ===============================

function showMessage(message, type = "success") {

    messageBox.style.display = "block";

    messageBox.textContent = message;

    messageBox.className = "message-box";

    if (type === "success") {

        messageBox.classList.add("message-success");

    }

    else {

        messageBox.classList.add("message-error");

    }

}

// ===============================
// Clear Message
// ===============================

function clearMessage() {

    messageBox.style.display = "none";

    messageBox.textContent = "";

    messageBox.className = "message-box";

}

// ===============================
// Show Button
// ===============================

function showButton(button) {

    button.style.display = "inline-block";

}

// ===============================
// Hide Button
// ===============================

function hideButton(button) {

    button.style.display = "none";

}

// ===============================
// Enable Button
// ===============================

function enableButton(button) {

    button.disabled = false;

}

// ===============================
// Disable Button
// ===============================

function disableButton(button) {

    button.disabled = true;

}

// ===============================
// Scroll to Any Section
// ===============================

function scrollToElement(element) {

    element.scrollIntoView({

        behavior: "smooth",
        block: "start"

    });

}