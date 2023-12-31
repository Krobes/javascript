//Añadimos las clases a body
document.body.classList.add("p-3", "m-0", "border-0", "bd-example");

//Añadimos div como hijo de body
const div = document.createElement("div");
div.classList.add("list-group");
document.body.appendChild(div);

//Creamos la etiqueta a y añadimos el primero
const a = document.createElement("a");
a.href = "#";
a.classList.add("list-group-item", "list-group-item-action");

const palabras = ["default", "primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];

palabras.forEach((palabra, index) => {
    clon = a.cloneNode();
    div.append(clon);
    if(index != 0)
        clon.classList.add("list-group-item-" + palabra);
    clon.textContent = "A simple " + palabra + " list group item";
});