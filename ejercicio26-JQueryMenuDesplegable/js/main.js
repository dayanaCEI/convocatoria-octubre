$(document).ready(function () {
    $(".abrir").on("click", function (ev) {
        ev.preventDefault();
        $(".navegacion").removeClass("oculto");
        $(".abrir").addClass("oculto");
    });
});