import * as objetos from "./objetos";

let movie = new objetos.Movie(
  "El Señor de los Anillos: La Comunidad del Anillo",
  "31 de octubre de 1961",
  "Pukerua Bay, Nueva Zelanda",
  "Peter Jackson",
  "Neozelandés",
  ["El Señor de los Anillos", "El Hobbit", "King Kong"],
  2001,
  "Fantasía",
  178,
  9.2,
  "Un hobbit llamado Frodo Baggins..."
);

describe("Inheritance - Birth class", () => {
  it("should gets date and place birth of Peter Jackson", () => {
    expect(movie.getDateOfBirth).toBe("31 de octubre de 1961");
    expect(movie.getPlaceOfBirth).toBe("Pukerua Bay, Nueva Zelanda");
  });
});
describe("Inheritance - Director class", () => {
  it("should gets name, nationality and NotableFilmography for Director", () => {
    expect(movie.getName).toBe("Peter Jackson");
    expect(movie.getNationality).toBe("Neozelandés");
    expect(movie.getNotableFilmography).toBe("El Señor de los Anillos,El Hobbit,King Kong");
  });
});
describe("Inheritance - Movie class", () => {
  it("should gets title, year, genre, duration, rating and synopsis for Movie", () => {
    expect(movie.getTitle).toBe("El Señor de los Anillos: La Comunidad del Anillo");
    expect(movie.getYear).toBe(2001);
    expect(movie.getGenre).toBe("Fantasía");
    expect(movie.getDuration).toBe(178);
    expect(movie.getRating).toBe(9.2);
    expect(movie.getSynopsis).toBe("Un hobbit llamado Frodo Baggins...");
  });
});
