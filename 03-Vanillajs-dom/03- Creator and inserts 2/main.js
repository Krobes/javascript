const body = document.querySelector("body");
const div = document.createElement("div");

const divPos = document.querySelector("div");
const br = document.createElement("br");

const h1 = document.createElement("h1");
h1.textContent = "The input min and max attribute.";

const p = document.createElement("p");
p.textContent = "The input min and max attributes specify the minimun and the maximum values for an input element.";

const form = document.createElement("form");
form.action="/action_page.php";
const formPos = document.querySelector("form");

const label = document.createElement("label");
label.for = "datemax";
label.textContent = "Enter a date before 1980-01-01:";

const label2 = label.cloneNode();
label2.for = "datemin";
label2.textContent = "Enter a date before 2000-01-01:";

const label3 = label.cloneNode();
label3.for = "quantity";
label3.textContent = "Quantity (between 1 and 5):";

const input = document.createElement("input");
input.type = "date";
input.id ="datemax";
input.name = "datemax";
input.max = "1975-12-31";

const input2 = input.cloneNode();
input2.id ="datemin";
input2.name = "datemin";
input2.min = "2000-01-02";
input2.removeAttribute("max");

const br2 = form.appendChild(br.cloneNode());
br2.textContent = "";

const input3 = input.cloneNode();
input3.type = "number";
input3.id ="quantity";
input3.name = "quantity";
input3.min = "1";
input3.max = "5";

const input4 = document.createElement("input");
input4.type="submit";
input4.value="Submit";


//Mejor usar append
body.append(div);
div.appendChild(h1);
div.appendChild(br);
div.appendChild(p);
div.appendChild(br.cloneNode());
div.appendChild(form);
form.appendChild(label);
form.appendChild(input);
form.appendChild(br2);
form.appendChild(br.cloneNode());
form.appendChild(label2);
form.appendChild(input2);
form.appendChild(br.cloneNode());
form.appendChild(br.cloneNode());
form.appendChild(label3);
form.appendChild(input3);
form.appendChild(br.cloneNode());
form.appendChild(br.cloneNode());
form.appendChild(input4);




