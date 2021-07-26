import { orders, filters} from './data.js';
import data from './data/ghibli/ghibli.js';

//Entrar na array de persongem

const filmes = data.films;
const pessoas = document.getElementById("card-characters");

export function getCharacters(){
  let characters = [];
  for (let film of filmes){
    for(let people of film.people){
      characters.push(people);
    }
  }
  return characters
}

//Printar filmes na tela

function showCardsCharacters (characters){
  pessoas.innerHTML = "";
  characters.map((people) => {
    const cardsCharacters = document.createElement("div")

    cardsCharacters.innerHTML =
    `<div class="filmes">
      <div class="img-personagem">
        <img src="${people.img}">
        <div class="character-name">${people.name}</div>
      </div>
    <div>`

    //Pop up
    pessoas.appendChild(cardsCharacters)
    const popUpWrapper = document.getElementById("char-wrapper")
    const popUpInfo = document.getElementById("char-info")
    cardsCharacters.addEventListener("click", () =>{
      popUpWrapper.style.display = 'block'

      //Pop up informação
      popUpInfo.innerHTML =
      `<div class="characters-pop-up">
        <h2 class="character-title">${people.name}</h2>
          <div class="characters-info">
            <ul class="character-content">
              <li class="character-gender"> Gender:${people.gender}</li>
              <li class="character-age">Age:${people.age}</li>
              <li class="character-eye">Eye color:${people.eye_color}</li>
              <li class="character-hair">Hair color:${people.hair_color}</li>
              <li class="character-specie">Specie:${people.specie}</li>
            </ul>
          </div>
      </div>`

      //Pop-up fechar
      popUpWrapper.addEventListener("click", event => {
        const option = event.target.classList[0]
        const names = ['popup-close', 'popup-wrapper']
        const closePopUp = names.some(
          names => names === option)

        if (closePopUp){
          popUpWrapper.style.display = "none"
        }
      })

    });

  }).join("");

}

showCardsCharacters(getCharacters())

//ordens/filtros

//AZ
const order = document.getElementById("order");

function alphabetOrder(event){
  const option = event.target.value;
  //Limpar
  charactersAge.value = "";
  characterGender.value = "";
  if (option == "az"){
    showCardsCharacters(orders.charactersOrderAZ(getCharacters()));
  }
  else {
    showCardsCharacters(orders.charactersOrderZA(getCharacters()));
  }
}
order.addEventListener("change",alphabetOrder);


//Idade
const charactersAge = document.getElementById("age");

function ageOrder(event){
  const option = event.target.value;
  //Limpar
  order.value = "";
  characterGender.value = "";
  if (option == "younger-to-older"){
    showCardsCharacters(orders.charactersAgeYoungerToOlder(getCharacters()));
  }
  else {
    showCardsCharacters(orders.charactersAgeOldertoYounger(getCharacters()));
  }

}
charactersAge.addEventListener("change", ageOrder)


//Genero
const characterGender = document.getElementById("gender")
//const calculo = document.getElementById("calculo-porcentagem")
function genderFilter(event){
  const option = event.target.value;
  //Limpar
  order.value = "";
  charactersAge.value = "";
  if (option == "women"){
    showCardsCharacters(filters.genderFilterFemale(getCharacters()));
  }
  else if (option == "man"){
    showCardsCharacters(filters.genderFilterMale(getCharacters()));
  }
  else{
    showCardsCharacters(filters.genderFilterOther(getCharacters()))
  }
}
characterGender.addEventListener("change", genderFilter)
