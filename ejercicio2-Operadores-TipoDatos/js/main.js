console.log('ready :D');
//tipos 
//number 
const precioProducto = 150;
const precio = 100.90;
//string
const name = "dayana";
//booleanos true-false
const hijos = true;
//undefined
const apellido = "";
const title = document.querySelector("title");
console.log(title.value);

//operadores aritmeticos + - / * %
const numA = 50;
const numB = "20";
const numC = 3;
const resultado = numA - numB;
console.log(resultado);
console.log("el resultado es " + resultado);
// resto de una division
const resto = numA % numC;
console.log(resto);

//operadores comparación
// > < >= <= === !==
const compNum = 20 > 100;
const compNum1 = "20" != 20;
const compCadenas = "Pedro".toLowerCase() === "PEDRO".toLowerCase();
const compCadenas1 = "a" > "c";
console.log(compNum)
console.log(compNum1)
console.log(compCadenas)
console.log(compCadenas1)

//concatenacion de cadenas
const nombre = "Sonia";
const apellido2 = "Ruiz";

console.log("Bienvenida " + nombre + " " + apellido2 + " madrid " + "28005");
console.log(`Bienvenida ${nombre} ${apellido2}`);






