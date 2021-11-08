$(document).ready(function () {
    //$(".result").html("este es el resultado");
    const result = document.querySelector(".result");
    result.innerHTML = "este es mi parrafo";

    $(".title").on("click", function () {
        //hide(),show(), toggle();
        //fadeOut(), fadeIn(), fadeToggle(1000);
        //slideUp(), slideDown(), slideToggle()
        $(".par").slideToggle(3000);
    })
})