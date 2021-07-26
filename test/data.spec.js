import { ordenarDatadeLancamento, ordenaMaiorScore, ordenaAZ, filtraDiretor, filtraNome } from "../src/data.js";
import { orders, filters } from '../src/data.js';

//Filmes

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


//Personeganes

const arrCharactersTest = [
  {
    "name": "Howl Jenkins Pendragon",
    "gender": "Male",
    "age": "27"
  },
  {
    "name": "Aiko",
    "gender": "Female",
    "age": "10"
  },
  {
    "name": "No-Face",
    "gender": "Unknown (Possible Male)",
    "age": "unknown",
  },
]

describe('function charactersOrderAZ', () => {
  it('é uma função', () => {
    expect(typeof orders.charactersOrderAZ).toBe('function');
  });

  it('retorna os personagens ordenados de A-Z', () => {
    const result = orders.charactersOrderAZ(arrCharactersTest)
    expect(result[0].name).toEqual("Aiko");
  });

  it('retorna os personagens ordenados de A-Z', () => {
    const result = orders.charactersOrderAZ(arrCharactersTest)
    expect(result[1].name).toEqual("Howl Jenkins Pendragon");
  });

  it('retorna os personagens ordenados de A-Z', () => {
    const result = orders.charactersOrderAZ(arrCharactersTest)
    expect(result[2].name).toEqual("No-Face");
  });

});


describe('function charactersOrderZA', () => {
  it('é uma função', () => {
    expect(typeof orders.charactersOrderZA).toBe('function');
  });

  it('retorna os personagens ordenados de Z-A', () => {
    const result = orders.charactersOrderZA(arrCharactersTest)
    expect(result[0].name).toBe("No-Face");
  });

  it('retorna os personagens ordenados de Z-A', () => {
    const result = orders.charactersOrderZA(arrCharactersTest)
    expect(result[1].name).toBe("Howl Jenkins Pendragon");
  });

  it('retorna os personagens ordenados de Z-A', () => {
    const result = orders.charactersOrderZA(arrCharactersTest)
    expect(result[2].name).toBe("Aiko");
  });

});

describe('function charactersAgeYoungerToOlder', () => {
  it('é uma função', () => {
    expect(typeof orders.charactersAgeYoungerToOlder).toBe('function');
  });

  it('retorna ordenado do mais novo para o mais velho', () => {
    const result = orders.charactersAgeYoungerToOlder(arrCharactersTest)
    expect(result[0].age).toBe("10");
  });

  it('retorna ordenado do mais novo para o mais velho', () => {
    const result = orders.charactersAgeYoungerToOlder(arrCharactersTest)
    expect(result[1].age).toBe("27");
  });

});

describe('function charactersAgeOldertoYounger', () => {
  it('é uma função', () => {
    expect(typeof orders.charactersAgeOldertoYounger).toBe('function');
  });

  it('retorna ordenado do mais velho para o mais novo', () => {
    const result = orders.charactersAgeOldertoYounger(arrCharactersTest)
    expect(result[0].age).toBe("unknown");
  });

  it('retorna ordenado do mais velho para o mais novo', () => {
    const result = orders.charactersAgeOldertoYounger(arrCharactersTest)
    expect(result[1].age).toBe("27");
  });

  it('retorna ordenado do mais velho para o mais novo', () => {
    const result = orders.charactersAgeOldertoYounger(arrCharactersTest)
    expect(result[2].age).toBe("10");
  });

});

describe('function genderFilterFemale', () => {
  it('é uma função', () => {
    expect(typeof filters.genderFilterFemale).toBe('function');
  });
  it('retorna filtrado por mulher', () => {
    const result = filters.genderFilterFemale(arrCharactersTest)
    expect(result[0].gender).toBe("Female");
  });
});

describe('function genderFilterMale', () => {
  it('é uma função', () => {
    expect(typeof filters.genderFilterMale).toBe('function');
  });
  it('retorna filtrado por homem', () => {
    const result = filters.genderFilterMale(arrCharactersTest)
    expect(result[0].gender).toBe("Male");
  });
});

describe('function genderFilterOther', () => {
  it('é uma função', () => {
    expect(typeof filters.genderFilterOther).toBe('function');
  });
  it('retorna filtrado por outros', () => {
    const result = filters.genderFilterOther(arrCharactersTest)
    expect(result[0].gender).toBe("Unknown (Possible Male)");
  });
});
