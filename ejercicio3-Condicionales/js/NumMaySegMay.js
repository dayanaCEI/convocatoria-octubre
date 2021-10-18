/*
    Dado 3 numeros, indicar cual es el numero mayor y cual es el segundo mayor
    A = 20, B = 50, C = 30
    el mayor es B y el segundo mayor es C
*/
const num1 = 160;
const num2 = 250;
const num3 = 180;
let mayor;
let segMayor;

if (num3 > num1 && num3 > num2) {
    mayor = num3;
    if (num1 > num2) {
        segMayor = num1;
    } else {
        segMayor = num2;
    }
} else if (num1 > num2 && num1 > num3) {
    mayor = num1;
    if (num2 > num3) {
        segMayor = num2;
    } else {
        segMayor = num3;
    }
} else {
    mayor = num2;
    if (num1 > num3) {
        segMayor = num1;
    } else {
        segMayor = num3
    }
}


console.log(`El numero mayor es:  ${mayor}`);
console.log(`El segundo mayor es: ${segMayor} `);
