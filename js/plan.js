// plan.js - Travel Budget Calculator

// This function works out the total and the cost per person.
// It runs every time the visitor types in the form.
function calculate() {
  // Get the numbers from the boxes (an empty box counts as 0)
  var accommodation = Number(document.getElementById("accommodation").value);
  var transport = Number(document.getElementById("transport-cost").value);
  var food = Number(document.getElementById("food").value);
  var activities = Number(document.getElementById("activities").value);
  var travellers = Number(document.getElementById("travellers").value);

  // There must be at least 1 traveller (we can't divide by 0)
  if (travellers < 1) {
    travellers = 1;
  }

  // Add up all the costs
  var total = accommodation + transport + food + activities;

  // Cost per person = total divided by number of travellers
  var perPerson = total / travellers;

  // Show the results on the page (toFixed(2) gives 2 decimal places)
  document.getElementById("total-cost").textContent = "€" + total.toFixed(2);
  document.getElementById("per-person").textContent = "€" + perPerson.toFixed(2);

  // Show a message: a default one if nothing is entered, otherwise the result
  if (total === 0) {
    document.getElementById("summary-message").textContent = "Enter your costs to see your estimate.";
  } else {
    document.getElementById("summary-message").textContent =
      "Your trip will cost about €" + total.toFixed(2) +
      " in total, or €" + perPerson.toFixed(2) + " per traveller.";
  }
}

// This function runs when the Reset button is clicked
function resetForm() {
  // Clears every box in the form
  document.getElementById("plan-form").reset();

  // Update the summary back to €0.00
  calculate();
}