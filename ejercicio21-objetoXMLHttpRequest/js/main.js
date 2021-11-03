//fetch-then
//XMLHttpRequest

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const section = document.querySelector(".empleados")
btn1.addEventListener("click", function (eve) {
    /*fetch("./empleados.json")
        .then((resp) => resp.json())
        .then((info) => { console.log(info) })*/

    const xhr = new XMLHttpRequest();
    //POST, GET
    xhr.open("GET", "./empleados.json", true);
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(JSON.parse(this.responseText));
            const empleados = JSON.parse(this.responseText);
            empleados.forEach(emple => {
                section.innerHTML += `<p>${emple.nombre}</p>`
            });
        }
    }
    xhr.send();
})