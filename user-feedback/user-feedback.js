document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.getElementById("feedback-form");
    const confirmationMessage = document.getElementById("confirmation-message");

    feedbackForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting the traditional way
        
        // Simulate sending feedback (you can replace this with your actual submission logic)
        setTimeout(function () {
            feedbackForm.style.display = "none";
            confirmationMessage.style.display = "block";
        }, 1000);
    });
});