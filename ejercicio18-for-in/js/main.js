const person = {
    nombre: "ana",
    apellido: "garcia",
    edad: 36
}
console.log(person.nombre, person.apellido, person.edad);
for (const propiedad in person) {
    console.log(person[propiedad])
}

const select = document.querySelector(".razas");
const img = document.querySelector(".img");
let raza;

fetch("https://dog.ceo/api/breeds/list/all")
    .then((respuesta) => respuesta.json())
    .then((info) => {
        razas = info.message;
        pintarRazas();
    });

function pintarRazas() {
    for (const prop in razas) {
        // select.innerHTML += `<option value="${prop}">${prop} </option>`;
        const option = document.createElement("option");
        option.setAttribute("value", prop);
        const texto = document.createTextNode(prop);
        option.appendChild(texto);
        select.appendChild(option);
    }
}
function handleSelect() {
    const raza = select.value;
    fetch(`https://dog.ceo/api/breed/${raza}/images/random`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.message);
            img.src = data.message;
        })

}
select.addEventListener("change", handleSelect)