localStorage.setItem("name", "miguel");
console.log(localStorage.getItem("name"))
localStorage.removeItem("name")
const persons = [
    { name: "raquel", age: 25 },
    { name: "ramon", age: 21 }
]
localStorage.setItem("persons", JSON.stringify(persons));
console.log(JSON.parse(localStorage.getItem("persons")));

const name = document.querySelector(".name");
const pass = document.querySelector(".password");
const save = document.querySelector(".save");
const btn = document.querySelector(".btn");

function handleBtn(eve) {
    eve.preventDefault();
    if (save.checked) {
        const user = {
            nombre: name.value,
            pass: pass.value
        };
        localStorage.setItem("user", JSON.stringify(user))
    }
}
btn.addEventListener("click", handleBtn)

function getLocalStorage() {
    const user = JSON.parse(localStorage.getItem("user"));
    //user !== null
    if (user) {
        console.log(user)
        name.value = user.nombre;
        pass.value = user.pass;
    }

}
getLocalStorage();