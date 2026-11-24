const botaoTema = document.getElementById("botao-tema");
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo) {
    document.documentElement.setAttribute("data-tema", temaSalvo);
}

function atualizarBotaoTema() {
    const temaAtual = document.documentElement.getAttribute("data-tema");

    if (temaAtual === "escuro") {
        botaoTema.textContent = "☀️ Modo claro";
    } else {
        botaoTema.textContent = "🌙 Modo escuro";
    }
}

atualizarBotaoTema();

botaoTema.addEventListener("click", () => {
    const temaAtual = document.documentElement.getAttribute("data-tema");

    const novoTema = temaAtual === "escuro" ? "claro" : "escuro";

    document.documentElement.setAttribute("data-tema", novoTema);

    localStorage.setItem("tema", novoTema);

    atualizarBotaoTema();
});