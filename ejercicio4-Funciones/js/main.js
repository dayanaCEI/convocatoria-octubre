//debugger;
var msjGlobal = "mensaje global";

function pintarNombre(nombre, apellido) {
    console.log("hola " + nombre + " " + apellido + msjGlobal);
}
pintarNombre("joaquin", "lozana");

//calculo de el iva

function calcularIva(precio) {
    const iva = precio * 0.21;
    const total = precio + iva;
    console.log("pecio " + precio + " iva " + iva + " total " + total);
}
calcularIva(1500);
calcularIva(80);

function suma(num1, num2) {
    const resultado = num1 + num2;
    return resultado;
}
///bloque de codigo
console.log(suma(15, 20));

//scope

if (suma(80, 20) === 100) {
    const msj = "has ganado";
    console.log(msj + msjGlobal);
}
//console.log(msj)