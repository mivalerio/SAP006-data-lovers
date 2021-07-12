import data from './data/ghibli/ghibli.js';
import { ordenarDatadeLancamento } from './data.js';
import { ordenaMaiorScore } from './data.js';
import { ordenaAZ } from './data.js';
import { filtraNome } from './data.js';

const filmes = data.films;

function mostrarCards(data) {
    document.getElementById('cards-filmes').innerHTML = data.map((item) => ` 
        <div class="filmes">
            <div class="img-poster"> 
                <img src="${item.poster}"> 
                <div class="titulo">${item.title}</div>
            </div> 
        </div>`



    )
}
mostrarCards(filmes);



function mostrarInformacoesCards(data) {
    document.getElementById('cardsInformacoes').innerHTML = data.map((item) => `
    <div class="cardBack">
        <ul class="informacoes">
          <li>Descrição:${item.description}</li>
          <li>Diretor:${item.director}</li>
          <li>Ano de Lançamento:${item.release_date}</li>
          <li>RT Score:${item.rt_score}</li>
          <li>Localização:${item.locations.name}</li>
          <li>Clima:${item.climate}</li>
          <li>Terreno:${item.terrain}</li>
        </ul>
    </div>
    `)
}

// Filtrar Pokémons por nome atráves do input text e botão filtrar
const btn_ok = document.getElementById("btn_ok");

btn_ok.addEventListener("click", () => {
  const procuraPorNome = filtraNome(filmes);
  mostrarCards(procuraPorNome);
  limpaFiltros();
});

const selectElement = document.querySelector('.opcao');


selectElement.addEventListener('change', (event) => {

    const opcaoSelecionada = event.target.value;
    const result = document.querySelector('.cards-filmes');

    console.log(opcaoSelecionada);
    if (opcaoSelecionada == "release_date") {
        const filmesOrdenados = ordenarDatadeLancamento(filmes)
        console.log("Oi Deu Certo!");
        // filmes.sort();
        // console.log(filmes.sort());

        mostrarCards(filmesOrdenados);

    }

    if (opcaoSelecionada == "rt_score") {
        const ordenaScoreMaior = ordenaMaiorScore(filmes)
        console.log("Ordenou Maior Score");

        mostrarCards(ordenaScoreMaior);
    }
    //cardsFilmes.textContent = `${event.target.value}`;

    if (opcaoSelecionada == "title") {
        const ordenaNome = ordenaAZ(filmes)
        console.log("Ordenou nome");

        mostrarCards(ordenaNome);
    }

    if (opcaoSelecionada == "title") {
        const ordenaNome = ordenaAZ(filmes)
        console.log("Ordenou nome");

        mostrarCards(ordenaNome);
    }



});


//Limpar filtros
const limpaFiltros = () => {
    document.getElementById("title").value = "";
    document.getElementById("rt_score").value = "";
    document.getElementById("release_date").value = "";
    document.getElementById("busca").value= "";
    document.getElementById("producer").value= "";
    document.getElementById("director").value= "";
    }








