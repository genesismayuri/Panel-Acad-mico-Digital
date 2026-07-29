export function validarFormulario(datos){

    if(datos.nombre.trim()==="")
        return "Ingrese su nombre.";

    const email=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!email.test(datos.correo))
        return "Correo inválido.";

    if(isNaN(datos.edad)||datos.edad<16)
        return "Edad incorrecta.";

    if(datos.tipo==="")
        return "Seleccione un tipo de solicitud.";

    if(datos.descripcion.length<10)
        return "La descripción debe tener al menos 10 caracteres.";

    return "";
}