// Declaramos las constantes con los mensajes de las ventanas flotantes.
const ALERT_MESSAGE = "This is and alert message, click me to move on!!!";
const TRUE_OR_FALSE_MESSAGE = "Show me in alert if you clicked on ok or false.";
const PROMPT_USE = "Show me in an alert the messaged typed";

// Crea un alert.
window.alert(ALERT_MESSAGE);

// Al pulsar Aceptar se debe abrir un confirm
let decission = window.confirm(TRUE_OR_FALSE_MESSAGE);

// Al pulsar Acertar o Cancelar se debe mostrar un Alert con true si se pulsó Aceptar o false si se pulso Cancelar.
if (decission){
    window.alert("You clicked on true click me to move on!!!");
} else {
    window.alert("You clicked on false click me to move on!!!");
}

// Al pulsar Aceptar se debe mostrar un Prompt con la siguiente apariencia.
let user_message = window.prompt(PROMPT_USE);

// Al introducir cualquier texto en input y pulsar Aceptar se debe mostrar el siguiente alert.
window.alert("You typed " + user_message + " click me to move on.");