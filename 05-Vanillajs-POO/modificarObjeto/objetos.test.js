import * as objetos from "./objetos";

describe("OOP", () => {
  let persona1 = new objetos.Person("Rafael", "Rafa", "España", "28");
  it("should gets name, surname, country and age", () => {
    expect(persona1.getName).toBe("Rafael");
    expect(persona1.getSurname).toBe("Rafa");
    expect(persona1.getCountry).toBe("España");
    expect(persona1.getAge).toBe("28");
  });
  it("should sets name = 'Peter', surname = 'Jackson', country = 'CANADA', age='39'.", () => {
    persona1.setName = "Peter";
    persona1.setSurname ="Jackson";
    persona1.setCountry = "CANADA";
    persona1.setAge = "39";
    expect(persona1.getName).toBe("Peter");
    expect(persona1.getSurname).toBe("Jackson");
    expect(persona1.getCountry).toBe("CANADA");
    expect(persona1.getAge).toBe("39");
  });
});
