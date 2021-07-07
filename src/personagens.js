import data from './data/ghibli/ghibli.js'; 

const filmes = data.films;
function showCardsCharacters(characters, film) {
    characters.forEach(people => 
        document.getElementById('pessoas').innerHTML += 
        `<div class="img-personagem"> 
        <img src="${people.img}"> 
        </div> 
        <div class="nome-personagem">${people.name}</div>`
        
    );
}
 
for(let film of filmes) { 
    let characters = film.people; 
    showCardsCharacters(characters); 
    
}
