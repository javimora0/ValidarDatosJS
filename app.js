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
const sapeI = document.getElementById("sapellido");
const dniI = document.getElementById("dni");
const fechaI = document.getElementById("fecha");


function limpiarDatos() {
    nombreI.value = "";
    papeI.value = "";
    sapeI.value = "";
    dniI.value = "";
    fechaI.value = "";
}

function validarDtos2() {
    var error = "";
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
    if (!validarFecha(fechaI.value)) {
        error += "El formato de la fecha de nacimiento debe ser dd/mm/AAAA.\n";
        hayErrores = true;
    }

    if (validarDNI(dniI.value)) {
        error += "El DNI no es válido.\n";
        hayErrores = true;
    }
    
    if (hayErrores) {
        alert(error);
    }else {
        alert("Datos guardados");
        persona.nombre = nombreI.value;
        persona.pape = papeI.value;
        persona.sape = sapeI.value;
        persona.dni_p = dniI.value;
        persona.fecha_p = fechaI.value;
    }

}

function validarFecha(fechaIntroducida) {
    var aux = false;
    var primerSlash = fechaIntroducida[5];
    var segundoSlash = fechaIntroducida[2];
    if (primerSlash == "/" && segundoSlash == "/") {
        aux = true;
    }
    return aux;
}

//funcion sacada de stackoverflow
function validarDNI(dni) {
    var numero, let, letra;
    var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;

    dni = dni.toUpperCase();

    if(expresion_regular_dni.test(dni) === true){
        numero = dni.substr(0,dni.length-1);
        numero = numero.replace('X', 0);
        numero = numero.replace('Y', 1);
        numero = numero.replace('Z', 2);
        let = dni.substr(dni.length-1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero+1);
        if (letra != let) {
            return false;
        }else{
            return true;
        }
    }else{
        return false;
    }
}


