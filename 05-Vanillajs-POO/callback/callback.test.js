import * as callback from "./callback.js";

let array1 = [1,2,3,4,5];
let array2 = [2,3,1,2];
let arrayTexto = ["study", "buy", "sleep", "play"];

describe("callbacks", () => {
  it("should get 23", () => {
    const resultado = callback.sumaNumeros(array1, array2, callback.callbackSuma);
    expect(resultado).toBe(23);
  });

  it("should get 'My tasks list: study, buy, sleep, play'", () => {
    const resultado = callback.concatenaStrings(arrayTexto, callback.callbackStrings);
    expect(resultado).toBe("My tasks list: study buy sleep play");
  });
});

