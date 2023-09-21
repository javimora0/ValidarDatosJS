const correoIntroducido = document.getElementById("correo");
const pwdIntroducida = document.getElementById("pwd");
var persona = {
    nombre : "",
    pApellido: "",
    sApellido: "",
    dni_p : "",
    fecha_p : ""
};


function validarDatos() {
    let errores = "";
    var todoCorrecto = true;
    if (correoIntroducido.value.length <1) {
        errores += "El campo correo es obligatorio\n";
        todoCorrecto = false;
    }
    if (pwdIntroducida.value.length < 1) {
        errores += "El campo contraseña es obligatorio\n";
        todoCorrecto = false;
    }

    if (pwdIntroducida.value.length < 8 && pwdIntroducida.value.length > 1) {
        errores += "El campo contraseña debe tener minimo 8 caracteres\n";
        todoCorrecto = false;
    }

    if (!validarEmail(correoIntroducido.value)) {
        errores += "El campo correo debe contener @\n";
        todoCorrecto = false;
    }
    if (!todoCorrecto) {
        alert(errores);
    } else{
        window.location.href = "datosUsuario.html";
    }
}

function validarEmail(mail) {
    let tieneArroba = false;
    for (let i = 0; i < mail.length; i++) {
        if (mail[i] === "@") {
            tieneArroba = true;
            break;
        }
    }
    return tieneArroba;
}


const nombreI = document.getElementById("nombre");
const papeI = document.getElementById("papellido");
const sapeI = docuemnt.getElementById("sapellido");
const dniI = document.getElementById("dni");
const fechaI = document.getElementById("fecha");


function limpiarDatos() {
    nombreI.value = "";
    papeI.value = "";
    sapeI.value = "";
    dniI.value = "";
    fechaI.value = "";
}

function validarDatos2() {
    let error = "";
    var hayErrores = false;
    if (nombreI.value.length < 3 || nombreI.value.length > 30) {
        error += "El nombre debe contener solo entre 3 y 30 caracteres \n";
        hayErrores = true;
    }
    if (papeI.value.length < 2 || papeI.value.length > 30) {
        error += "El primer apellido debe contener solo entre 2 y 30 caracteres \n";
        hayErrores = true;
    }
    if (sapeI.value.length < 2 || sapeI.value.length > 30) {
        error += "El primer apellido debe contener solo entre 2 y 30 caracteres \n";
        hayErrores = true;
    }
    if (!fechaI.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
        error += "El formato de la fecha de nacimiento debe ser dd/mm/AAAA.\n";
        hayErrores = true;
    }
    if (!validarDNI(dni) || dniI.length !== 8) {
        error += "El DNI no es válido.\n";
        hayErrores = true;
    }
    
    if (!hayErrores) {
        alert(error);
    }else {
        alert("Datos guardados");
        persona.nombre = nombreI.value;
        persona.pape = papeI.value;
        persona.sape = sapeI.value;
        persona.dni = dniI.value;
        persona.fecha = fechaI.value;
    }

}

function validarDNI(dni) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    if (/^\d{8}$/.test(dni)) {
        const letraValida = letras.charAt(parseInt(dni, 10) % 23);
        const letraUsuario = dni.charAt(8).toUpperCase();
        return letraValida === letraUsuario;
    }
    return false;
}


