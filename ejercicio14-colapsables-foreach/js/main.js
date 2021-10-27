/*
acordeon
1. X Vamos a tener tres botones en el html, con tres div de contenido
2.- Al hacer click encima de alguna de los botones
se ocultara la seccion asociada al boton
3.- Permitir que solo este abierta una de las secciones del acordeon
*/

const botones = document.querySelectorAll(".boton");
const contenidos = document.querySelectorAll(".contenido")
console.log(contenidos)
botones.forEach((btn, i) => {
    btn.addEventListener("click", function (ev) {
        ev.preventDefault();
        if (contenidos[i].classList.contains("oculto")) {
            for (let x = 0; x < contenidos.length; x++) {
                contenidos[x].classList.add("oculto");
            }
            contenidos[i].classList.remove("oculto");
        }
        else {
            contenidos[i].classList.add("oculto")
        }
    });
})