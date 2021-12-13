const roles = document.querySelector(".jsRol");
const btn = document.querySelector(".btn");
const msjRol = document.querySelector(".msjRol");

window.onload = function () {
    fetch('./php/controller.php')
        .then((response) => response.json())
        .then((data) => {
            for (const item of data) {
                const option = document.createElement("option");
                roles.appendChild(option);
                const textRol = document.createTextNode(item.rol);
                option.appendChild(textRol);
                option.setAttribute("value", item.id);
            }
        })
}
function handlerClick(ev) {
    ev.preventDefault();
    const rolValue = roles.value;
    if (rolValue === "0") {
        msjRol.innerHTML = "* debe seleccionar un rol";
    }
    else {
        const usuario = new FormData(document.querySelector('.form'));

        fetch('./php/controller.php', {
            method: 'POST',
            body: usuario
        })
            .then(response => response)
            .then(data => {
                console.log(data);
                document.querySelector(".msj").innerHTML = "registrado";

                //enviar un mensaje al usuario que diga se ha registradoi con exito
            })
    }
}

btn.addEventListener("click", handlerClick)