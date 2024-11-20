// conectaAPI.js

async function listaProductos() {
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    });

    const productos = await conexion.json();
    return productos;
}

async function crearProducto(nombre, precio, imagen) {
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagen
        })
    });

    if (!conexion.ok) {
        throw new Error("No fue posible enviar el producto");
    }

    const productoCreado = await conexion.json();
    return productoCreado;
}

async function eliminarProducto(id) {
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    });

    if (!conexion.ok) {
        throw new Error("No se pudo eliminar el producto");
    }

    return true;
}

export const conectaAPI = {
    listaProductos,
    crearProducto,
    eliminarProducto
};
