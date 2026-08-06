// =========================
// Welcome Page Buttons
// =========================

const startBtn = document.getElementById("startBtn");
const heroBtn = document.getElementById("heroBtn");
const calculator = document.getElementById("calculator");

function goToCalculator(){

    calculator.scrollIntoView({

        behavior:"smooth"

    });

}

startBtn.addEventListener("click",goToCalculator);
heroBtn.addEventListener("click",goToCalculator);

// =========================
// Calculator
// =========================

const generateBtn=document.getElementById("generateBtn");

const calculateBtn=document.getElementById("calculateBtn");

const subjectsContainer=document.getElementById("subjectsContainer");

generateBtn.addEventListener("click",generateSubjects);

function generateSubjects(){

    const totalSubjects=document.getElementById("subjectNumber").value;

    subjectsContainer.innerHTML="";

    if(totalSubjects==="" || totalSubjects<=0){

        alert("Please enter a valid number of subjects.");

        return;

    }

    for(let i=1;i<=totalSubjects;i++){

        const card=document.createElement("div");

        card.className="subject-card";

        card.innerHTML=`

        <h3>Subject ${i}</h3>

        <label>Course Name</label>

        <input
        type="text"
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

}

calculateBtn.addEventListener("click",()=>{

    alert("CGPA calculation will be added in Step 3.");

});