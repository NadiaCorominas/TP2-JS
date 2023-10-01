
// let product;

//  const productos = async () => {

//   //localStorage.clear();
  

// product = localStorage.getItem("product");

// if (product == null) {

// const response = await fetch ("productos.json");
// product = await response.json();

// localStorage.setItem("product", JSON.stringify(product));

// }
// if (typeof product == "string") {
//   product = JSON.parse(product);
// };

// };

// productos();

//   const jsonProductos = JSON.parse(localStorage.getItem("productos"));

// const tiendaProductos = document.querySelector("#listado");

// const info = [];

// if (jsonProductos !== null) {
//   jsonProductos.forEach((product) => {
//     let content = document.createElement("div");
//     content.innerHTML = `
//       <h3>${product.nombre}</h3>
//       <img class="imagen" src="${product.image}">
//     `;

//     tiendaProductos.append(content);

//     let detalle = document.createElement("button");
//     detalle.innerText = "+ Info";
//     content.append(detalle);
//     detalle.className = "info";

//     detalle.addEventListener("click", () => {
//       info.push({
//         id: product.id,
//         nombre: product.nombre,
//         imagen: product.image,
//         descripcion: product.descripcion,
//         precio: product.precio,
//         puntuacion: product.puntuacion,
//       });

//       localStorage.setItem("producto", JSON.stringify(info));

//       window.location = "detalles.html";
//     });
//   });
// }

document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch('productos.json');
  const productos = await response.json();
  const listadoContainer = document.getElementById('listado');

  productos.forEach(producto => {
    const productoDiv = document.createElement('div');
    productoDiv.classList.add('producto');

    const imagen = document.createElement('img');
    imagen.src = producto.image;
    imagen.alt = producto.nombre;
    imagen.className = "imagen";

    const nombre = document.createElement('h3');
    nombre.textContent = producto.nombre;

    const boton = document.createElement('button');
    boton.textContent = '+ Info';
    boton.className = "info";

        boton.addEventListener('click', () => {
      localStorage.setItem('productoSeleccionado', JSON.stringify(producto));
      window.location.href = 'detalles.html';
    });

    productoDiv.appendChild(imagen);
    productoDiv.appendChild(nombre);
    productoDiv.appendChild(boton);

    listadoContainer.appendChild(productoDiv);
  });
});