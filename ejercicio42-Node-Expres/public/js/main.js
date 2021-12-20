const inputBtn = document.querySelector(".js-btn");
const inputName = document.querySelector(".js-name");

function manejadoraClick(ev) {
    ev.preventDefault();
    const bodyparams = { userName: inputName.value }
    //realizo una peticion a mi servidor de node
    fetch("http://localhost:3500/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyparams)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}
inputBtn.addEventListener("click", manejadoraClick)