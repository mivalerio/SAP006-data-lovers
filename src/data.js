import data from '.data/ghibli/ghibli.json';

/* estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

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

