// ============================================
// VALIDATION.JS
// Input Validation Functions
// ============================================

// ===============================
// Validate Semester Count
// ===============================

function validateSemesterCount(semesterCount) {

    // Check if input is empty
    if (semesterCount === "" || semesterCount === null) {

        showMessage("Please enter the number of completed semesters.", "error");
        return false;

    }

    // Convert to Number
    semesterCount = Number(semesterCount);

    // Check if it is a valid number
    if (isNaN(semesterCount)) {

        showMessage("Semester count must be a valid number.", "error");
        return false;

    }

    // Minimum Semester
    if (semesterCount < 1) {

        showMessage("Semester count cannot be less than 1.", "error");
        return false;

    }

    // Maximum Semester
    if (semesterCount > 8) {

        showMessage("Maximum allowed semesters is 8.", "error");
        return false;

    }

    clearMessage();

    return true;

}

// ===============================
// Validate Subject Count
// ===============================

function validateSubjectCount(subjectCount) {

    subjectCount = Number(subjectCount);

    if (isNaN(subjectCount)) {

        return false;

    }

    if (subjectCount < 1) {

        return false;

    }

    if (subjectCount > 15) {

        return false;

    }

    return true;

}

// ===============================
// Validate Credits
// ===============================

function validateCredit(credit) {

    if (credit === "") {

        return false;

    }

    credit = Number(credit);

    if (credit < 1 || credit > 5) {

        return false;

    }

    return true;

}

// ===============================
// Validate Grade
// ===============================

function validateGrade(grade) {

    const validGrades = [

        "10",
        "9",
        "8",
        "7",
        "6",
        "5",
        "0"

    ];

    return validGrades.includes(grade);

}

// ===============================
// Validate Course Name
// ===============================

function validateCourseName(courseName) {

    if (courseName.trim() === "") {

        return false;

    }

    return true;

}

// ===============================
// Validate Complete Subject
// ===============================

function validateSubject(courseName, credit, grade) {

    if (!validateCourseName(courseName)) {

        return false;

    }

    if (!validateCredit(credit)) {

        return false;

    }

    if (!validateGrade(grade)) {

        return false;

    }

    return true;

}