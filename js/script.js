
let product;

 const productos = async () => {

  //localStorage.clear();
  

product = localStorage.getItem("product");

if (product == null) {

const response = await fetch ("productos.json");
product = await response.json();

localStorage.setItem("product", JSON.stringify(product));

}
if (typeof product == "string") {
  product = JSON.parse(product);
};

};

productos().then(() => {
  product.forEach(jsonProductos);
});


  const jsonProductos = JSON.parse(localStorage.getItem("productos"));

  const tiendaProductos = document.querySelector("#listado");

  const info = [];

  jsonProductos.forEach((product) => {
    let content = document.createElement("div");
       content.innerHTML = `
        <h3>${product.nombre}</h3>
        <img class="imagen" src="${product.image}">
    `;

    tiendaProductos.append(content);

    let detalle = document.createElement("button");
    detalle.innerText = "+ Info";
    content.append(detalle);
    detalle.className = "info";

    detalle.addEventListener("click", () => {
      info.push({
        id: product.id,
        nombre: product.nombre,
        imagen: product.image,
        descripcion: product.descripcion,
          precio: product.precio,
          puntuacion: product.puntuacion,
      });

      localStorage.setItem("producto", JSON.stringify(info));

      window.location ="detalles.html";

    });

  });

  
