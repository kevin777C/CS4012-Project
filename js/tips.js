// ===== PACKING CHECKLIST =====

let items = document.getElementsByClassName("item");
let count = document.getElementById("count");
let packedMessage = document.getElementById("packedMessage");
let resetButton = document.getElementById("resetButton");

// This function counts how many boxes are ticked
function updateCount() {
  let packed = 0;

  for (let i = 0; i < items.length; i++) {
    if (items[i].checked == true) {
      packed = packed + 1;
    }
  }

  count.textContent = packed + " out of " + items.length + " items packed";

  // Show a message when everything is packed
  if (packed == items.length) {
    packedMessage.textContent = "Well done! Everything is packed. Enjoy your trip!";
  } else {
    packedMessage.textContent = "";
  }
}

// Run updateCount every time a box is ticked or unticked
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("change", updateCount);
}

// Reset button unticks all the boxes
resetButton.addEventListener("click", function() {
  for (let i = 0; i < items.length; i++) {
    items[i].checked = false;
  }
  updateCount();
});


// ===== CONTACT FORM =====

let form = document.getElementById("contactForm");
let formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // stops the page from refreshing

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Check each field
  if (name == "") {
    formMessage.textContent = "Please enter your name.";
    formMessage.style.color = "red";
  } else if (email.includes("@") == false || email.includes(".") == false) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
  } else if (message == "") {
    formMessage.textContent = "Please write a message.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Thank you " + name + ", your message has been sent!";
    formMessage.style.color = "green";
    form.reset(); // clears the form
  }
});
