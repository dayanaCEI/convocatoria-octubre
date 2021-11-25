$(document).ready(function () {
    $("#pais").on("change", function () {
        let idPais = $(this).val();
        $.post("listarProvincias.php", { idP: idPais }, function (info) {
            $("#provincia").html(info);
        });
    });

    $("#provincia").on("change", function () {
        let idPro = $(this).val();
        $.post("listarMunicipio.php", { idp: idPro }, function (data) {
            $("#municipio").html(data);
        });
    });

    $("#municipio").on("change", function () {
        let idMun = $(this).val();
        $.post("listarCalles.php", { idMunicipio: idMun }, function (response) {
            $("#calle").html(response)
        })
    });

    $(".btn").on("click", function (ev) {
        ev.preventDefault();
        let checkboxSelect = new Array();
        $("input:checkbox:checked").each(function () {
            checkboxSelect.push($(this).val());
        });
        $.post("crearEnfermedades.php", { checkes: checkboxSelect }, function (respuesta) {
            console.log(respuesta);
        });
    })
})