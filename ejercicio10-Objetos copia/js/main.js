/*
    listado de tareas
        nombre, descripcion, estado (si esta hecha o no)
*/
const listadoTareas = [
    {
        id: 0,
        nombre: "hacer la compra",
        descripcion: " ir al carrefour",
        estado: false
    },
    {
        id: 1,
        nombre: "plantas",
        descripcion: "regar las plantas",
        estado: false
    },
    {
        id: 2,
        nombre: "trastero",
        descripcion: "limpiar trastero",
        estado: false
    }
];
const lista = document.querySelector(".lista");

for (const tarea of listadoTareas) {
    lista.innerHTML += `<input type="checkbox" class="tarea" id= "${tarea.id}">`;
    lista.innerHTML += `<label> ${tarea.nombre}</label> <br>`;
}

const checkboxes = document.querySelectorAll(".tarea");

function handleCheckbox(ev) {
    const id = ev.target.id;
    listadoTareas[id].estado = ev.target.checked;
    console.log(listadoTareas);
}
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", handleCheckbox);
}
