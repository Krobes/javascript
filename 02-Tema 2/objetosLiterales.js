// Crear un objeto literal con 7 propiedades.
let trabajador = {
    nombre: "José Manuel",
    apellidos: "Martín Meléndez",
    edad: 34,
    dni: "26262368W",
    // Una de las propiedades debe ser un array con varias propiedades
    matVehiculo: ["345678Y", "456789T", "678292F"],
    // Otras dos de las propiedades debe contener otros objetos literales.
    superiorDepartamento: {
        nombre: "Paula",
        apellidos: "González Marcos",
        departamento: "Desarrollo e innovación",
        id: 101010
    },
    
    departamentosAsociados: [{
        id: 1,
        nombre: "Desarrollo e innovación",
        idJefe: 101010        
    },
    {
        id:2,
        nombre: "Gerencia",
        idJefe: 101011
    }]
}

    /* Una vez tengas el objecto literal encuentra:
    1.	Una función que devuelva todas las claves del objeto. ¿Qué tipo de objeto devuelve?*/
    let claves = Object.keys(trabajador); //Devuelve un Array en el que por orden devuelve las propiedades del objeto.
    console.log(claves);


    /*2. Una función que devuelva todos los valores del objeto. ¿Qué tipo de objeto devuelve? */
    let valores = Object.values(trabajador); //Devuelve un Array con todos los valores.
    console.log(valores);