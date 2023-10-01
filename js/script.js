
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