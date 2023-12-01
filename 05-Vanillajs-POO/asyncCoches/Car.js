export class Car {
  #id;
  make;
  constructor(id, make) {
    this.#id = id;
    this.make = make;
  }

  get id() {
    return `${this.#id}`;
  }

  set id(id) {
    this.#id = id;
  }
}
