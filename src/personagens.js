import { orders, genderFilterFemale, genderFilterMale } from './data.js';
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
        pessoas.innerHTML +=
        `<div class="filmes">
            <div class="img-personagem"> 
                <img src="${people.img}"> 
                <div class="nome-personagem">${people.name}</div>
            </div> 
        <div>`
    }).join("");
}

showCardsCharacters(getCharacters())


//ordens/filtros

//AZ
const order = document.getElementById("order");

function alphabetOrder(event){
    const option = event.target.value
    
    if (option == "az"){
        showCardsCharacters(orders.charactersOrderAZ());
    }
    else {
        showCardsCharacters(orders.charactersOrderZA());
    }
}
order.addEventListener("change",alphabetOrder)

//Idade
const charactersAge = document.getElementById("age");

function ageOrder(event){
    const option = event.target.value
    
    if (option == "older-to-younger"){
        showCardsCharacters(orders.charactersAgeOldertoYounger());
    }
    else {
        showCardsCharacters(orders.charactersAgeYoungerToOlder());
    }

}
charactersAge.addEventListener("change", ageOrder)

//Genero
const characterGender = document.getElementById("gender")

function genderFilter(event){
    const option = event.target.value
    
    if (option == "women"){
        showCardsCharacters(getCharacters(genderFilterFemale()));
    }
    else {
        showCardsCharacters(getCharacters(genderFilterMale()));
    }
}
characterGender.addEventListener("change", genderFilter)

