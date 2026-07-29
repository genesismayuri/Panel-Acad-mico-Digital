import { buscarUniversidades } from "./api.js";
import { guardarSolicitud, obtenerSolicitudes } from "./storage.js";


const form = document.getElementById("formularioSolicitud");

const botonBuscar = document.getElementById("botonBuscar");



async function consultarUniversidades(){

    const pais = document.getElementById("pais").value;


    const universidades = await buscarUniversidades(pais);


    const resultado = document.getElementById("resultadoAPI");


    resultado.innerHTML = "";


    universidades.forEach(universidad => {

        resultado.innerHTML += `

        <div class="tarjeta">

            <h3>${universidad.name}</h3>

            <p>
            País: ${universidad.country}
            </p>

            <p>
            Dominio:
            ${universidad.domains[0] || "No disponible"}
            </p>

        </div>

        `;

    });

}



function registrarSolicitud(e){

    e.preventDefault();


    const solicitud = {

        nombre: document.getElementById("nombre").value,

        correo: document.getElementById("correo").value,

        edad: document.getElementById("edad").value,

        tipo: document.getElementById("tipo").value,

        descripcion: document.getElementById("descripcion").value

    };


    guardarSolicitud(solicitud);


    document.getElementById("mensaje").textContent =
    "Solicitud guardada correctamente ";


    mostrarSolicitudes();

}

function mostrarSolicitudes(){

    const contenedor = document.getElementById(
        "solicitudesGuardadas"
    );


    const solicitudes = obtenerSolicitudes();


    contenedor.innerHTML = "";


    solicitudes.forEach(solicitud => {


        contenedor.innerHTML += `

        <div class="tarjeta">

            <h3>${solicitud.nombre}</h3>

            <p>${solicitud.tipo}</p>

            <p>${solicitud.descripcion}</p>

        </div>

        `;


    });

}

botonBuscar.addEventListener(
"click",
consultarUniversidades
);


form.addEventListener(
"submit",
registrarSolicitud
);


document.addEventListener(
"DOMContentLoaded",
mostrarSolicitudes
);