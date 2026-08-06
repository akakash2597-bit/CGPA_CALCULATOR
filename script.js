// =========================
// Welcome Page
// =========================

const startBtn = document.getElementById("startBtn");
const heroBtn = document.getElementById("heroBtn");
const calculator = document.getElementById("calculator");

startBtn.addEventListener("click", () => {
    calculator.scrollIntoView({ behavior: "smooth" });
});

heroBtn.addEventListener("click", () => {
    calculator.scrollIntoView({ behavior: "smooth" });
});

// =========================
// Calculator
// =========================

const generateBtn = document.getElementById("generateBtn");
const calculateBtn = document.getElementById("calculateBtn");
const subjectsContainer = document.getElementById("subjectsContainer");
const messageBox = document.getElementById("messageBox");
const subjectInput = document.getElementById("subjectNumber");

// Disable button initially
calculateBtn.disabled = true;

generateBtn.addEventListener("click", generateSubjects);

function showMessage(message, type){

    messageBox.textContent = message;

    messageBox.className = "message-box";

    if(type === "success"){
        messageBox.classList.add("message-success");
    }else{
        messageBox.classList.add("message-error");
    }

}

function generateSubjects(){

    const totalSubjects = Number(subjectInput.value);

    subjectsContainer.innerHTML = "";

    calculateBtn.disabled = true;

    if(!totalSubjects){

        showMessage("Please enter the number of subjects.","error");

        return;

    }

    if(totalSubjects < 1 || totalSubjects > 20){

        showMessage("Number of subjects must be between 1 and 20.","error");

        return;

    }

    for(let i = 1; i <= totalSubjects; i++){

        const card = document.createElement("div");

        card.className = "subject-card";

        card.innerHTML = `

            <h3>Subject ${i}</h3>

            <label>Course Name</label>

            <input type="text"
                   placeholder="Example: Mathematics">

            <label>Credits</label>

            <select>

                <option value="">Select Credit</option>

                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>

            </select>

            <label>Grade</label>

            <select>

                <option value="">Select Grade</option>

                <option value="10">O</option>
                <option value="9">A+</option>
                <option value="8">A</option>
                <option value="7">B+</option>
                <option value="6">B</option>
                <option value="5">C</option>
                <option value="0">RA</option>

            </select>

        `;

        subjectsContainer.appendChild(card);

    }

    calculateBtn.disabled = false;

    showMessage(
        `${totalSubjects} subject cards generated successfully.`,
        "success"
    );

    subjectsContainer.scrollIntoView({

        behavior:"smooth",
        block:"start"

    });

}

calculateBtn.addEventListener("click", () => {

    showMessage(
        "CGPA calculation will be implemented in Step 3.",
        "success"
    );

});