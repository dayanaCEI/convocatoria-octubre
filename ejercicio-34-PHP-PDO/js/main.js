$(document).ready(function () {
    $("#btn").on("click", (event) => {
        event.preventDefault();
        const data = {
            name: $("#name").val(),
            email: $("#email").val(),
            pass: $("#pass").val()
        }
        $.post("./php/controller.php", data, function (response) {
            console.log(response);
        });
    })
})