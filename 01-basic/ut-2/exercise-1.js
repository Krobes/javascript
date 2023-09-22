//Imprimimos por consola el primer mensaje
const BLUE_MESSAGE = "Welcome to the application!";
console.log("%c" + BLUE_MESSAGE, "color:blue; font-weight:bold; font-size:18px");

//Imprimimos por consola el segundo mensaje
const GREEN_MESSAGE = "This is an informal message.";
console.log("%c" + GREEN_MESSAGE, "color:green; font-size:16px");

//Imprimimos por consola el tercer mensaje
const YELLOW_MESSAGE = "This is a warning. Be caution.";
console.warn("%c" + YELLOW_MESSAGE, "color:yellow; font-size:16px");

//Imprimimos por consola el cuarto mensaje
const RED_MESSAGE = "Error! Something went wrong."; //Lo escribimos en español para evitar conflictos con el mensaje de error nativo.
console.error("%c" + RED_MESSAGE, "color:red; font-size:16px");

//Imprimimos una tabla con el contenido facilitado por el ejercicio
const LISTA_TURISTAS = [{name: "John", age: 30, city: "New York"},
                        {name:"Jane", age: 25, city: "San Francisco"},
                        {name:"Bob", age: 40, city: "Chicago"}];

console.table(LISTA_TURISTAS);