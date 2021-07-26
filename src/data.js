import data from './data/ghibli/ghibli.js';

// Função de filtrar filme

export const ordenarDatadeLancamento = (films) => {
  const filmesOrdenados = films.sort(function (a, b) {
    if (a.release_date > b.release_date) {
      return 1;
    }
    if (a.release_date < b.release_date) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  return filmesOrdenados;
}

export const ordenaMaiorScore = (films) => {
  const ordenaScoreMaior = films.sort(function (a, b) {
    if (a.rt_score < b.rt_score) {
      return 1;
    }
    if (a.rt_score > b.rt_score) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  return ordenaScoreMaior;
}

export const ordenaAZ = (films) => {
  const ordenaNome = films.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  return ordenaNome;
}

// Filtrar por nome através do input text

export const filtraNome = (data,films) => {
  let procuraPorNome = data.filter((filtraNome =>
  filtraNome.title.toLowerCase().includes(films.toLowerCase())

  ));
  return procuraPorNome;
};

// calcular media Score

//const filmes = data.films;

let media = [];

for (let i = 0; i < filmes.length; i++) {
media.push(parseInt(filmes[i]["rt_score"]));
}

const mediaNotas = media.reduce((a, b) =>
(a + b)) / media.length;

console.log(media.length);
console.log(mediaNotas);

//Personagens
//Funções de ordenar personagem

export const orders = {

  //A-Z

  charactersOrderAZ: function(arrayPeople) {
    const character = arrayPeople.sort((A,Z) => {
      if (A.name > Z.name) {
        return 1;
      }
      else if (A.name < Z.name) {
        return -1;
      }

    });
    return character;
  },

  //Z-A

  charactersOrderZA: function(arrayPeople) {
    const character = arrayPeople.sort((A,Z) => {
      if (A.name > Z.name) {
        return -1;
      }
      else if (A.name < Z.name) {
        return 1;
      }

    });
    return character;
  },

  //Mais novo para o mais velho

  charactersAgeYoungerToOlder: function(arrayPeople) {
    const character = arrayPeople.sort((a,b) => {
      if (a.age > b.age) {
        return 1;
      }
      else if (a.age < b.age) {
        return -1;
      }

    });
    return character;
  },

  //Mais velho para o mais novo

  charactersAgeOldertoYounger: function(arrayPeople) {
    const character = arrayPeople.sort((a,b) => {
      if (a.age > b.age) {
        return -1;
      }
      else if (a.age < b.age) {
        return 1;
      }

    });
    return character;
  }

}

//Funções de filtar

export const filters ={

  //Mulher

  genderFilterFemale: function(arrayPeople) {

    return arrayPeople.filter((people) => people.gender === "Female")
  },

  //Homem

  genderFilterMale: function(arrayPeople){

    return arrayPeople.filter((people) => people.gender === "Male")
  },

  //Outros

  genderFilterOther: function(arrayPeople) {

    return arrayPeople.filter((people) => people.gender !=="Female" && people.gender !== "Male")
  }

}
