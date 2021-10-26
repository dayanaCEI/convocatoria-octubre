/*
    listado de tres peliculas, id, nombre, lenguaje,año
    pintar la lista de pelis en el HTML <ul>
    al hacer click en alguna peli, añadir esa peli a un array nuevo que
    contiene mis pelis favoritas
    pero si ya existe entonces lo debemos sacar
    pintar en la consola el array de favoritos

1. X Crear el array de objetos con las pelis
2. X Crear la estructura inicial del HTML (ul)
3. X Funcion -> Pintar en el HTML  la lista de pelis
4. X Crear el array vacio para los favoritos
5. X Funcion -> para escuchar el click sobre los LI
6. X Verificar si se encuentra en el array de FAV
7.- Si ya esta en el array  debo sacarlo -> splice()
8. X Sino está en el array debo añadirla -> push()
9. X pintar los fav en la consola
*/
const peliculas = [
    { id: 1, nombre: "la piel que habito", lenguaje: "español", year: 2015 },
    { id: 2, nombre: "venom", lenguaje: "ingles", year: 2021 },
    { id: 3, nombre: "dunnes", lenguaje: "ingles", year: 2020 },
];
const listaPelis = document.querySelector(".pelis");
const listaFav = document.querySelector(".favoritas");
const favoritas = [];

function pintarPelis() {
    let html = "";
    for (const peli of peliculas) {
        html += `<li id="${peli.id}" class="liPeli">`;
        html += `Nombre: ${peli.nombre}, Lenguaje: ${peli.lenguaje}`;
        html += `</li>`;
    }
    listaPelis.innerHTML = html;
}
function pintarFavoritas() {
    let html = "";
    for (const fav of favoritas) {
        html += `<li id="${fav.id}" class="liPeli">`;
        html += `Nombre: ${fav.nombre}, Lenguaje: ${fav.lenguaje}`;
        html += `</li>`;
    }
    listaFav.innerHTML = html;
}
function handlerClick(event) {
    const id = parseInt(event.target.id);
    const objectPeli = peliculas.find((peli) => peli.id === id)
    //busco si la peli clicada se encuentra dentro de mis favoritos
    const findPeli = favoritas.find((fav) => fav.id === id);
    // verifico si el elemento esta dentro del array
    if (findPeli === undefined) {
        favoritas.push(objectPeli);
    } else {
        const posicion = favoritas.findIndex((fav) => fav.id === id);
        favoritas.splice(posicion, 1);
    }
    pintarFavoritas();
}
function escucharClick() {
    const listElements = document.querySelectorAll(".liPeli");
    for (const li of listElements) {
        li.addEventListener("click", handlerClick);
    }
}
pintarPelis();
escucharClick();