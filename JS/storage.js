export function guardarSolicitud(solicitud){

    let solicitudes = JSON.parse(
        localStorage.getItem("solicitudes")
    ) || [];


    solicitudes.push(solicitud);


    localStorage.setItem(
        "solicitudes",
        JSON.stringify(solicitudes)
    );

}



export function obtenerSolicitudes(){

    return JSON.parse(
        localStorage.getItem("solicitudes")
    ) || [];

}