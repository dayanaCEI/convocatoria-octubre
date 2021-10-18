// IF - ELSE
const edad = 15;
// operadores comparacion > < >= <= === !==
// if compuesto
if (edad >= 18) {
    console.log("eres mayor de edad");
}
else {
    console.log("aun NO eres mayor de edad");
}

//if anidados --> un IF dentro un ELSE
// personas (menos 15)  --> NIÑOS
// personas (entre 15 y 20) --> adolescentes
// personas (entre 20 y 60) --> adultos
// personas (mas de 60) --> mayores
// Operadores Lógicos( || -  &&)
const age = 90;
if (age < 15) {
    console.log("niño");
}
else if (age >= 15 && age <= 20) {
    console.log("adolescente");
}
else if (age > 20 && age <= 60) {
    console.log("adulto");
}
else {
    console.log("mayores");
}

// truthy
const nameUser = "dayana";
// falsy
const apellido = parseInt(nameUser);

if (nameUser) {
    console.log(nameUser)
}
if (!apellido) {
    console.log(apellido);
}