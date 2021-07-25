import data from "./data/ghibli/ghibli.js";

function mostrarCards(data) {
  document.getElementById("cards-filmes").innerHTML = data
    .map(
      (item) => `
        <div class="filmes">
          <div class="img-poster">
            <img src="${item.poster}">
            <div class="titulo-filmes">${item.title}</div>
          </div>
        </div>`
    )
    .join("");
}
mostrarCards(data.films);

/*function mostrarInformacoesCards(data) {
    document.getElementById('cardsInformacoes').innerHTML = data.map((item) => `
    <div class="cardBack">
        <ul class="informacoes">
          <li>Descrição:${item.description}</li>
          <li>Diretor:${item.director}</li>
          <li>Ano de Lançamento:${item.release_date}</li>
          <li>RT Score:${item.rt_score}</li>
        </ul>
    </div>`
    )
}

mostrarInformacoesCards(data.films);*/
