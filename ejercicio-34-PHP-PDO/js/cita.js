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
})