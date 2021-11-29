$(document).ready(function () {

    listarUsuario();
    listarServicio();
    function listarServicio() {
        $.ajax({
            url: "./php/consultasCita.php",
            type: "GET",
            success: function (resp) {
                let servicios = JSON.parse(resp);
                let codeHtml = '<option> Seleccione </option>';
                servicios.forEach(element => {
                    codeHtml += `<option value="${element.id}"> 
                                    ${element.nombre}
                                </option>`;
                });
                $("#serv").html(codeHtml);
            }
        })
    }
    function listarUsuario() {
        $.ajax({
            url: "./php/consultasUsuario.php",
            type: "GET",
            success: function (response) {
                let usuarios = JSON.parse(response);
                let codeHtml = '<option> Seleccione </option>';
                usuarios.forEach(elem => {
                    codeHtml += `<option value="${elem.id}">
                                    ${elem.nombre}
                                </option>`;
                });
                $("#user").html(codeHtml);
            }
        })
    }

    $("#btn-cita").on("click", function (ev) {
        ev.preventDefault();
        const dataCita = {
            usuario: $("#user").val(),
            servicio: $("#serv").val(),
            fecha: $("#fecha").val(),
            hora: $("#hora").val()
        }
        $.ajax({
            url: "./php/controllerCita.php",
            data: dataCita,
            method: "POST",
            success: function (respuesta) {
                $("#resp").html(respuesta);
            }
        });
    })

})