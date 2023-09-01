// Function to validate the form
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessages = document.getElementById("errorMessages");

  errorMessages.innerHTML = ""; // Clear previous error messages

  // Validate name (must not be empty)
  if (name === "") {
    errorMessages.innerHTML += "<p>Please enter your name.</p>";
  }

  // Validate email using a regular expression
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    errorMessages.innerHTML += "<p>Please enter a valid email address.</p>";
  }

  // Validate password (must be at least 6 characters long)
  if (password.length < 6) {
    errorMessages.innerHTML +=
      "<p>Password must be at least 6 characters long.</p>";
  }

  // If there are no errors, submit the form
  if (errorMessages.innerHTML === "") {
    alert("Form submitted successfully!");
    // You can also submit the form to a server using AJAX or other methods.
  }

  // Prevent the default form submission
  return false;
}

// Add a form submission event listener
const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", validateForm);
