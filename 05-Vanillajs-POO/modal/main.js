import { modal } from "./modal.js";

const myModal = modal();
myModal.style.display = "none";

document.getElementsByTagName('img')[0].addEventListener('mouseover', mouseOver);

function mouseOver() {
  
  myModal.style.display = "block";
  document.body.addEventListener('click', mouseOut);
}

function mouseOut() {
  myModal.style.display = "none";
}