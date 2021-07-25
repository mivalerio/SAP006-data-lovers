import { orders, filters } from '../src/data.js';

//Filmes


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
