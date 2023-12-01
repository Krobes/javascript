import { cars } from "./mockData.js";
import { Car } from "./Car.js";

const mapCars = (cars) => {
  let carsArray = [];
  return new Promise((resolve) => {
    cars.map(({ id, make, year, type, model }) => {
      let objectCar = (new Car(id, make));
      objectCar.year = year;
      objectCar.type = type;
      objectCar.model = model;
      carsArray.push(objectCar);
    });
    resolve(carsArray);
  });
};

const carsFilter = (carsArray) => {
  let carsFilters = [];
  return new Promise((resolve) => {
    carsArray.map((car, index) => {
      if (car.year >= 2010) {
        carsFilters.push(car);
      }
    });
    resolve(carsFilters);
  });
};

async function filterCars() {
  let carsArray = await mapCars(cars);
  let carsFilters = await carsFilter(carsArray);
  carsFilters.map((car) => {
    crearElementosDOM(car);
  });
}

function crearElementosDOM(car){
    let container = document.getElementById("container");
    let div = document.createElement("div"); 
    let p = document.createElement("p"); 
    let p2 = document.createElement("p"); 
    div.className = "coches";
    container.appendChild(div);
    div.appendChild(p).textContent = car.model + " / " + car.make;
    div.appendChild(p2).textContent = car.type + " / " + car.year;
}

filterCars();
