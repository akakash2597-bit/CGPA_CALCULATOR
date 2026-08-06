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
// ============================================
// SEMESTER.JS
// Part 2 - Generate Subject Cards
// ============================================

// Event Listener
generateSubjectsBtn.addEventListener("click", generateSubjectCards);

// ============================================
// Generate Subject Cards
// ============================================

function generateSubjectCards() {

    // Clear old subject cards
    subjectContainer.innerHTML = "";

    semesterData = [];

    const subjectInputs = document.querySelectorAll(".subject-count-input");

    // Validate all semester inputs
    for (let i = 0; i < subjectInputs.length; i++) {

        const subjectCount = subjectInputs[i].value;

        if (!validateSubjectCount(subjectCount)) {

            showMessage(
                `Please enter a valid number of subjects for Semester ${i + 1}.`,
                "error"
            );

            return;
        }

    }

    // Generate Subject Cards
    for (let semesterIndex = 0; semesterIndex < subjectInputs.length; semesterIndex++) {

        const subjectCount = Number(subjectInputs[semesterIndex].value);

        const semesterSection = document.createElement("div");

        semesterSection.className = "semester-subject-section";

        semesterSection.innerHTML = `
            <h2>Semester ${semesterIndex + 1}</h2>
        `;

        // Store semester information
        semesterData.push({

            semester: semesterIndex + 1,

            totalSubjects: subjectCount,

            subjects: []

        });

        // Create Subject Cards
        for (let subjectIndex = 1; subjectIndex <= subjectCount; subjectIndex++) {

            const card = document.createElement("div");

            card.className = "subject-card";

            card.innerHTML = `

                <h3>Subject ${subjectIndex}</h3>

                <label>Course Name</label>

                <input
                    type="text"
                    class="course-name"
                    placeholder="Example : Data Structures">

                <label>Credits</label>

                <select class="credit">

                    <option value="">Select Credit</option>

                    <option value="1">1</option>

                    <option value="2">2</option>

                    <option value="3">3</option>

                    <option value="4">4</option>

                    <option value="5">5</option>

                </select>

                <label>Grade</label>

                <select class="grade">

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

            semesterSection.appendChild(card);

        }

        subjectContainer.appendChild(semesterSection);

    }

    showButton(calculateBtn);

    showMessage(
        "Subject cards generated successfully.",
        "success"
    );

    scrollToElement(subjectContainer);

}
// ============================================
// SEMESTER.JS
// Part 3 - Collect Subject Data
// ============================================

// Calculate Button Event
calculateBtn.addEventListener("click", collectSubjectData);

// ============================================
// Collect Subject Information
// ============================================

function collectSubjectData() {

    // Clear previous data
    for (let i = 0; i < semesterData.length; i++) {

        semesterData[i].subjects = [];

    }

    const semesterSections = document.querySelectorAll(".semester-subject-section");

    // Loop through each semester
    semesterSections.forEach((section, semesterIndex) => {

        const subjectCards = section.querySelectorAll(".subject-card");

        // Loop through each subject
        subjectCards.forEach((card) => {

            const courseName = card.querySelector(".course-name").value.trim();

            const credit = card.querySelector(".credit").value;

            const grade = card.querySelector(".grade").value;

            // Validate Input
            if (!validateSubject(courseName, credit, grade)) {

                showMessage(
                    "Please complete all subject details before calculating CGPA.",
                    "error"
                );

                throw new Error("Validation Failed");

            }

            // Store Subject
            semesterData[semesterIndex].subjects.push({

                courseName: courseName,

                credit: Number(credit),

                gradePoint: Number(grade)

            });

        });

    });

    clearMessage();

    showMessage(
        "All subject details collected successfully.",
        "success"
    );

    console.log("Semester Data");

    console.log(semesterData);

    // Call CGPA Calculation
    calculateCGPA(semesterData);

}
// ============================================
// SEMESTER.JS
// Part 4 - Helper Functions
// ============================================

// ============================================
// Reset Calculator
// ============================================

function resetCalculator() {

    // Clear semester input
    semesterCountInput.value = "";

    // Clear generated content
    semesterContainer.innerHTML = "";
    subjectContainer.innerHTML = "";

    // Reset variables
    totalSemesters = 0;
    semesterData = [];

    // Hide buttons
    hideButton(generateSubjectsBtn);
    hideButton(calculateBtn);

    // Clear messages
    clearMessage();

}

// ============================================
// Get Semester Data
// ============================================

function getSemesterData() {

    return semesterData;

}

// ============================================
// Clear Subject Cards
// ============================================

function clearSubjectCards() {

    subjectContainer.innerHTML = "";

    hideButton(calculateBtn);

}

// ============================================
// Clear Semester Cards
// ============================================

function clearSemesterCards() {

    semesterContainer.innerHTML = "";

    subjectContainer.innerHTML = "";

    hideButton(generateSubjectsBtn);

    hideButton(calculateBtn);

}

// ============================================
// Refresh Calculator
// ============================================

function refreshCalculator() {

    clearSemesterCards();

    semesterData = [];

    totalSemesters = 0;

    clearMessage();

}

// ============================================
// Check if Semester Data Exists
// ============================================

function hasSemesterData() {

    return semesterData.length > 0;

}

// ============================================
// Print Semester Data (Debugging)
// ============================================

function printSemesterData() {

    console.log("========== Semester Data ==========");

    console.table(semesterData);

}

// ============================================
// End of semester.js
// ============================================