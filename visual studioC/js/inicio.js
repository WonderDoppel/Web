/*variables*/
var formulario = document.getElementById("form");
var mensaje = document.getElementById("mensaje");
/*submit buttom*/
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    console.log("estoy entrando?");
    var aux = 0;
    aux += validarRut(formulario);
    aux += validarTelefono(formulario);
    if (aux == 0) {
        Mensaje(mensaje, formulario);
    }
});
/*validaciones*/
function validarRut(formulario) {
    var rut = formulario[2].value;
    var numero = parseInt(rut.slice(0, 8));
    var digito = rut.slice(9).toUpperCase();
    var flag = false;
    /*si el rut es inferior a 10 digitos*/
    if (rut.length < 10) {
        alert("Rut incorrecto. deber tener el formato 12345678-9");
        return -1;
    }
    /*comprobar si los digitos del numero son solo numeros*/
    if (isNaN(numero) == false) {
        flag = true;
    }
    /*comprobar el digito verificador*/
    if (isNaN(parseInt(digito)) == false) {
        flag = true;
    }
    else if (digito != "K") {
        flag = false;
    }
    if (flag == false) {
        alert("Error, ingrese el RUT nuevamente.");
        return -1;
    }
    if (flag) {
        return 0;
    }
}
function validarTelefono(formulario) {
    var telefono = formulario[5].value;
    console.log(telefono);
    if (telefono.length < 9) {
        alert("el numero debe tener 9 digitos");
        return -1;
    }
    if (telefono.length > 9) {
        alert("el numero debe tener 9 digitos");
        return -1;
    }
    else {
        return 0;
    }
}
/*funcion del mensaje */
function Mensaje(mensaje, formulario) {
    mensaje.innerHTML = "hemos recibido sus datos, pronto nos estaremos comunicando con usted";
    mensaje.style.display = "block";
    formulario.style.display = "none";
}
function limpiarDatos() {
    formulario[1].value = "";
    formulario[2].value = "";
    formulario[3].value = "";
    formulario[4].value = "";
    formulario[5].value = "";
    document.documentElement.scrollTop = 0;
}
