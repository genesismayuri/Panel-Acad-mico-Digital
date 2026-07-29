import { buscarUniversidades } from "./api.js";

form.addEventListener("submit", registrarSolicitud);


async function consultarUniversidades(){

    const pais = document.getElementById("pais").value;

    const universidades = await buscarUniversidades(pais);

    console.log(universidades);

}


botonBuscar.addEventListener("click", consultarUniversidades);