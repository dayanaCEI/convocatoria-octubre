const p = document.querySelector("#estudiantes");
const estudiantes = [
    {
        nombre: "guillermo",
        edad: 23,
        profesion: "diseñador"
    },
    {
        nombre: "alicia",
        edad: 25,
        profesion: "ingeniera quimica"
    },
    {
        nombre: "josefina",
        edad: 25,
        profesion: "periodista"
    },
    {
        nombre: "ivan",
        edad: 18,
        profesion: "diseñador"
    },
    {
        nombre: "monica",
        edad: 35,
        profesion: "diseñador"
    },
];

function countEstudent(students) {
    return students.length;
}
p.innerHTML = "Cantidad de estudiantes " + countEstudent(estudiantes);

function averageAge() {
    let acum = 0;
    for (const estud of estudiantes) {
        acum = acum + estud.edad;
    }
    const promedio = acum / estudiantes.length;
    return promedio;
}
p.innerHTML += "<br>Promedio de edades " + averageAge();

function theYoungest() {
    let joven = estudiantes[0].edad;
    let nombreJoven = estudiantes[0].nombre;
    for (const est of estudiantes) {
        if (est.edad < joven) {
            joven = est.edad;
            nombreJoven = est.nombre;
        }
    }
    return `El mas joven es ${nombreJoven} y tiene ${joven}`;
}
p.innerHTML += "<br> " + theYoungest();

function countDesigners() {
    let contador = 0;
    for (const estudiante of estudiantes) {
        if (estudiante.profesion === "diseñador") {
            //contador = contador +1
            contador++;
        }
    }
    p.innerHTML += `<br> Hay ${contador} estudiantes diseñadores`;
}

countDesigners();