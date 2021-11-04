const select = document.querySelector(".tipo");
const section = document.querySelector(".peliculas");

function pintarPelis(peliculas) {
    for (const peli of peliculas.results) {
        const div = document.createElement("div");
        section.appendChild(div);

        const img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/w185${peli.poster_path}`;
        div.appendChild(img);

        const h3 = document.createElement("h3");
        div.appendChild(h3);

        const title = document.createTextNode(peli.title)
        h3.appendChild(title)
        console.log(peli)
    }
}
select.addEventListener("change", function () {
    const selectValue = select.value;
    const xhr = new XMLHttpRequest();

    xhr.open("GET", `https://api.themoviedb.org/3/movie/${selectValue}?api_key=6723abcb736dade2ce411013316b9e8f&language=es-ES`, true);
    xhr.onload = function () {
        const peliculas = JSON.parse(this.responseText);
        section.innerHTML = "";
        //section.removeChild("div");
        pintarPelis(peliculas)
    }
    xhr.send();
})