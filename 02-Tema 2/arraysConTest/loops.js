const persons = [
  { name: "Juan", age: 25 },
  { name: "María", age: 30 },
  { name: "Carlos", age: 22 },
  { name: "Luisa", age: 28 },
  { name: "Ana", age: 35 },
];

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de los nombres
 ** Usando el bucle i
 **/
export const getNameWithFor = () => {
  let nombres = [];
  for(let index = 0; index < 5; index++){
    nombres[index] = persons[index].name;
  }
  return nombres;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de los nombres
 ** Usando el bucle DO WHILE
 **/
export const getNameWithDoWhile = () => {
  let nombres = [];
  let i = 0;
  do{
    nombres[i] = persons[i].name;
    i++;
  } while(i < 5);
  return nombres;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de los nombres
 ** Usando el bucle WHILE
 **/
export const getNameWithWhile = () => {
  let nombres = [];
  let i = 0;
  while(i < 5){
    nombres[i] = persons[i].name;
    i++;
  }
  return nombres;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de las edades
 ** Usando el bucle FOR
 **/
export const getAgeWithFor = () => {
  let edad = [];
  for(let index = 0; index < 5; index++){
    edad[index] = persons[index].age;
  }
  return edad;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de las edades
 ** Usando el bucle DO WHILE
 **/
export const getAgeWithDoWhile = () => {
  let edad = [];
  let i = 0;
  do{
    edad[i] = persons[i].age;
    i++;
  } while(i < 5);
  return edad;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de las edades
 ** Usando el bucle WHILE
 **/
export const getAgeWithWhile = () => {
  let edad = [];
  let i = 0;
  while(i < 5){
    edad[i] = persons[i].age;
    i++;
  }
  return edad;
};
