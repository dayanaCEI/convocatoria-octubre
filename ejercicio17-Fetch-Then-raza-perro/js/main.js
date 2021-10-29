
const razas = [
    { esp: "dalmata", eng: "dalmatian" },
    { esp: "pitbull", eng: "pitbull" },
    { esp: "shiba", eng: "shiba" },
];
const select = document.querySelector(".raza");
const img = document.querySelector(".img");

function pintarSelect() {
    razas.forEach((element, i) => {
        const option = document.createElement("option");
        const text = document.createTextNode(element.esp);
        select.appendChild(option);
        option.appendChild(text);
        option.setAttribute("value", element.eng);
    })
}
pintarSelect();
function handleSelect() {
    const raza = select.value;
    fetch(`https://dog.ceo/api/breed/${raza}/images/random`)
        .then((resp) => resp.json())
        .then((data) => {
            img.src = data.message;
        })

}
select.addEventListener("change", handleSelect)