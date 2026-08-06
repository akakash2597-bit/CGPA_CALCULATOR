// =============================
// Welcome Page Buttons
// =============================

const startBtn = document.getElementById("startBtn");
const heroBtn = document.getElementById("heroBtn");
const calculator = document.getElementById("calculator");

function goToCalculator() {

    calculator.scrollIntoView({
        behavior: "smooth"
    });

}

startBtn.addEventListener("click", goToCalculator);
heroBtn.addEventListener("click", goToCalculator);

// =============================
// Calculator Buttons
// =============================

const generateBtn = document.getElementById("generateBtn");
const calculateBtn = document.getElementById("calculateBtn");

generateBtn.addEventListener("click", () => {

    alert("Dynamic Subject Cards will be added in Part 2.2");

});

calculateBtn.addEventListener("click", () => {

    alert("CGPA Calculation will be added in Step 3");

});