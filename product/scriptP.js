// //Hamburger Menu JS
// const hamburger = document.getElementsByClassName("icon")[0];
// const links = document.getElementById("links");

// // hamburger.addEventListener("click", () => {
// //   links.style.display = "block";
// // });

// hamburger.addEventListener("click", () => {
//   if (links.style.display === "block") {
//     links.style.display = "none";
//   } else {
//     links.style.display = "block";
//   }
// });

//Style section drop down
const stylesSubsection = document.getElementById("styles-subsection");
const styleTitle = document.getElementsByClassName("style-main-title")[0];

styleTitle.addEventListener("click", () => {
  if (stylesSubsection.style.display === "none") {
    stylesSubsection.style.display = "block";
  } else {
    stylesSubsection.style.display = "none";
  }
});

fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    const products = document.getElementById("products");

    data.forEach((product) => {
      const div = document.createElement("div");
      div.classList.add("product");

      const name = document.createElement("h2");
      name.textContent = product.name;
      div.appendChild(name);

      const image = document.createElement("img");
      image.src = product.image;
      image.alt = product.name;
      div.appendChild(image);

      const overlay = document.createElement("div");
      overlay.classList.add("overlay");
      div.appendChild(overlay);

      const description = document.createElement("div");
      description.classList.add("description");
      description.textContent = product.description;
      overlay.appendChild(description);

      const price = document.createElement("p");
      price.classList.add("price");
      price.textContent = product.price;
      div.appendChild(price);

      products.appendChild(div);

      const button = document.createElement("a");
      button.classList.add("order-button");
      button.setAttribute("href", "../cart/indexCa.html");
      button.textContent = "Add to Order";

      div.appendChild(button);

      // Add mouseover event listener to the image
      image.addEventListener("mouseover", () => {
        overlay.style.opacity = "1";
        image.style.filter = "brightness(0.3)";
      });

      // Add mouseout event listener to the image
      image.addEventListener("mouseout", () => {
        overlay.style.opacity = "0";
        image.style.filter = "brightness(1)";
      });

      image.addEventListener("click", () => {
        overlay.style.opacity = "1";
        image.style.filter = "brightness(0.3)";
      });
    });
  });
