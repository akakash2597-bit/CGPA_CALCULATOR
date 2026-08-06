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