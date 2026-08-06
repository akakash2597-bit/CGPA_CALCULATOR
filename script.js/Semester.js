// ============================================
// SEMESTER.JS
// Part 1 - Generate Semester Cards
// ============================================

// ============================================
// HTML Elements
// ============================================

const semesterCountInput = document.getElementById("semesterCount");

const generateSemesterBtn = document.getElementById("generateSemesterBtn");

const generateSubjectsBtn = document.getElementById("generateSubjectsBtn");

const semesterContainer = document.getElementById("semesterContainer");

const subjectContainer = document.getElementById("subjectContainer");

// ============================================
// Global Variables
// ============================================

let totalSemesters = 0;

let semesterData = [];

// ============================================
// Event Listener
// ============================================

generateSemesterBtn.addEventListener("click", generateSemesterCards);

// ============================================
// Generate Semester Cards
// ============================================

function generateSemesterCards() {

    // Clear previous data
    semesterContainer.innerHTML = "";
    subjectContainer.innerHTML = "";

    hideButton(generateSubjectsBtn);
    hideButton(calculateBtn);

    semesterData = [];

    // Read input value
    totalSemesters = semesterCountInput.value;

    // Validate input
    if (!validateSemesterCount(totalSemesters)) {
        return;
    }

    totalSemesters = Number(totalSemesters);

    // Create semester cards
    for (let i = 1; i <= totalSemesters; i++) {

        const card = document.createElement("div");

        card.className = "semester-card";

        card.innerHTML = `

            <h3>Semester ${i}</h3>

            <label>
                Number of Subjects
            </label>

            <input
                type="number"
                class="subject-count-input"
                min="1"
                max="15"
                placeholder="Example : 7">

        `;

        semesterContainer.appendChild(card);

    }

    // Show Generate Subjects Button
    showButton(generateSubjectsBtn);

    // Success Message
    showMessage(
        `${totalSemesters} semester(s) created successfully.`,
        "success"
    );

    // Scroll to semester cards
    scrollToElement(semesterContainer);

}