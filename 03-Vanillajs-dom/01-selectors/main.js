console.log(document.getElementById("titulo").textContent + " => get via getElementById");
console.log(document.getElementsByClassName("parrafo")[0].textContent + " => get via getElementByClassName");
console.log(document.getElementsByClassName("parrafo")[1].textContent + " => get via getElementByClassName");
console.log(document.getElementsByName("nombre")[0].placeholder + " => get via getElementByName");
console.log(document.getElementsByName("apellido")[0].placeholder + " => get via getElementByName");
console.log(document.getElementsByTagName("li")[0].textContent + " => get via getElementsByTagName");
console.log(document.getElementsByTagName("li")[1].textContent + " => get via getElementsByTagName");
console.log(document.getElementsByTagName("li")[2].textContent + " => get via getElementsByTagName");
console.log(document.querySelector("#titulo").textContent + " => get via querySelector");
console.log(document.querySelectorAll(".contenedor .parrafo")[0].textContent + " => get via querySelectorAll");
console.log(document.querySelectorAll(".contenedor .parrafo")[1].textContent + " => get via querySelectorAll");

