/*
Conversor de edad de perros a humanos:
 - El primer año de un perro equivale a 15 años de humano
 - El segundo año de un perro equivale a nueve años de humano
 - A partir del tercero, cada año de perro equivale a 5 años de humano.
*/
const edadPerro = 15;
let edadHumano = 0;

if (edadPerro === 1) {
    edadHumano = 15;
}
else if (edadPerro === 2) {
    edadHumano = 15 + 9;
}
else {
    edadHumano = 24 + ((edadPerro - 2) * 5);
}

console.log("la edad en humano es: " + edadHumano)