export async function buscarUniversidades(pais) {

    try {

        const respuesta = await fetch(
            `http://universities.hipolabs.com/search?country=${pais}`
        );


        const datos = await respuesta.json();


        return datos;


    } catch (error) {


        console.log("Error al consultar API:", error);

        return [];


    }

}