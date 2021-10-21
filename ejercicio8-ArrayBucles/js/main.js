const frutas = ["coco", "platano", "mango", "piña"];
console.log(frutas[2]);

frutas[2] = "pera";
console.log(frutas);

const index = 1;
const edades = [20, 25, 30];

console.log(edades[index]);
console.log(edades.length);
console.log(frutas.length);

const edadesEstudi = edades;
edades[0] = 30;
console.log(edadesEstudi);

console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])

//bucles for() // for-of // while // do-while
// i++ --> i=i+1
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

const precios = [150, 88, 66, 99, 100];
let acum = 0;
let prom = 0;

for (let i = 0; i < precios.length; i++) {
    acum = acum + precios[i];
}
prom = acum / precios.length;

// luna de cazador se produce cada tres años, pintar los años
// de las proximas 15 lunas partiendo del año 2017

let year = 2017;
let luna = 0;
for (let i = 0; i < 45; i = i + 3) {
    luna = year + i;
    console.log(luna);
}
/******************/
let year1 = 2017;
for (let i = 1; i <= 15; i++) {
    year1 = year1 + 3;
    console.log(year1);
}




