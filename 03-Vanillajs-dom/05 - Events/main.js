const botonesClick = ["primary", "info", "light", "dark"];

for(let index = 0; index < botonesClick.length; index++){
    document.getElementById(botonesClick[index]).addEventListener('click', clickEvent);
}

document.getElementById("secondary").addEventListener('mouseenter', mouseEnterEvent);
document.getElementById("success").addEventListener('mouseup', mouseUpEvent);
document.getElementById("danger").addEventListener('mouseleave', mouseLeaveEvent);
document.getElementById("warning").addEventListener('mouseenter', mouseEnterEvent);
document.getElementById("warning").addEventListener('mouseleave', mouseLeaveEvent);

function clickEvent() {
    switch(this.id){
        case "info": 
        document.body.style.backgroundColor = "red";
        break;
        case "light": 
        document.body.style.backgroundColor = "white";
        break;
        case "dark": 
        const botones = document.querySelectorAll('.btn');
        botones.forEach((boton) => {
            boton.classList.add("btn-dark");
        });
        break;
        default:
            alert("Click event");
    }
    
}

function mouseEnterEvent() {
    if(this.id == "warning")
    {
        document. getElementById("warning").className = "btn btn-danger";
    }
    else{
        alert("Mouse Enter Event");
    }
}

function mouseUpEvent() {
    alert("Mouse Up Event");
}

function mouseLeaveEvent() {
    if(this.id == "warning")
    {
        document. getElementById("warning").className = "btn btn-warning";
    }
    else{
        alert("Mouse Leave Event");
    }
}