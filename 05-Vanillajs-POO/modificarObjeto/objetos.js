export class Person {
  #name;
  #surname;
  country;
  age;
  constructor(name, surname, country, age) {
    this.#name = name;
    this.#surname = surname;
    this.country = country;
    this.age = age;
  }

  get getName() {
    return `${this.#name}`;
  }

  get getSurname() {
    return `${this.#surname}`;
  }

  get getCountry() {
    return `${this.country}`;
  }

  get getAge() {
    return `${this.age}`;
  }

  set setName(name) {
    this.#name = name;
  }

  set setSurname(surname) {
   this.#surname = surname;
  }

  set setCountry(country) {
   this.country = country;
  }

  set setAge(age) {
    this.age = age;
   }
}
