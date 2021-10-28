//promesas ejs6

fetch("./js/data.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })


const section = document.querySelector(".imgs");
function pintarPerritos(listado) {
    listado.forEach((img, i) => {
        const cadaImagen = document.createElement("img");
        section.appendChild(cadaImagen);
        cadaImagen.setAttribute("src", img)
    })
}
fetch("https://dog.ceo/api/breeds/image/random/5")
    .then((res) => res.json())
    .then((data) => {
        const listaImg = data.message;
        pintarPerritos(listaImg);
    })

