import data from './data/ghibli/ghibli.js';
import { ordenarDatadeLancamento } from './data.js';
import { ordenaMaiorScore } from './data.js';
import { ordenaAZ } from './data.js';
import { filtraNome } from './data.js';
import { filtraDiretor } from './data.js';
import { mediaNotas } from './data.js';

const filmes = data.films;
const pesquisar = document.getElementById("busca");
const cardsFilmes = document.getElementById("cards-filmes");
const cardsInformacoes = document.querySelector(".cards-informacoes");
const popup = document.querySelector(".popup-wrapper");
const btnFechar = document.querySelector(".popup-close");
const media = document.getElementById("media");

function mostrarCards(data) {
    cardsFilmes.innerHTML = "";
    const teste = data.map((item) => {
        const card = document.createElement("div")
        card.innerHTML = ` 
        <div class="filmes">
            <div class="img-poster">    
                <img src="${item.poster}"> 
                <div>${item.title}</div>
            </div>
                    
        </div>`,
            cardsFilmes.appendChild(card),

            card.addEventListener('click', () => {
                popup.style.display = 'block'

                cardsInformacoes.innerHTML = `
            
                <div class="filmes">
                    <ul class="informacoes">
                    <li>Descrição:${item.description}</li>
                    <li>Diretor:${item.director}</li>
                    <li>Ano de Lançamento:${item.release_date}</li>
                    <li>RT Score:${item.rt_score}</li>
                    </ul>
                </div>`


            })


    }).join("")

}
mostrarCards(data.films);

//mostrar informações no card
cardsFilmes.addEventListener('click', () => {
    popup.style.display = 'block'
})

//botaoFechar da popup
btnFechar.addEventListener('click', () => {
    popup.style.display = 'none'
})

//fechar a tela ao clicar fora do popup
popup.addEventListener('click', () => {
    popup.style.display = 'none'
})


const selectElement = document.querySelector('.opcao');


selectElement.addEventListener('change', (event) => {

    const opcaoSelecionada = event.target.value;
    const result = document.querySelector('.cards-filmes');


    if (opcaoSelecionada == "release_date") {
        const filmesOrdenados = ordenarDatadeLancamento(filmes)


        mostrarCards(filmesOrdenados);

    }

    if (opcaoSelecionada == "rt_score") {
        const ordenaScoreMaior = ordenaMaiorScore(filmes)

        
        mostrarCards(ordenaScoreMaior);
    }

    if (opcaoSelecionada == "title") {
        const ordenaNome = ordenaAZ(filmes)


        mostrarCards(ordenaNome);
    }

    if (opcaoSelecionada == "title") {
        const ordenaNome = ordenaAZ(filmes)

        mostrarCards(ordenaNome);

    }

    if (opcaoSelecionada == "director") {
        const ordenaDiretor = filtraDiretor(filmes)
        console.log("Ordenou diretor");

        mostrarCards(ordenaDiretor);

    }



});


//Limpar filtros
/*const limpaFiltros = () => {
    document.getElementById("title").value = "";
    document.getElementById("rt_score").value = "";
    document.getElementById("release_date").value = "";
    document.getElementById("busca").value= "";
    document.getElementById("producer").value= "";
    document.getElementById("director").value= "";
    }*/


//filtrar pelo input

function procurarNome(e) {
    e.preventDefault();
    mostrarCards(filtraNome(data.films, pesquisar.value));

}

pesquisar.addEventListener("keyup", procurarNome);

const rtScore = document.getElementById("rt_score");

function mediaScore() {
    
}

rtScore.addEventListener("click", mediaScore);

