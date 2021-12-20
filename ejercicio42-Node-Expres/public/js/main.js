console.log("ready")
const btn = document.querySelector(".js-btn")

function handlerClick(ev) {
    ev.preventDefault();
    const inputValue = document.querySelector(".input-js").value;

    const formData = { name: inputValue }
    fetch("http://localhost:3500/person", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })

}
btn.addEventListener("click", handlerClick)