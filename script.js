const gradePoints = {
    "O":10,
    "A+":9,
    "A":8,
    "B+":7,
    "B":6,
    "C":5,
    "RA":0
};

const screens = {
    welcome: document.getElementById("welcomeScreen"),
    calculator: document.getElementById("calculatorScreen"),
    result: document.getElementById("resultScreen")
};

function showScreen(screen){
    Object.values(screens).forEach(s=>s.classList.remove("active"));
    screen.classList.add("active");
}

document.getElementById("startBtn").onclick=()=>{
    showScreen(screens.calculator);
};

document.getElementById("resetBtn").onclick=()=>{

    if(confirm("Are you sure you want to reset?")){
        location.reload();
    }

};

const subjects=document.getElementById("subjects");

function createSubjectCard(){

    const count=document.querySelectorAll(".subject").length+1;

    const card=document.createElement("div");

    card.className="subject";

    card.innerHTML=`

        <h3>Subject ${count}</h3>

        <div class="subject-grid">

            <input type="text"
            class="code"
            placeholder="Subject Code">

            <input type="text"
            class="name"
            placeholder="Subject Name">

            <input type="number"
            class="credit"
            min="1"
            placeholder="Credits">

            <select class="grade">

                <option value="">Select Grade</option>

                <option>O</option>
                <option>A+</option>
                <option>A</option>
                <option>B+</option>
                <option>B</option>
                <option>C</option>
                <option>RA</option>

            </select>

        </div>

        <button class="removeBtn">
            Remove Subject
        </button>

    `;

    card.querySelector(".removeBtn").onclick=()=>{

        card.remove();

        updateNumbers();

    };

    subjects.appendChild(card);

}

function updateNumbers(){

    document.querySelectorAll(".subject h3").forEach((item,index)=>{

        item.textContent=`Subject ${index+1}`;

    });

}

createSubjectCard();

document.getElementById("addSubject").onclick=()=>{

    createSubjectCard();

};
function updatePerformance(cgpa){

    const badge=document.getElementById("performanceBadge");

    const message=document.getElementById("performanceMessage");

    if(cgpa>=9){

        badge.textContent="🏆 Outstanding";
        message.textContent="Excellent academic performance!";

    }

    else if(cgpa>=8){

        badge.textContent="🌟 Excellent";
        message.textContent="Great job! Keep maintaining your performance.";

    }

    else if(cgpa>=7){

        badge.textContent="👍 Very Good";
        message.textContent="You are doing well. Aim even higher.";

    }

    else if(cgpa>=6){

        badge.textContent="🙂 Good";
        message.textContent="A good result. There is room for improvement.";

    }

    else if(cgpa>=5){

        badge.textContent="📘 Satisfactory";
        message.textContent="Work a little harder next semester.";

    }

    else{

        badge.textContent="⚠ Needs Improvement";
        message.textContent="Don't give up. You can improve your CGPA.";

    }

}


document.getElementById("calculateBtn").onclick = () => {

    const error = document.getElementById("errorBox");

    error.style.display = "none";

    const cards = document.querySelectorAll(".subject");

    let totalCredits = 0;

    let totalGradePoints = 0;

    for(let i=0;i<cards.length;i++){

        const code = cards[i].querySelector(".code").value.trim();

        const name = cards[i].querySelector(".name").value.trim();

        const credit = Number(cards[i].querySelector(".credit").value);

        const grade = cards[i].querySelector(".grade").value;

        if(code===""){

            error.innerHTML=`⚠ Subject ${i+1}: Subject Code is required.`;

            error.style.display="block";

            return;

        }

        if(name===""){

            error.innerHTML=`⚠ Subject ${i+1}: Subject Name is required.`;

            error.style.display="block";

            return;

        }

        if(credit<=0 || isNaN(credit)){

            error.innerHTML=`⚠ Subject ${i+1}: Enter a valid Credit.`;

            error.style.display="block";

            return;

        }

        if(grade===""){

            error.innerHTML=`⚠ Subject ${i+1}: Select a Grade.`;

            error.style.display="block";

            return;

        }

        totalCredits += credit;

        totalGradePoints += credit * gradePoints[grade];

    }

    const cgpa = (totalGradePoints / totalCredits).toFixed(2);

    updatePerformance(Number(cgpa));

    document.getElementById("cgpaValue").textContent = cgpa;

    document.getElementById("subjectCount").textContent = cards.length;

    document.getElementById("totalCredits").textContent = totalCredits;

    document.getElementById("totalGradePoints").textContent = totalGradePoints;

    showScreen(screens.result);

};
document.getElementById("backBtn").onclick = () => {

    showScreen(screens.calculator);

};
document.getElementById("newCalculationBtn").onclick=()=>{

location.reload();

};