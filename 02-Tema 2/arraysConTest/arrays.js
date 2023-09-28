export const games = ["Zelda", "Mario Bros", "Metroid", "Chrono"];

/**
 * Removes the first element from an array and returns it.
 * If the array is empty, undefined is returned and the array is not modified.
 */
export const deleteFirtPosition = () => {
  return games.shift();

};

/**
 * Removes the last element from an array and returns it.
 * If the array is empty, undefined is returned and the array is not modified.
 */
export const deleteLastPosition = () => {
  return games.pop();
};

/**
 * Inserts new element at the start of an array, and returns the new length of the array.
 * @param item Element to insert at the start of the array.
 */
export const addFirstPosition = (item) => {
  return games.unshift(item);
};

/**
 * Appends new element to the end of an array, and returns the new length of the array.
 * @param item New element to add to the array.
 */
export const addLastPosition = (item) => {
  return games.push(item);
};

/******************************************************/
export const got = [
  "Lannister",
  "Targaryen",
  "Stark",
  "Baratheon",
  "Greyjoy",
  "Arryn",
  "Martell",
];

/**
 * Removes Baratheon and Greyjoy houses
 * @returns array with items removes
 */
export const removeBaratheonAndGreyjoy = () => {
  let elementoEliminado = got.splice(3, 2);
  return elementoEliminado;
};

/**
 * Removes Arryn house
 * @returns array with items removes
 */
export const removeArryn = () => {
  let elementoEliminado = got.splice(3, 1);
  return elementoEliminado;
};

/******************************************************/
export const narutoCharacters = [
  "Naruto",
  "Sasuke",
  "Sakura",
  "Hinata",
  "Kakashi",
  "Jiraiya",
  "Itachi",
  "Gaara",
];

/**
 * Gets the index of Naruto
 * @returns the index found.
 */
export const getNaruto = () => {
  let indexNaruto = narutoCharacters.indexOf("Naruto");
  return indexNaruto;
};

/**
 * Gets the index of Gaara
 * @returns the index found.
 */
export const getGaara = () => {
  let indexGaara = narutoCharacters.indexOf("Gaara");
  return indexGaara;
};

/**
 * Gets the index of Rock Lee
 * @returns the index found.
 */
export const getRockLee = () => {
  let indexRockLee = narutoCharacters.indexOf("RockLee");
  return indexRockLee;
};

/**
 * Reverses the elements in Naruto Characters array
 * @returns the reversed given array
 */
export const reverseNarutoCharacters = () => {
  return narutoCharacters.reverse();
};
