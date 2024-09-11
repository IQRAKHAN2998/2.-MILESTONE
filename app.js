"use strict";
// Select the form and output div
const form = document.getElementById('resume-form');
const resumeOutput = document.getElementById('resume-output');
// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const education = document.getElementById('education').value;
    const workExperience = document.getElementById('work-experience').value;
    const skills = document.getElementById('skills').value;
    // Generate resume
    const resumeHTML = `
        <h2>${name}'s Resume</h2>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Work Experience</h3>
        <p>${workExperience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;
    // Update resume output
    resumeOutput.innerHTML = resumeHTML;
});
