import { ordenarDatadeLancamento, ordenaMaiorScore, ordenaAZ, filtraDiretor, filtraNome } from "../src/data.js";

const mockArray = [
  { "title": "Castle in the Sky", "release_date": "1986", "rt_score": "95", "director": "Hayao Miyazaki" },
  { "title": "The Wind Rises", "release_date": "2013", "rt_score": "89", "director": "Hayao Miyazaki" },
  { "title": "Pom Poko", "release_date": "1994", "rt_score": "78", "director": "Isao Takahata" }

];

describe("function ordenarDatadeLancamento", () => {
  it("is a function", () => {
    expect(typeof ordenarDatadeLancamento).toBe("function");
  });

  it("ordena filmes por ordem de lançamento", () => {
    const result = ordenarDatadeLancamento(mockArray);
    expect(result[0].release_date).toBe("1986");
    expect(result[1].release_date).toBe("1994");
    expect(result[2].release_date).toBe("2013");
  });
});

describe("function ordenaMaiorScore", () => {
  it("is a function", () => {
    expect(typeof ordenaMaiorScore).toBe("function");
  });

  it("ordena filmes por Score do maior para o menor", () => {
    const result = ordenaMaiorScore(mockArray);
    expect(result[0].rt_score).toBe("95");
    expect(result[1].rt_score).toBe("89");
    expect(result[2].rt_score).toBe("78");
  });
});

describe("function ordenaAZ", () => {
  it("is a function", () => {
    expect(typeof ordenaAZ).toBe("function");
  });

  it("ordena filmes por ordem alfabetica", () => {
    const result = ordenaAZ(mockArray);
    expect(result[0].title).toBe("Castle in the Sky");
    expect(result[1].title).toBe("Pom Poko");
    expect(result[2].title).toBe("The Wind Rises");
  });
});

describe("function filtraDiretor", () => {
  it("is a function", () => {
    expect(typeof filtraDiretor).toBe("function");
  });

  it("filtra por diretor", () => {
    const result = filtraDiretor(mockArray, "Isao Takahata");
    expect(result[0].director).toBe("Isao Takahata");
  });
});

describe("function filtraNome", () => {
  it("is a function", () => {
    expect(typeof filtraNome).toBe("function");
  });

  it("retorna o filme digitado pelo usuario", () => {
    const result = filtraNome(mockArray, "Castle in the Sky");
    expect(result[0].title).toBe("Castle in the Sky");
  });
});


