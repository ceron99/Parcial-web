

var a;
var b;
var operacion;


function iniciar() {

    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var factorial = document.getElementById('factorial');
    var invertir = document.getElementById('invertir');
    var raiz = document.getElementById('raiz');
    var exponente = document.getElementById('exponente');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    var imprimircodigo = document.getElementById('imprimircodigo')

    

    imprimircodigo.onclick = function(e){
        resetear()
        resultado.textContent = resultado.textContent +"1620080406";
    }

    uno.onclick = function (e) {
        resultado.textContent = resultado.textContent + "1";
    }


    dos.onclick = function (e) {
        resultado.textContent = resultado.textContent + "2";
    }

    tres.onclick = function (e) {
        resultado.textContent = resultado.textContent + "3";
    }

    cuatro.onclick = function (e) {
        resultado.textContent = resultado.textContent + "4";
    }

    cinco.onclick = function (e) {
        resultado.textContent = resultado.textContent + "5";
    }

    seis.onclick = function (e) {
        resultado.textContent = resultado.textContent + "6";
    }

    siete.onclick = function (e) {
        resultado.textContent = resultado.textContent + "7";
    }

    ocho.onclick = function (e) {
        resultado.textContent = resultado.textContent + "8";
    }

    nueve.onclick = function (e) {
        resultado.textContent = resultado.textContent + "9";
    }

    cero.onclick = function (e) {
        resultado.textContent = resultado.textContent + "0";

    }

    function limpiar() {
        resultado.textContent = " ";
    }

    reset.onclick = function (e) {
        resetear();
    }

    factorial.onclick = function (e) {
        a = resultado.textContent;
        operacion = "X!";
        limpiar();

    }

    invertir.onclick = function (e) {
        a = resultado.textContent;
        operacion = "inv";
        limpiar();

    }

    raiz.onclick = function (e) {
        a = resultado.textContent;
        operacion = "raiz";
        limpiar();

    }

    exponente.onclick = function (e) {
        a = resultado.textContent;
        operacion = "exp";
        limpiar();

    }

    igual.onclick = function (e) {
        b = resultado.textContent;
        resolver();

    }

   

    function resetear(params) {
        resultado.textContent = "";
        a = 0;
        b = 0;
        operacion = "";

    }

    
}