const trilho = document.querySelector(".carrossel-trilho");
const cards = document.querySelectorAll(".carrossel-trilho .card-estilo");
const indicadores = document.querySelectorAll(".indicador");
const botaoAnterior = document.querySelector(".carrossel-seta.anterior");
const botaoProximo = document.querySelector(".carrossel-seta.proximo");

let estiloAtual = 0;

function atualizarCarrossel() {

    trilho.style.transform = `translateX(-${estiloAtual * 100}%)`;

    indicadores.forEach((indicador, index) => {
        indicador.classList.toggle("ativo", index === estiloAtual);
    });

}

botaoProximo.addEventListener("click", () => {

    estiloAtual++;

    if (estiloAtual >= cards.length) {
        estiloAtual = 0;
    }

    atualizarCarrossel();

});

botaoAnterior.addEventListener("click", () => {

    estiloAtual--;

    if (estiloAtual < 0) {
        estiloAtual = cards.length - 1;
    }

    atualizarCarrossel();

});

indicadores.forEach((indicador, index) => {

    indicador.addEventListener("click", () => {
        estiloAtual = index;
        atualizarCarrossel();
    });

});