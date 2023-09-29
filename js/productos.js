const destacado = JSON.parse(localStorage.getItem("producto"));

const mostrarProducto = document.querySelector("#producto");
 
destacado.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card2";
    content.innerHTML = `
        <div>
            <h3 class="name">${product.nombre}</h3> </div>
        <div class="image-descripcion">
            <img class="image" src="${product.image}">
            <p class="descriptionLarge">${product.descripcion}</p>
        </div>
        <div>
            <p class="price-product">$ ${product.precio}</p>
        </div>
     
    `;

    mostrarProducto.append(content);
});

localStorage.removeItem(productoElegido);
