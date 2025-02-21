const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const footerIcons = document.querySelectorAll(".icon ion-icon"); // Select all footer icons
const footerText = document.querySelectorAll("footer h4 span"); // Select all animated footer text

// Store the original background color
const originalBackgroundColor = "rgb(160, 148, 140)";

toggle.addEventListener("click", function () {
  // Toggle between the moon and sun icons
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    // Light mode
    body.style.background = originalBackgroundColor; // Use the original background color
    body.style.color = "black"; // Set text color to black
    body.style.transition = "2s"; // Smooth transition

    // Change footer icons and animation text to black
    footerIcons.forEach((icon) => (icon.style.color = "black"));
    footerText.forEach((span) => (span.style.color = "black"));
  } else {
    // Dark mode
    body.style.background = "black"; // Set background to black
    body.style.color = "white"; // Set text color to white
    body.style.transition = "2s"; // Smooth transition

    // Change footer icons and animation text to white
    footerIcons.forEach((icon) => (icon.style.color = "white"));
    footerText.forEach((span) => (span.style.color = "white"));
  }
});
