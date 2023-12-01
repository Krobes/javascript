export function sumaNumeros(array1, array2, callbackSuma){
    return callbackSuma(array1, array2);
};

export function callbackSuma(array1, array2){
    let sumTotal = 0;
    array1.forEach(numero => {
        sumTotal += numero;
    });
    array2.forEach(numero => {
        sumTotal += numero;
    });
    return sumTotal;
}

export function concatenaStrings(arrayTexto, callbackStrings){
    return callbackStrings(arrayTexto);
};

export function callbackStrings(arrayTexto){
    let cadenaConcat = "My tasks list:";
    arrayTexto.forEach(palabra => {
        cadenaConcat += " " + palabra;
    });
    return cadenaConcat;
}