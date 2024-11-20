// crearProducto.js
import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try {
        await conectaAPI.crearProducto(nombre, precio, imagen);
        window.location.reload();  
        
        alert(e.message);
    }
});
