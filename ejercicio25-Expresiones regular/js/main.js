const btn = document.querySelector(".btn");
const age = document.querySelector(".age");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const matri = document.querySelector(".matri");
const msj = document.querySelector(".result");
const dni = "12345678X";

btn.addEventListener("click", () => {
    msj.innerHTML = ""
    const exprRegName = /^[a-zA-Zíó]{2,8}$/;
    if (!exprRegName.test(name.value)) {
        msj.innerHTML = "el nombre solo puede tener letras";
    }

    const exprRegAge = /^[0-9]{1,2}$/
    if (!exprRegAge.test(age.value)) {
        msj.innerHTML += "<br>edad incorrecta";
    }

    //8759AZX
    const exprRegMatri = /^[0-9]{4}[a-z]{3}$/;
    if (!exprRegMatri.test(matri.value)) {
        msj.innerHTML += "<br>matricula incorrecta";
    }

    const exprRegDni = /^[0-9]{8}[X|Y|Z]$/
    if (!exprRegDni.test(dni)) {
        msj.innerHTMLs += "<br> DNI incorrecto";
    }

    //const exprRegEmail = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/
    const exprRegEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})$/
    if (!exprRegEmail.test(email.value)) {
        msj.innerHTMLs += "<br> email incorrecto";

    }



})