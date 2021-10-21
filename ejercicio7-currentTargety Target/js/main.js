const lista = document.querySelector(".lista");

function handleClick(event) {
    console.log(event.currentTarget);
    console.log(event.target);
}
lista.addEventListener("click", handleClick)