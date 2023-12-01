let array1 = [2,3,4];
let arrayTexto = ["study", "buy", "sleep", "play"];

/*3. Crea una función que devuelva el doble de los elementos de un array, con un delay
de 6 segundos, esta funcón recibe como parámetros un array de enteros una función
callback*/

function duplicarNumeros(arrayNumeros, callbackDuplicar) {
  setTimeout(function () {
    return console.log(callbackDuplicar(arrayNumeros));
  }, 6000);
}

function callbackDuplicar(arrayNumeros) {
    arrayNumeros.forEach((numero, index) => {
      arrayNumeros[index] = numero * 2;
    });
    return arrayNumeros;
  }
  

/*4. Crea la misma función del ejercicio 1 pero esta vez que se asíncrona con un delay
de 3 segundos*/

function sumaNumeros(array1, array2, callbackSuma) {
  setTimeout(function () {
    return console.log(callbackSuma(array1, array2));
  }, 3000);
}

function callbackSuma(array1, array2) {
  let sumTotal = 0;
  array1.forEach((numero) => {
    sumTotal += numero;
  });
  array2.forEach((numero) => {
    sumTotal += numero;
  });
  return sumTotal;
}

/*5. Crea la misma función del ejercicio 2 pero esta vez que se asíncrona con un delay
de 2 segundos*/

function concatenaStrings(arrayTexto, callbackStrings) {
  setTimeout(function () {
    return console.log(callbackStrings(arrayTexto));
  }, 2000);
}

function callbackStrings(arrayTexto) {
  let cadenaConcat = "My tasks list:";
  arrayTexto.forEach((palabra) => {
    cadenaConcat += " " + palabra;
  });
  return cadenaConcat;
}

duplicarNumeros(array1, callbackDuplicar);
sumaNumeros(array1, array1, callbackSuma);
concatenaStrings(arrayTexto, callbackStrings);
