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
      price.textContent = product.price;
      div.appendChild(price);

      products.appendChild(div);

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
    });
  });

// fetch("products.json")
//   .then((response) => response.json())
//   .then((data) => {
//     const products = document.getElementById("products");

//     data.forEach((product) => {
//       const div = document.createElement("div");
//       div.classList.add("product");

//       const name = document.createElement("h2");
//       name.textContent = product.name;
//       div.appendChild(name);

//       const image = document.createElement("img");
//       image.src = product.image;
//       image.alt = product.name;
//       div.appendChild(image);

//       const description = document.createElement("p");
//       description.textContent = product.description;
//       div.appendChild(description);

//       const price = document.createElement("p");
//       price.textContent = product.price;
//       div.appendChild(price);

//       products.appendChild(div);
//     });
//   });

// const productImage = document.querySelector("img");
