const input = document.querySelector("input");
console.log(input.value);
console.log(input.type);

const coche = {
    marca: "mazda",
    modelo: "x5",
    year: 2021,
    matricula: "ccc555",
    color: "negro",
    descapotable: false,
}
console.log(coche.year);
const ul = document.querySelector(".lista")
const listaCoche = [
    {
        marca: "mazda",
        modelo: "x5",
        year: 2021
    },
    {
        marca: "bmw",
        modelo: "bm22",
        year: 2019
    },
    {
        marca: "for",
        modelo: "fr23",
        year: 2018
    }
];
for (const coche of listaCoche) {
    ul.innerHTML += `<li>${coche.marca}  ${coche.year}</li>`;
}
