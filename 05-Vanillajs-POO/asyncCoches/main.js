import { url, options } from "./API.js";
import { Car } from "./Car.js";

let filterNames = ["Year", "Make", "Model", "Type"];
let carsArray = [];
let filters = document.getElementsByTagName("select");
let container = document.getElementById("container");
let cars = "";

try {
	const response = await fetch(url, options);
	cars = await response.json();
} catch (error) {
  console.log("Ha habido un error.");
}

pushCarsOnArray();
generateFilterNav();

async function filterCars() {
  let carsFilter = await filterCarPromise(carsArray, "year", document.getElementById("year").value);
  carsFilter = await filterCarPromise(carsFilter, "make", document.getElementById("make").value);
  carsFilter = await filterCarPromise(carsFilter, "model", document.getElementById("model").value);
  carsFilter = await filterCarPromise(carsFilter,"type", document.getElementById("type").value);
  container.innerHTML = "";
  carsFilter.map((car) => {
    crearElementosDOM(car);
  });
}

const filterCarPromise = (carsArray, filterName, valueFilter) => {
  return new Promise((resolve) => {
    const filteredCars = carsArray.filter((car) => {
      switch (filterName) {
        case "year":
          return valueFilter === "ALL" || car.year >= valueFilter;
        default:
          return valueFilter === "ALL" || car[filterName] === valueFilter;
    }
    });
    resolve(filteredCars);
  });
};

function generateFilterNav() {
  let filterNav = "<div id='menuFilter'>";
  filterNames.forEach((filter) => {
    let filterMin = filter.toLowerCase();
    filterNav += "<label>" + filter + ": " + "</label><select id=" + filterMin + ">";
    let arrayFilter = [];
    carsArray.forEach((car) => {
      if (!arrayFilter.includes(car[filterMin])) {
        arrayFilter.push(car[filterMin]);
        filterNav += "<option>" + car[filterMin] + "</option>";
      }
    });
    arrayFilter.push("ALL");
    filterNav += "<option selected>ALL</option></select>";
  });
  filterNav += "</div>";
  document.body.insertAdjacentHTML("beforeend", filterNav);
  addEventChange();
}

function crearElementosDOM(car) {
  let div = document.createElement("div");
  let p = document.createElement("p");
  let p2 = document.createElement("p");
  div.className = "coches";
  container.appendChild(div);
  div.appendChild(p).textContent = car.model + " / " + car.make;
  div.appendChild(p2).textContent = car.type + " / " + car.year;
}

function pushCarsOnArray() {
  cars.map(({ id, make, year, type, model }) => {
    let objectCar = new Car(id, make);
    objectCar.year = year;
    objectCar.type = type;
    objectCar.model = model;
    carsArray.push(objectCar);
  });
}

function addEventChange(){
  Array.from(filters).forEach((filter) => {
    filter.addEventListener("change", filterCars);
  });
}