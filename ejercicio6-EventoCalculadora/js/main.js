//click, change, submit, onload, mouseover

const btn = document.querySelector(".btn");
const body = document.querySelector("body");

function changeBackground() {
    console.log("fondo");
    body.classList.toggle("background");

    /* if (body.classList.contains("background")) {
        body.classList.remove("background");
    } else {
        body.classList.add("background");
    }*/
}

function handleBtn() {
    const p = document.querySelector(".msj");
    p.innerHTML = "me ha clicado";
    changeBackground();
}
// handlebtn --> funcion callback
btn.addEventListener("click", handleBtn);