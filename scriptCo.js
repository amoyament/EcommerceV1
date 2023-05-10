// Hamburger Menu JS
// First grab access to the HTML elements
// Class name needs to be an index of 0, because it is looking for elementS
const hamburger = document.getElementsByClassName("icon")[0];
const links = document.getElementById("links");

// Create function to change display from none to block on click
// This way we can dropdown our menu
hamburger.addEventListener("click", () => {
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
});
