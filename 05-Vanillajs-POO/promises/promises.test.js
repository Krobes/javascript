import * as promesa from "./promises";

fetch(promesa.miPromesa(2))
  .then((resultado) => resultado)
  .catch((error) => error);

describe("DataBase Promises - selectUserById", () => {
  it("should gets user with id = 2", () => {
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
