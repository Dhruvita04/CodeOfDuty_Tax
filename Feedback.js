document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.getElementById("feedbackForm");
    const confirmation = document.getElementById("confirmation");

    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Simulate form submission (you can replace this with actual submission logic)
        setTimeout(function () {
            feedbackForm.reset();
            confirmation.classList.remove("hidden");
            setTimeout(function () {
                confirmation.classList.add("hidden");
            }, 3000); // Hide confirmation after 3 seconds
        }, 1000); // Simulate processing for 1 second
    });
});
