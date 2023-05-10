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

//Carousel Slideshow

// First grab access to html elements we will be using
const previous = document.querySelector(".prev");
const next = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");
const slides = document.querySelectorAll(".slide");

// Set an index for slides
let slideIndex = 1;
showSlides(slideIndex);

// Create onclick function to slide through photos
previous.addEventListener("click", () => {
  nextSlide(-1);
});

// For both previous and next slides
next.addEventListener("click", () => {
  nextSlide(1);
});

// For each dot, set it equal to the index
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide(index + 1);
  });
});

// Create function to move through the index
function nextSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Use if else statement to move through to the next slide
function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  } else {
    slideIndex = n;
  }

  // Set display to none, when this slide is passed
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  // Set dot to remove the active class so image will not be displayed
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  // Set display to active, when this slide is up
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}
