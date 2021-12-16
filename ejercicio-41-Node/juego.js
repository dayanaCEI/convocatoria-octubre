// piedra, papel, tijera
const { random } = require("./numeros.js");

const randomNumber = random(9);
const valorUser = "papel";
let valorPC = "";

function getValuePC() {
    if (randomNumber <= 2) {
        valorPC = "piedra";
    }
    else if (randomNumber <= 6) {
        valorPC = "papel";
    } else {
        valorPC = "tijera";
    }
    console.log(valorPC, valorUser);
}
getValuePC();

function playGame() {
    let msj = "";
    if (valorPC === valorUser) {
        msj = "¡Empate!";
    } else if (valorUser === "papel" && valorPC === "piedra") {
        msj = "¡Gana el usuario";
    } else if (valorUser === "papel" && valorPC === "tijera") {
        msj = "¡Gana el PC";
    } else if (valorUser === "piedra" && valorPC === "papel") {
        msj = "¡Gana el PC";
    } else if (valorUser === "piedra" && valorPC === "tijera") {
        msj = "¡Gana el usuario";
    } else if (valorUser === "tijera") {
        if (valorPC === "papel") {
            msj = "¡Gana el usuario";
        } else {
            msj = "¡Gana el PC";
        }
    }
    return msj;
}
console.log(playGame());