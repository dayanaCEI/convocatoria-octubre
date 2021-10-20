/*
    dos input para los numeros y
    4 botones (+, -, *, /)
    pintar el resultado correspondiente al hacer click
    en alguno de los botones
    boton reset, devuelve los input y el resultado en
    vacio
*/
const result = document.querySelector(".result")
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const suma = document.querySelector("#btn1");
const resta = document.querySelector("#btn2");
const multi = document.querySelector("#btn3");
const div = document.querySelector("#btn4");
const reset = document.querySelector("#reset");

function handleReset() {
    num1.value = "";
    num2.value = "";
    result.innerHTML = "";
}
reset.addEventListener("click", handleReset);

function handleSuma(event) {
    event.preventDefault();
    result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
}
suma.addEventListener("click", handleSuma);

const handleResta = function (e) {
    e.preventDefault();
    result.innerHTML = parseInt(num1.value) - parseInt(num2.value);
}
resta.addEventListener("click", handleResta)

const handleMulti = function (e) {
    e.preventDefault();
    result.innerHTML = parseInt(num1.value) * parseInt(num2.value);
}
multi.addEventListener("click", handleMulti)

const handleDiv = function (e) {
    e.preventDefault();
    result.innerHTML = parseInt(num1.value) / parseInt(num2.value);
}
div.addEventListener("click", handleDiv);

