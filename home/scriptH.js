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

//   var x = document.getElementsById("links");
//   if (x.style.display === "inline") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "inline";
//   }
// }

//Slide show JS
let slideIndex = 1;
showSlides(slideIndex);

document.querySelector(".prev").addEventListener("click", () => {
  nextSlide(-1);
});

document.querySelector(".next").addEventListener("click", () => {
  nextSlide(1);
});

const dots = document.querySelectorAll(".dot");
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide(index + 1);
  });
});

function nextSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  } else {
    slideIndex = n;
  }

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}
