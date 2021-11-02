/*
1. X peticion al servidor fetch-then
2. X recoger los datos del array y limpiarlos(quedarnos solo con lo que nos interesa) nombre, usuario, foto, ciudad
3. X pintar los datos en el HTML(innerHTML o createElement)
4. X crear el form en el HTML,
5. X escuchamos un evento sobre el input para saber cuando el usuario escribe.
6. X Filtrar el array, filter()
7. X repintar solo los usuarios filtrados
8. X escuchar evento click sobre cada usuario( selecciono todos LI con queryselectAll, recorro el array para escucchar evento sobre cada LI)
9. X poner la propiedad isFriend: true.
10.x repintar los usuarios en pantalla
11.- hacer un IF para evaluar si la propiedad  isFriend===true,
    para añadir o no la clase del css
*/
const users = [];
const ul = document.querySelector(".usuarios");
const btn = document.querySelector(".btn");
const input = document.querySelector("#nombre");

fetch("https://randomuser.me/api/?results=10")
    .then(resp => resp.json())
    .then(info => {
        for (const element of info.results) {
            users.push({
                id: element.login.uuid,
                nombre: element.name.first + " " + element.name.last,
                usuario: element.login.username,
                foto: element.picture.large,
                ciudad: element.location.city,
                isFriend: false
            });
        }
        pintarUsuarios(users);
        escucharUsuario();
    })

function pintarUsuarios(listado) {
    ul.innerHTML = "";
    listado.forEach((user, i) => {
        const li = document.createElement("li");
        if (user.isFriend === true) {
            li.setAttribute("class", "js-user friend");
        } else {
            li.setAttribute("class", "js-user");
        }
        li.setAttribute("id", i)
        ul.appendChild(li);

        const img = document.createElement("img");
        img.src = user.foto;
        li.appendChild(img);

        const h2 = document.createElement("h2");
        const textoH2 = document.createTextNode(user.nombre);
        h2.appendChild(textoH2);
        li.appendChild(h2);

        const p = document.createElement("p");
        const textoP = document.createTextNode(user.ciudad + " " + user.usuario);
        p.appendChild(textoP);
        li.appendChild(p);
    });
}

function handleLi(ev) {
    const id = ev.currentTarget.id;
    users[id].isFriend = true;
    pintarUsuarios(users);
    escucharUsuario();
}
function escucharUsuario() {
    const liUsers = document.querySelectorAll(".js-user");
    for (const user of liUsers) {
        user.addEventListener("click", handleLi);
    }
}
function handleClick(ev) {
    ev.preventDefault();
    const inputValue = input.value;
    console.log(inputValue)
    const userFilter = users.filter((user) => {
        return user.nombre.toLowerCase().includes(inputValue.toLowerCase())
    })
    pintarUsuarios(userFilter);
}
btn.addEventListener("click", handleClick)

