//import { filtros } from './data.js'; 
import data from './data/ghibli/ghibli.js'; 
//console.log(example, data); 
//var filtroTest = data, films; 
//Filmes 

function mostrarCards(data) { 
    document.getElementById('filmes').innerHTML = data.map((item) => ` 
        <div class="filmes>
        <div class="img-poster"> 
            <img src="${item.poster}"> 
        </div>
        <div class="titulo">${item.title}
        </div> 
        </div>`
    
        ) 
    } 
    mostrarCards(data.films); 
    //Personagens 
    
    //function mostrarCards(data) { 
      //  document.getElementById('pessoas').innerHTML = data.map((item) => ` 
         //   <div class="img-personagem"> 
             //   <img src="${item.people.img}"> 
           //</img> </div> 
            //<div class="nome-personagem">${item.people.name}
            //</div> `
       // ) 
    //} 
     
