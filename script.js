// Contact Form Validation

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values
    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let country = document.getElementById("country").value;
    let comments = document.getElementById("comments").value.trim();

    // Check Full Name
    if (fullName === "") {
        alert("Please enter your full name.");
        return;
    }

    // Check Email
    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    // Check Email Format
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check Country
    if (country === "") {
        alert("Please select your country.");
        return;
    }

    // Check Comments
    if (comments === "") {
        alert("Please enter your comments.");
        return;
    }

    // Success Message
    alert("Your message has been submitted successfully!");

    // Clear the form
    document.getElementById("contactForm").reset();

});
