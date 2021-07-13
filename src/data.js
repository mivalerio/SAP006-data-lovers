
import data from './data/ghibli/ghibli.js';

import data from '.data/ghibli/ghibli.json';

/* estas funciones son de ejemplo




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

// Filtrar Pokémons por nome através do input text
export const filtraNome = (films) => {
  const procuraPorNome = films.filter((filtraNome) =>
    films.title.toLowerCase().startsWith(procuraPorNome));
};


//calcular media Score

const filmes = data.films;

let media = [];

for (let i = 0; i < filmes.length; i++) {
  media.push(parseInt(filmes[i]["rt_score"]));

}

const mediaNotas = media.reduce((a, b) =>
  (a + b)) / media.length;

console.log(media.length);
console.log(mediaNotas);

export const anotherExample = () => {
  return 'OMG';
};*/


//Função de filtrar filme

//Função de filtrar personagem A-Z
const filtros = {
  
  //ou personagensAZ: function (dataName) {
    //dataName.sort()
  personagensAZ: function (dataName) {
    dataName.sort((A,Z) => {
      if (A > Z) {
        return 1;
      }
      else if (A < Z) {
        return -1;
      }
      else {
        return 0;
      }
    });
  },

  personagensIdade: function (dataAge) {
    dataAge.sort((a,b) => {
      if (a > b) { 
        return 1;
      }
      else if (a < b) {
        return -1;
      }
      else { 
        return 0;
      }
    });
  },

  personagensGenero: function (dataGender) {
    dataGender.filter((Female, Male) => {
      if (dataGender === Female) {
        return true;
      } 
      else {
        return false;
      }
    });
  },

}

export default filtros


