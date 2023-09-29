fetch("productos.json").then((response) => response.json()).then((json) => {
    // console.log(json);
    json.forEach((producto) => console.log(producto?.nombre));

    localStorage.setItem("productos", JSON.stringify(json));
  });

  const jsonProductos = JSON.parse(localStorage.getItem("productos"));

  const tiendaProductos = document.querySelector("#listado");

  
  const info = [];

  jsonProductos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <h3>${product.nombre}</h3>
        <img class="imagen" src="${product.image}">
    `;

    tiendaProductos.append(content);

    let detalle = document.createElement("button");
    detalle.innerText = "+ Info";
    content.append(detalle);
    detalle.className = "+ Info";

    detalle.addEventListener("click", () => {
      info.push({
        id: product.id,
        nombre: product.nombre,
        imagen: product.image,
        descripcion: product.descripcion,
          precio: product.precio,
      });

      localStorage.setItem("producto", JSON.stringify(info));

      console.log(info)

      location.href ="detalles.html";

    });

  });

