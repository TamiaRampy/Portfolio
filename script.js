document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.querySelector(".theme-toggle");
    const body = document.body;

    // Function to toggle dark mode
    themeToggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            themeToggleBtn.innerHTML = "🌞";
        } else {
            themeToggleBtn.innerHTML = "🌙";
        }
    });

    // Typing effect
    const typingText = document.querySelector(".typing-text");
    const text = "Aspiring Software Developer";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 150);
        }
    }

    typeText();
});

function showSuccessMessage(event) {
    event.preventDefault();  // Prevent the default form submission
    document.getElementById("successMessage").style.display = "block";  // Show success message
    setTimeout(function() {
        document.getElementById("successMessage").style.display = "none";  // Hide success message after 5 seconds
    }, 5000);
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents default form submission
        const formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        })
        .then(response => {
            if (response.ok) {
                successMessage.style.display = "block";
                form.reset(); // Clear form fields after submission
            } else {
                alert("Oops! Something went wrong.");
            }
        })
        .catch(error => alert("Error: " + error));
    });
});



