const destacado = JSON.parse(localStorage.getItem("producto"));

const detalleProducto = document.querySelector("#producto");
 
destacado.forEach((product) => {
    let content = document.createElement("div");
    content.className = "eleccion";
    content.innerHTML = `
    <div>
    <h3 class="nombre">${product.nombre}</h3> </div>
<div class="imagenes">
    <img class="imagen1" src="${product.imagen}">
    <p class="descripcion">${product.descripcion}</p>
</div>
<div>
    <p class="precios">$ ${product.precio}</p>
</div>
<div>
    <p class="puntuacion">$ ${product.puntuacion}</p>
</div>
<div>

    `;

    detalleProducto.append(content);
});

localStorage.removeItem(info);

