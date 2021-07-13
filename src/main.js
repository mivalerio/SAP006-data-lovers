<<<<<<< HEAD
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
=======
//import { filtros } from './data.js'; 
/*import data from './data/ghibli/ghibli.js';
//console.log(example, data); 

import filmes from './filmes.js';
import personagens from './personagens.js';

const btnFilmes = document.getElementById("filmes");
const filmes = data.films;


function chamaCards (){
    const chamafilmes
    filmes.value = data.mostraCards(filmes);

}

btnFilmes.addEventListener("click", chamaCards);*/






>>>>>>> 33e9145866cc9bbaebc8626319533b8a26c28371
