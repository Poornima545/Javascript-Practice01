function calculateBMI() {
  // Get user inputs
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);

  // Calculate BMI
  if (isNaN(weight) || isNaN(height) || height <= 0) {
    document.getElementById("result").textContent =
      "Please enter valid values.";
  } else {
    var bmi = weight / (height * height);
    document.getElementById("result").textContent =
      "Your BMI is: " + bmi.toFixed(2);
  }
}
