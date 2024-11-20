// mostrarProducto.js
import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");

function construirCard(id, nombre, precio, imagen) {
    const producto = document.createElement("li");
    producto.classList.add("producto__item");

    producto.innerHTML = `
        <img src="${imagen}" alt="${nombre}">
        <h3>${nombre}</h3>
        <p>$ ${precio}</p>
        <button class="eliminar-producto" data-id="${id}">
            <i class="fas fa-trash-alt"></i>
        </button>
    `;

    // Evento para eliminar el producto
    const btnEliminar = producto.querySelector(".eliminar-producto");
    btnEliminar.addEventListener("click", async () => {
        try {
            await conectaAPI.eliminarProducto(id);
            producto.remove();  
            
        } catch (e) {
            alert("No se pudo eliminar el producto");
        }
    });

    return producto;
}

async function mostrarProductos() {
    try {
        const productos = await conectaAPI.listaProductos();
        productos.forEach(producto => {
            lista.appendChild(construirCard(producto.id, producto.nombre, producto.precio, producto.imagen));
        });
    } catch (e) {
        lista.innerHTML = `<h2>No fue posible cargar la lista de productos</h2>`;
    }
}

mostrarProductos();
