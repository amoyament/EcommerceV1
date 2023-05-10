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

//Style section drop down
// First grab HTML elements
const stylesSubsection = document.getElementById("styles-subsection");
const styleTitle = document.getElementsByClassName("style-main-title")[0];

//Same as hanburger menu, On click event to flip between displays
styleTitle.addEventListener("click", () => {
  if (stylesSubsection.style.display === "none") {
    stylesSubsection.style.display = "block";
  } else {
    stylesSubsection.style.display = "none";
  }
});

// Fetch calls the json file
fetch("products.json")
  // Fetch returns promise object as response, (response.json)
  .then((response) => response.json())
  // Then we use the data
  .then((data) => {
    // Calls on the products div to place product items there
    const products = document.getElementById("products");

    // For each object of data "product", we will create the elements we want to display for that product
    data.forEach((product) => {
      const div = document.createElement("div");
      // .classList.add so we can affect the div in css
      div.classList.add("product");
      products.appendChild(div);

      const name = document.createElement("h2");
      name.textContent = product.name;
      // adds name of json product as child of h2
      div.appendChild(name);

      const image = document.createElement("img");
      // sets img
      image.src = product.image;
      // sets img alt
      image.alt = product.name;
      div.appendChild(image);

      // Create overaly for description
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

      const button = document.createElement("a");
      button.classList.add("order-button");
      button.setAttribute("href", "../cart/indexCa.html");
      button.textContent = "Add to Order";
      div.appendChild(button);

      // Add mouseover event listener to the image to flip between displays of overlay
      image.addEventListener("mouseover", () => {
        overlay.style.opacity = "1";
        image.style.filter = "brightness(0.3)";
      });

      // Add mouseout event listener to the image
      image.addEventListener("mouseout", () => {
        overlay.style.opacity = "0";
        image.style.filter = "brightness(1)";
      });

      // Added click so users on phone and tablet can see descriptions
      image.addEventListener("click", () => {
        overlay.style.opacity = "1";
        image.style.filter = "brightness(0.3)";
      });
    });
  });
