import data from './data/ghibli/ghibli.js';
import { getCharacters } from './personagens.js';


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
  
 

//Função de ordenar personagem A-Z
export const orders = {
  
  charactersOrderAZ: function() {
    let characterAZ = getCharacters()
    characterAZ = characterAZ.sort((A,Z) => {
      if (A.name > Z.name) {
        return 1;
      }
      if (A.name < Z.name) {
        return -1;
      }
      else {
        return 0;
      }
      
    });
    return characterAZ;                      
  },

  charactersOrderZA: function() {
    let characterZA = getCharacters()
    characterZA = characterZA.sort((A,Z) => {
      if (A.name > Z.name) {
        return -1;
      }
      if (A.name < Z.name) {
        return 1;
      }
      else {
        return 0;
      }
      
    });
    return characterZA;
  },

 charactersAgeOldertoYounger: function() {
    let dataAgeOldertoYounger = getCharacters()
    dataAgeOldertoYounger.sort((a,b) => {
      if (a.age > b.age) { 
        return -1;
      }
      else if (a.age < b.age) {
        return 1;
      }
      else { 
        return 0;
      }

    });
    return dataAgeOldertoYounger;
  },

  charactersAgeYoungerToOlder: function() {
    let dataAgeYoungerToOlder = getCharacters()
    dataAgeYoungerToOlder.sort((a,b) => {
      if (a.age > b.age) { 
        return 1;
      }
      else if (a.age < b.age) {
        return -1;
      }
      else { 
        return 0;
      }

    });
    return dataAgeYoungerToOlder;
  }

}

export function genderFilterFemale () {
  getCharacters().filter(people => people.gender === "Female")
} 

export function genderFilterMale (){
  getCharacters().filter(people => people.gender === "Male")
} 

/*export const female = function female (gender) {
    let dataGender = getCharacters()
    dataGender.filter(female())
    console.log(dataGender)
    return gender === "Female"
  }*/

//export const male = function male (gender) {
//    return gender === "Male"
//  }
