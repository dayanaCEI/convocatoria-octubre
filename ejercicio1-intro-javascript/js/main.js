console.log("ready primera web :)");
//DOCUMENT OBJECT MODEL
//variable --> contenedor 
//tituloEl.style.color = "pink";

const tituloEl = document.querySelector(".js-titulo");
tituloEl.classList.add("title");
/* bloque de comentarios */
console.log(tituloEl);

const parrafoEl = document.querySelector("#js-parrafo");
console.log(parrafoEl);

let nombre = "";
console.log(nombre);

nombre = "sonia";
console.log(nombre);

// tomar informacion de los formularios
const inputName = document.querySelector("#nombre");
inputName.classList.add("title");
console.log(inputName.value);

const inputApellido = document.querySelector("#apellido");
console.log(inputApellido.value)
