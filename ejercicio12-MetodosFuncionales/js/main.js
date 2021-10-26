const dias = ["lunes", "martes", "miercoles", "jueves", "viernes"];
console.log(dias);

// añadir elemento al array
dias.push("sabado", "domingo");
console.log(dias);

const arr = [];
function numberArray() {
    for (let i = 1; i <= 100; i++) {
        arr.push(i);
    }
    //invertir el orden de un array
    arr.reverse();
    return arr;
}
console.log(numberArray());

// elimina un elemento del array 
const edad = [20, 25, 33, 29, 89, 63, 24, 32];
const extraidos = edad.splice(4, 2);
console.log(edad);
console.log(extraidos);

//extrae una porcion del array sin modificar al original
const precio = [20, 50, 30, 90, 100];
const extract = precio.slice(0, 3);
console.log(precio);
console.log(extract);

//busca un elemento dentro de un array
const meses = ["enero", "marzo", "abril", "mayo"];
const indiceMes = meses.indexOf("febrero");
console.log(indiceMes);

//findIndex
const personas = [
    { nombre: "lucia", apellido: "garcias" },
    { nombre: "ivan", apellido: "rodriguez" },
    { nombre: "ramon", apellido: "romero" },
    { nombre: "ramon", apellido: "romero" }
]
const indicePersona = personas.findIndex((per) => per.nombre === "ramon");
console.log(indicePersona);

let indicePer;
for (let i = 0; i < personas.length; i++) {
    if (personas[i].nombre === "ramon") {
        indicePer = i;
    }
}
console.log(indicePer);

//find 
const mascotas = [
    { nombre: "lola", raza: "cocker" },
    { nombre: "zeus", raza: "dalmata" },
    { nombre: "pepe", raza: "pastor aleman" },
    { nombre: "toby", raza: "salchicha" }
];
const findPet = mascotas.find((masc) => masc.raza === "dalmata");
console.log(findPet);

const estudiantes = [
    { nombre: "pedro", profesion: "diseñador" },
    { nombre: "maria", profesion: "diseñador" },
    { nombre: "sonia", profesion: "ingeniera" }
];
const filtros = estudiantes.filter((estu) => estu.profesion === "diseñador");
console.log(estudiantes);
console.log(filtros);