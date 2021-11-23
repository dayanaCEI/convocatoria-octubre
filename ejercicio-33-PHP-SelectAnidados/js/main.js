$(document).ready(function () {
    $("#pais").on("change", function () {
        let idPais = $(this).val();
        $.post("listarProvincias.php", { idP: idPais }, function (info) {
            $("#provincia").html(info);
        });
    })
})