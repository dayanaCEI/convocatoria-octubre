//for of

const ul = document.querySelector(".lista");
const nombresEs = ["pedro", "beatriz", "sonia", "maria", "alberto", "ayoub"];
/// FOR OF
for (const nombre of nombresEs) {
    ul.innerHTML += `<li>${nombre}</li>`;
}

// FOR CLASICO
for (let i = 0; i < nombresEs.length; i++) {
    ul.innerHTML += `<li>${nombresEs[i]}</li>`;
}

/*********************************/

const btns = document.querySelectorAll(".btn");
const handleClick = (event) => {
    const body = document.querySelector("body");
    //body.style.background = event.target.id;
    body.classList.remove("white", "red", "green")
    body.classList.add(event.target.id);
}
for (const btnEle of btns) {
    btnEle.addEventListener("click", handleClick)
}


