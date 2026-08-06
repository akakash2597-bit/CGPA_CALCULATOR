// ============================================
// MAIN.JS
// Application Entry Point
// ============================================

// ============================================
// Application Start
// ============================================

document.addEventListener("DOMContentLoaded", initializeApplication);

// ============================================
// Initialize Application
// ============================================

function initializeApplication() {

    console.clear();

    console.log("====================================");
    console.log(" RIT CGPA Calculator Started");
    console.log("====================================");

    // Hide Buttons
    hideButton(generateSubjectsBtn);
    hideButton(calculateBtn);

    // Clear Messages
    clearMessage();

    // Reset Variables
    totalSemesters = 0;
    semesterData = [];

    // Welcome Message
    console.log("Application Loaded Successfully.");

}

// ============================================
// Restart Application
// ============================================

function restartApplication() {

    resetCalculator();

    console.log("Calculator Reset Successfully.");

}

// ============================================
// Show Application Information
// ============================================

function showApplicationInfo() {

    console.log("====================================");
    console.log("Project : RIT CGPA Calculator");
    console.log("College : Rajalakshmi Institute of Technology");
    console.log("University : Anna University");
    console.log("Version : 1.0.0");
    console.log("Developer : Akash");
    console.log("====================================");

}

// ============================================
// Check Application Status
// ============================================

function checkApplicationStatus() {

    console.log("========== STATUS ==========");

    console.log("Semester Data :", semesterData);

    console.log("CGPA Result :", getCGPAResult());

}

// ============================================
// End of main.js
// ============================================