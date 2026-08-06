// ============================================
// CGPA.JS
// CGPA Calculation Module
// ============================================

// Store Final Result

let cgpaResult = {

    totalCredits: 0,

    totalCreditPoints: 0,

    cgpa: 0

};

// ============================================
// Calculate CGPA
// ============================================

function calculateCGPA(semesterData) {

    let totalCredits = 0;

    let totalCreditPoints = 0;

    // Loop Through Every Semester

    semesterData.forEach((semester) => {

        semester.subjects.forEach((subject) => {

            // Ignore RA Subjects

            if (subject.gradePoint === 0) {

                return;

            }

            totalCredits += subject.credit;

            totalCreditPoints += (subject.credit * subject.gradePoint);

        });

    });

    // Avoid Division By Zero

    if (totalCredits === 0) {

        showMessage(
            "CGPA cannot be calculated because there are no valid subjects.",
            "error"
        );

        return;

    }

    // Calculate CGPA

    const cgpa = totalCreditPoints / totalCredits;

    // Store Result

    cgpaResult.totalCredits = totalCredits;

    cgpaResult.totalCreditPoints = totalCreditPoints;

    cgpaResult.cgpa = cgpa.toFixed(2);

    console.log("========== CGPA RESULT ==========");

    console.table(cgpaResult);

    showMessage(
        "CGPA calculated successfully.",
        "success"
    );

    // Go To Result Page

    displayResult();

}

// ============================================
// Return Result
// ============================================

function getCGPAResult() {

    return cgpaResult;

}

// ============================================
// Display Result
// ============================================

function displayResult() {

    /*
        Step 3 (Result Page)

        We will build this function later.

        It will display:

        Total Credits

        Total Credit Points

        Final CGPA

    */

    console.log("Result Page Coming Next...");

}