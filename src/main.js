//import { filtros } from './data.js';

import data from './data/ghibli/ghibli.js';
//console.log(example, data);

//Filmes

function mostrarCards(data) { 
    document.getElementById('filmes').innerHTML = data.map((item) =>
        `<div class="filmes">
        <div class="img-poster"> 
            <img src="${item.poster}"> 
        </div>
        <div class="titulo">${item.title}
        </div> 
        </div>`
    );
}

//Personagens

const filmes = data.films;

function showCardsCharacters (characters, film){
    
    characters.forEach(people =>
        document.getElementById('pessoas').innerHTML += 
        `<div class="img-personagem">
            <img src="${people.img}">
        </div>
        <div class="nome-personagem">${people.name}</div>`           
    );
}
for (let film of filmes){
    let characters = film.people;
    showCardsCharacters(characters);
}
mostrarCards(data.films);
