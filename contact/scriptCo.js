//Hamburger Menu JS
const hamburger = document.getElementsByClassName("icon")[0];
const links = document.getElementById("links");

// hamburger.addEventListener("click", () => {
//   links.style.display = "block";
// });

hamburger.addEventListener("click", () => {
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
});
