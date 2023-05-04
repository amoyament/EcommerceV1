fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    const products = document.getElementById("products");

    data.forEach((product) => {
      const div = document.createElement("div");
      div.classList.add("product");

      const image = document.createElement("img");
      image.src = product.image;
      image.alt = product.name;
      div.appendChild(image);

      const name = document.createElement("h2");
      name.textContent = product.name;
      div.appendChild(name);

      const description = document.createElement("p");
      description.textContent = product.description;
      div.appendChild(description);

      products.appendChild(div);
    });
  });
