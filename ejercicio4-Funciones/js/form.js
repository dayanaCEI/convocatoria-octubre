/*
crear una funcion donde le indique la operacion a realizar
y luego pintar ese resultado en el parrafo
*/
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const parrafo = document.querySelector(".result")
function calculo(numero1, numero2, operacion) {
    let result;
    if (operacion === "+") {
        result = numero1 + numero2;
    } else if (operacion === "-") {
        result = numero1 - numero2;
    } else if (operacion === "*") {
        result = numero1 * numero2;
    } else if (operacion === "/") {
        if (numero2 !== 0) {
            result = numero1 / numero2;
        } else {
            result = "No existe la division por 0";
        }
    }
    parrafo.innerHTML = result;
}
calculo(parseInt(num1.value), parseInt(num2.value), "/");