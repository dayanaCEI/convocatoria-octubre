/*  1.- Cojemos el valor de la del input
    2.- Hacer la formula para convertir los años a hora
    3.- pintar el resultado en el HTML */

let edad = document.querySelector("#edad").value;
edad = parseInt(edad);
const result = edad * 365 * 24;
console.log(result);
const parrafo = document.querySelector(".msj");
parrafo.innerHTML = `Has vivido ${result} horas`;

// operadores ternarios -->
const msj = result >= 500000 ? "Bravo eres un campeon" : "Aun te falta";
//parrafo.innerHTML += msj;
parrafo.innerHTML = parrafo.innerHTML + msj;