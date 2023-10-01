const destacado = JSON.parse(localStorage.getItem("producto"));

const detalleProducto = document.querySelector("#producto");

function crearEstrellas(puntuacion) {
  const estrellasContainer = document.createElement('div');
  estrellasContainer.className = 'estrellas';

  for (let i = 1; i <= 5; i++) {
    const estrella = document.createElement('i');
    if (i <= puntuacion) {
      estrella.className = 'fas fa-star'; 
    } else {
      estrella.className = 'far fa-star';
    }
    estrellasContainer.appendChild(estrella);
  }

  return estrellasContainer;
}
 
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

    `;
    const puntuacion = product.puntuacion; // Valor numérico de puntuación
    const estrellas = crearEstrellas(puntuacion);
  
    content.appendChild(estrellas);
    detalleProducto.append(content);
});


  
localStorage.removeItem(info);


