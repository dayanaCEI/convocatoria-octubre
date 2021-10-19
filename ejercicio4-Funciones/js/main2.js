msjGlobal = "he modificado la var global"
console.log("estoy en main 2" + msjGlobal);

//funciones del tipo flechas
const multiplicacion = (num1, num2) => {
    const resultado = num1 * num2;
    console.log("la multiplicacion es " + resultado);
}
multiplicacion(10, 2);

//funciones  anonimas

const resta = function (num1, num2) {
    const resultado = num1 - num2;
    console.log("resta " + resultado);
}
resta(50, 30);