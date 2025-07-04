$(document).ready(function() {
    // Smooth scrolling using jQuery
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault(); // Prevent default anchor click behavior
            var hash = this.hash;

            // Use jQuery's animate() method for smooth page scroll
            // The number (800) specifies the number of milliseconds it takes to scroll to the specified area
            // Offset by the height of the fixed navbar to ensure content is visible
            $('html, body').animate({
                scrollTop: $(hash).offset().top - $('.navbar').outerHeight()
            }, 800, function() {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });

    // Form Validation (Vanilla JavaScript)
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageTextarea = document.getElementById('message');
    const formSuccessAlert = document.getElementById('formSuccess');
    const formErrorAlert = document.getElementById('formError');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        let isValid = true;

        // Clear previous validation messages and hide alerts
        nameInput.classList.remove('is-invalid');
        emailInput.classList.remove('is-invalid');
        messageTextarea.classList.remove('is-invalid');
        formSuccessAlert.classList.add('d-none');
        formErrorAlert.classList.add('d-none');

        // Validate Name
        if (nameInput.value.trim() === '') {
            nameInput.classList.add('is-invalid');
            isValid = false;
        }

        // Validate Email using a simple regex pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '' || !emailPattern.test(emailInput.value.trim())) {
            emailInput.classList.add('is-invalid');
            isValid = false;
        }

        // Validate Message
        if (messageTextarea.value.trim() === '') {
            messageTextarea.classList.add('is-invalid');
            isValid = false;
        }

        if (isValid) {
            // This is where you would typically send the form data to a server
            // For this assignment, we'll just simulate a successful submission.
            // In a real project, you might use Fetch API or jQuery.ajax for this.
            console.log("Form is valid! (Data would be sent to server)");
            console.log("Name:", nameInput.value.trim());
            console.log("Email:", emailInput.value.trim());
            console.log("Subject:", document.getElementById('subject').value.trim());
            console.log("Message:", messageTextarea.value.trim());

            // Simulate success feedback
            formSuccessAlert.classList.remove('d-none');
            contactForm.reset(); // Clear the form fields

            // Hide success message after 5 seconds
            setTimeout(() => {
                formSuccessAlert.classList.add('d-none');
            }, 5000);

        } else {
            // Show error message
            formErrorAlert.classList.remove('d-none');
            formErrorAlert.textContent = "Please correct the errors in the form before submitting.";
            // Hide error message after 5 seconds
            setTimeout(() => {
                formErrorAlert.classList.add('d-none');
            }, 5000);
        }
    });

    // Set current year in footer
    // This dynamically updates the copyright year
    $('#currentYear').text(new Date().getFullYear());
});