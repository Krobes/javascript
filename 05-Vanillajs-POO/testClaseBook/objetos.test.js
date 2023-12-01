import * as objetos from "./objetos";

describe("OOP", () => {
  it("should gets title, author and published for La vida del Lazarillo de Tormes.", () => {
    let libro1 = new objetos.Book("La vida del Lazarillo de Tormes", "Anonymous", "1554");
    expect(libro1.getTitle).toBe("La vida del Lazarillo de Tormes");
    expect(libro1.getAuthor).toBe("Anonymous");
    expect(libro1.getPublished).toBe("1554");
  });
  it("should gets title, author and published for The NeverEnding Story.", () => {
    let libro2 = new objetos.Book("The NeverEnding Story", "Michael Ende", "1984");
    expect(libro2.getTitle).toBe("The NeverEnding Story");
    expect(libro2.getAuthor).toBe("Michael Ende");
    expect(libro2.getPublished).toBe("1984");
  });
  it("should gets title, author and published for The Lord Of The Rings.", () => {
    let libro3 = new objetos.Book("The Lords of the Rings", "J. R. R. Tolkien", "1554");
    expect(libro3.getTitle).toBe("The Lords of the Rings");
    expect(libro3.getAuthor).toBe("J. R. R. Tolkien");
    expect(libro3.getPublished).toBe("1554");
  });
  it("should gets title, author and published for Beowulf.", () => {
    let libro4 = new objetos.Book("Beowulf", "Anonymous", "900");
    expect(libro4.getTitle).toBe("Beowulf");
    expect(libro4.getAuthor).toBe("Anonymous");
    expect(libro4.getPublished).toBe("900");
  });
});
