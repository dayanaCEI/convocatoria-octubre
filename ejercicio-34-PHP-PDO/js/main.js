$(document).ready(function () {
    $("#btn").on("click", (event) => {
        event.preventDefault();
        const data = {
            name: $("#name").val(),
            email: $("#email").val(),
            pass: $("#pass").val(),
            proceso: 0
        }
        $.post("./php/controller.php", data, function (response) {
            console.log(response);
        });
    })

    $("#btn-login").on("click", function (ev) {
        ev.preventDefault();
        const login = {
            email: $("#email").val(),
            pass: $("#pass").val(),
            proceso: 1,
            cookies: $("#cookies").prop("checked")
        }
        $.ajax({
            url: './php/controller.php',
            method: 'POST',
            data: login,
            success: function (resp) {
                if (resp == "session") {
                    window.location.replace("./servicios.php");
                } else {
                    $("#msj").html(resp);
                }

            }
        })
    })
})