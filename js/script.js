fetch("productos.json").then((response) => response.json()).then((json) => {
    // console.log(json);
    json.forEach((producto) => console.log(producto?.nombre));

    localStorage.setItem("productos", JSON.stringify(json));
  });

  const jsonProductos = JSON.parse(localStorage.getItem("productos"));

  const listaDeProductos = document.querySelector("#listado");


  
  const productoElegido = [];

  jsonProductos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <h3>${product.nombre}</h3>
        <img class="imagen" src="${product.image}">
    `;

    listaDeProductos.append(content);

    let ver = document.createElement("button");
    ver.innerText = "+ Info";
    content.append(ver);
    ver.className = "+ Info";

    ver.addEventListener("click", () => {
      productoElegido.push({
        id: product.id,
        nombre: product.nombre,
        imagen: product.image,
        descripcion: product.descripcion,
          precio: product.precio,
      });

      localStorage.setItem("producto", JSON.stringify(productoElegido));

      console.log(productoElegido)

      location.href ="detalles.html";

    });

  });

