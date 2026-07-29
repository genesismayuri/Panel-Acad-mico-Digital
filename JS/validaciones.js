export function validarFormulario(datos){


    if(datos.nombre.trim() === ""){

        return "El nombre es obligatorio";

    }


    if(datos.correo.trim() === ""){

        return "El correo es obligatorio";

    }


    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(!correoValido.test(datos.correo)){

        return "El correo no tiene formato válido";

    }


    if(datos.edad === "" || isNaN(datos.edad)){

        return "La edad debe ser un número válido";

    }


    if(datos.tipo === ""){

        return "Debe seleccionar un tipo de solicitud";

    }


    if(datos.descripcion.trim().length < 10){

        return "La descripción debe tener mínimo 10 caracteres";

    }


    return true;


}