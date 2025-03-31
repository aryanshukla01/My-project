// Handle form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    // Get form data
    const email = document.getElementById("email").value;
    const query = document.getElementById("query").value;

    // Simple form validation
    if (email === "" || query === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Show confirmation message
    document.getElementById("formMessage").innerHTML =
      "✅ Thank you! Your query has been submitted successfully.";

    // Reset form after submission
    document.getElementById("contactForm").reset();
  });
