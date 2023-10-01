function crearEstrellas(puntuacion) {
  const estrellasContainer = document.createElement('div');
  estrellasContainer.className = 'estrellas';

  for (let i = 1; i <= 5; i++) {
    const estrella = document.createElement('i');
    if (i <= puntuacion) {
      estrella.className = 'fas fa-star'; // Ícono de estrella llena
    } else {
      estrella.className = 'far fa-star'; // Ícono de estrella vacía
    }
    estrellasContainer.appendChild(estrella);
  }

  return estrellasContainer;
}

document.addEventListener("DOMContentLoaded", () => {
  const detalleProducto = document.getElementById('producto');
  const productoSeleccionado = JSON.parse(localStorage.getItem('productoSeleccionado'));

  if (productoSeleccionado) {
    const imagen = document.createElement('img');
    imagen.src = productoSeleccionado.image;
    imagen.alt = productoSeleccionado.nombre;
    imagen.className = "imagen1";

    const nombre = document.createElement('h2');
    nombre.textContent = productoSeleccionado.nombre;
    nombre.className = "nombre";

    const descripcion = document.createElement('p');
    descripcion.textContent = productoSeleccionado.descripcion;
    descripcion.className = "descripcion";

    const precio = document.createElement('p');
    precio.textContent = `Precio: $${productoSeleccionado.precio}`;
    precio.className = "precios";

    const puntuacion = productoSeleccionado.puntuacion; // Valor numérico de puntuación
    const estrellas = crearEstrellas(puntuacion); // Convierte la puntuación en estrellas

    detalleProducto.appendChild(imagen);
    detalleProducto.appendChild(nombre);
    detalleProducto.appendChild(descripcion);
    detalleProducto.appendChild(precio);
    detalleProducto.appendChild(estrellas); // Agrega las estrellas
  } else {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = 'Producto no encontrado';
    detalleProducto.appendChild(mensajeError);
  }

  localStorage.removeItem('productoSeleccionado');
});
