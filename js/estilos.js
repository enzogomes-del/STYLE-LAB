
// Elementos da página
const pesquisaEstilo = document.getElementById("pesquisaEstilo");
const filtrosEstilos = document.querySelectorAll(".filtro-estilo");
const cardsEstilos = document.querySelectorAll(".card-estilo-catalogo");
const contadorEstilos = document.getElementById("contadorEstilos");
const mensagemVazia = document.getElementById("mensagemVazia");

// Filtro atualmente selecionado
let filtroAtual = "todos";

// Função para pesquisar e filtrar os estilos
function filtrarEstilos() {
    const textoPesquisa = pesquisaEstilo.value.toLowerCase().trim();
    let quantidadeVisivel = 0;

    cardsEstilos.forEach(card => {
        const nomeEstilo = card.dataset.nome.toLowerCase();
        const categoriaEstilo = card.dataset.categoria;

        const correspondePesquisa = nomeEstilo.includes(textoPesquisa);

        const correspondeFiltro =
            filtroAtual === "todos" ||
            categoriaEstilo === filtroAtual;

        if (correspondePesquisa && correspondeFiltro) {
            card.style.display = "";
            quantidadeVisivel++;
        } else {
            card.style.display = "none";
        }
    });

    // Atualiza o contador de resultados
    contadorEstilos.textContent =
        `${quantidadeVisivel} ${quantidadeVisivel === 1 ? "estilo encontrado" : "estilos encontrados"}`;

    // Exibe mensagem caso não existam resultados
    mensagemVazia.hidden = quantidadeVisivel !== 0;
}

// Evento de pesquisa
pesquisaEstilo.addEventListener("input", filtrarEstilos);

// Eventos dos botões de filtro
filtrosEstilos.forEach(botao => {
    botao.addEventListener("click", () => {

        // Remove a seleção dos outros botões
        filtrosEstilos.forEach(filtro => {
            filtro.classList.remove("ativo");
        });

        // Ativa o botão clicado
        botao.classList.add("ativo");

        // Atualiza a categoria escolhida
        filtroAtual = botao.dataset.filtro;

        // Aplica o filtro
        filtrarEstilos();
    });
});

// Executa a filtragem inicial
filtrarEstilos();
