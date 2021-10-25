/*
    crear un objeto que sea una cesta de platanos
    Num maximo de platanos  =  10
    Num minimo de platanos  =  1
    Num actual de platanos = 5
    Num inicial de platanos  = 1

    metodos
    1.- Añadir un platano a la cesta
    2.- Sacar un platano de la cesta
    3.- Reestablecer a su valor inicial
*/
const platanos = {
    numInicial: 1,
    numActual: 5,
    numMax: 10,
    numMin: 1,
    agregar: function () {
        if (this.numActual < this.numMax) {
            this.numActual++;
        }
    },
    sacar: function () {
        if (this.numActual > this.numMin) {
            this.numActual--;
        }
    },
    reset: function () {
        this.numActual = this.numInicial;
    }
}
const btns = document.querySelectorAll(".btn");
const p = document.querySelector("#result");

function handleBtns(ev) {
    ev.preventDefault();
    const id = ev.target.id;
    if (id === "agregar") {
        platanos.agregar();
        p.innerHTML = platanos.numActual;
    }
}
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", handleBtns)
}

