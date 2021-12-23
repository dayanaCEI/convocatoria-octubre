console.log("ready");
/* jQuery*/
/*$(".parrafo").on("click", () => {
    $(".parrafo").css("background-color", "green")
})*/
/* javascript */
const par = document.querySelector(".parrafo");
function handlerClick() {
    par.classList.toggle("background");
}
par.addEventListener("click", handlerClick)
