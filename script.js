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

document.getElementById("calculateBtn").onclick=()=>{

showScreen(screens.result);

};

document.getElementById("resetBtn").onclick=()=>{

location.reload();

};

document.getElementById("addSubject").onclick=()=>{

const div=document.createElement("div");

div.className="subject";

div.innerHTML=`

<input
type="text"
placeholder="Subject Name">

<input
type="number"
placeholder="Credits">

<select>

<option>O</option>
<option>A+</option>
<option>A</option>
<option>B+</option>
<option>B</option>
<option>C</option>
<option>RA</option>

</select>

`;

document.getElementById("subjects").appendChild(div);

};