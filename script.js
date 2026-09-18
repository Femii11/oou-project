document.getElementById("calcbtn").addEventListener("click", function () {
  // Get value from JAMB inputs
  const jamb = parseFloat(document.getElementById("jamb").value);

  // Get value from post utme inputs
  const utme = parseFloat(document.getElementById("utme").value);

  // Get value from result inputs
  const result = document.getElementById("result");

  //input validation
  if (isNaN(jamb) || isNaN(utme)) {
    result.style.color = "red";
    result.textContent =
      "Please enter valid numeric values for JAMB and POST UTME scores";
    return;
  }
  if (jamb < 0 || jamb > 400 || utme < 0 || utme > 100) {
    result.style.color = "red";
    result.innerText =
      "Please enter valid scores: JAMB (0-400), POST UTME (0-100)";
    return;
  }
  // Calculate the aggregate score
  const jambcontribution = (jamb / 400) * 60;
  // JAMB contributes 60% to the aggregate
  const utmecontribution = (utme / 100) * 40;
  // POST UTME contributes 40% to the aggregate
  const aggregate = jambcontribution + utmecontribution;

  if (aggregate >= 70) {
    rating = "Excellent";
    ratingColor = "#2e7d32"; // Green
  } else if (aggregate >= 50) {
    rating = "Very Good";
    ratingColor = "#1565c0"; // Blue
  } else if (aggregate >= 40) {
    rating = "Good";
    ratingColor = "#ed6c02"; // Orange
  } else {
    rating = "To Low";
    ratingColor = "red"; // Red
  }

  // Display the result
  result.style.color = "blue";
  result.innerHTML =
    `Your Aggregate Score is: <span style="color: blue; font-weight: bold;">${aggregate.toFixed(2)}%</span><br>` +
    `Performance: <strong style="color: ${ratingColor};">${rating}</strong>`;
});
