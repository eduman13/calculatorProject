window.onload = function() {
    pantalla = document.getElementById("numeroPantalla");
}

numeroInicial = "0";
numeroIniciado = false;
operacion = "";

function numero(numero) {
    if (numeroInicial == "0" || !numeroIniciado) {
        pantalla.innerHTML = numero;
        numeroInicial = numero;
        operacion += numero;
    } else {
        pantalla.innerHTML += numero;
        numeroInicial += numero;
        operacion += numero;
    }
    numeroIniciado = true;
}

function clean() {
    pantalla.innerHTML = "0";
    numeroInicial = "0";
    numeroIniciado = false;
    operacion = "";
}

function construirOperacion(signo) {
    operacion += signo
    numeroInicial = "0";
}

function resultado() {
    resultadoOperacion = eval(operacion);
    console.log(operacion, resultadoOperacion);
    pantalla.innerHTML = resultadoOperacion;
    operacion = resultadoOperacion;
    numeroInicial = "0";
}
