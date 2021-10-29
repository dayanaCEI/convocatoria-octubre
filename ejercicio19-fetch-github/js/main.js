/*
    Mostrar los repositorios de una organizacion de github
    - la organizacion la buscaremos a partir de un input
    - Cuando se pulse el boton acceder a la informacion de la organizacion
    -luego recoger los datos de los repositorios de esa organizacion
    - pintar los repositorios de la organizacion
*/

const btn = document.querySelector(".btn");
const input = document.querySelector("#org");
const ul = document.querySelector(".repos");

function pintarlistado(repos) {
    const li = document.createElement("li");
    ul.appendChild(li)

    const a = document.createElement("a");
    li.appendChild(a);

    const textA = document.createTextNode(rep.name);
    a.appendChild(textA)

    a.setAttribute("href", rep.html_url);
    a.setAttribute("target", "_blank");
}
function handleBtn(event) {
    event.preventDefault();
    const inputValue = input.value;
    fetch(`https://api.github.com/orgs/${inputValue}`)
        .then((response) => response.json())
        .then((info) => {
            const repos = info.repos_url;
            return fetch(repos);
        })
        .then((respuestaRepos) => respuestaRepos.json())
        .then((repositorios) => {
            console.log(repositorios);
            pintarlistado(repositorios);
        })
}
btn.addEventListener("click", handleBtn)