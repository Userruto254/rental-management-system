// ========================================
// RENTAL MANAGEMENT SYSTEM
// Main JavaScript
// ========================================

// Show a selected section
function showSection(sectionId) {

    // Get all application sections
    const sections = document.querySelectorAll(".app-section");

    // Hide all sections
    sections.forEach(function(section) {
        section.style.display = "none";
    });

    // Show the section that was selected
    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.style.display = "block";
    }
}


// ========================================
// Start the application
// ========================================

document.addEventListener("DOMContentLoaded", function() {

    // Show Rooms / Tenants when the app opens
    showSection("rooms");

});