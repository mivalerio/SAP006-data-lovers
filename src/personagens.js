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
  const information = characters.map((people) => {
    const cardsCharacters = document.createElement("div")
    
    cardsCharacters.innerHTML =
    `<div class="filmes">
      <div class="img-personagem"> 
        <img src="${people.img}"> 
        <div class="character-name">${people.name}</div>
      </div> 
    <div>`

    pessoas.appendChild(cardsCharacters)
    const popUpWrapper = document.getElementById("char-wrapper")
    const popUpInfo = document.getElementById("char-info")
    const popupClose = document.getElementById("char-close")
    
    cardsCharacters.addEventListener("click", () =>{
      popUpWrapper.style.display = 'block'

      popUpInfo.innerHTML =
      `<div class="characters-pop-up">
        <h2 class="character-name">${people.name}</h2>
          <div class="characters-info">
            <ul class="character-content">
              Gender:<li class="character-gender">${people.gender}</li>
              Age:<li class="character-age">${people.age}</li>
              Eye color:<li class="character-eye">${people.eye_color}</li>
              Hair color:<li class="character-hair">${people.hair_color}</li>
              Specie:<li class="character-specie">${people.specie}</li>
            </ul>
          </div>
      </div>`

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

//Pop up

//Pop up informação

//Pop mostrar pop up


//ordens/filtros

//AZ
const order = document.getElementById("order");

function alphabetOrder(event){
  const option = event.target.value;
  
  if (option == "az"){
    showCardsCharacters(orders.charactersOrderAZ());
  }
  else {
    showCardsCharacters(orders.charactersOrderZA());
  }
}
order.addEventListener("change",alphabetOrder);


//Idade
const charactersAge = document.getElementById("age");

function ageOrder(event){
  const option = event.target.value;
  
  if (option == "younger-to-older"){
    showCardsCharacters(orders.charactersAgeYoungerToOlder());
  }
  else {
    showCardsCharacters(orders.charactersAgeOldertoYounger());
  }

}
charactersAge.addEventListener("change", ageOrder)


//Genero
const characterGender = document.getElementById("gender")
//const calculo = document.getElementById("calculo-porcentagem")
function genderFilter(event){
  const option = event.target.value;
  
  if (option == "women"){
    showCardsCharacters(filters.genderFilterFemale());
  }
  else if (option == "man"){
    showCardsCharacters(filters.genderFilterMale());
  }
  else{
    showCardsCharacters(filters.genderFilterOther())
  }
}
characterGender.addEventListener("change", genderFilter)


//Limpar

// function clear(){
//   order.value = "";
//   charactersAge.value = "";
//   characterGender.value = "";
// }
// order.addEventListener("change", clear())
// charactersAge.addEventListener("click", clear())
// characterGender.addEventListener("click", clear())

/*
//mudar de cor
 const character = getCharacters()
function colorChange (){
   
    pessoas.style = "grayscale(100%)"
    pessoas.style.transform = "scale(1.1)"
    pessoas.style.transition = "all line 0.3s"
}
character.addEventListener('onmouseenter', colorChange())


pessoas.addEventListener('onmouseenter', e => {
    pessoas.style.filter = "grayscale(100%)";
    pessoas.style.transform = "scale(1.1)";
    pessoas.style.transition = "all line 0.3s";
})*/