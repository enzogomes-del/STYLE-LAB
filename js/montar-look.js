
const pecas = {
    camisas: [
        { nome: "Camiseta básica", descricao: "Versátil e essencial", icone: "👕", cor: "#E9E1D5" },
        { nome: "Camisa social", descricao: "Elegante e alinhada", icone: "👔", cor: "#B8A38B" },
        { nome: "Moletom", descricao: "Conforto e casualidade", icone: "🧥", cor: "#786553" },
        { nome: "Regata", descricao: "Leve e descontraída", icone: "🎽", cor: "#292725" }
    ],

    calcas: [
        { nome: "Calça jeans", descricao: "Clássica e versátil", icone: "👖", cor: "#536B91" },
        { nome: "Calça cargo", descricao: "Utilitária e urbana", icone: "👖", cor: "#6B7561" },
        { nome: "Calça alfaiataria", descricao: "Visual sofisticado", icone: "👖", cor: "#9A8066" },
        { nome: "Shorts", descricao: "Leve e confortável", icone: "🩳", cor: "#B8A38B" }
    ],

    calcados: [
        { nome: "Tênis casual", descricao: "Para o dia a dia", icone: "👟", cor: "#E9E1D5" },
        { nome: "Tênis esportivo", descricao: "Conforto e movimento", icone: "👟", cor: "#6B7561" },
        { nome: "Bota", descricao: "Presença e personalidade", icone: "🥾", cor: "#786553" },
        { nome: "Sapato social", descricao: "Clássico e elegante", icone: "👞", cor: "#292725" }
    ],

    acessorios: [
        { nome: "Relógio", descricao: "Um detalhe atemporal", icone: "⌚", cor: "#9A8066" },
        { nome: "Boné", descricao: "Toque urbano", icone: "🧢", cor: "#6B7561" },
        { nome: "Óculos", descricao: "Personalidade no visual", icone: "🕶️", cor: "#292725" },
        { nome: "Mochila", descricao: "Praticidade e estilo", icone: "🎒", cor: "#786553" }
    ]
};

// Elementos
const pecasDisponiveis = document.getElementById("pecasDisponiveis");
const botoesCategoria = document.querySelectorAll(".categoria-roupa");
const previewConteudo = document.getElementById("previewConteudo");
const listaSelecionadas = document.getElementById("listaSelecionadas");
const limparLook = document.getElementById("limparLook");
const salvarLook = document.getElementById("salvarLook");
const mensagemLook = document.getElementById("mensagemLook");

// Peças escolhidas pelo usuário
let categoriaAtual = "camisas";
let lookSelecionado = {};

// Mostrar peças da categoria
function mostrarPecas(categoria) {
    pecasDisponiveis.innerHTML = "";

    pecas[categoria].forEach(peca => {
        const card = document.createElement("article");
        card.classList.add("peca-look");

        const selecionada = lookSelecionado[categoria]?.nome === peca.nome;

        if (selecionada) {
            card.classList.add("selecionada");
        }

        card.innerHTML = `
            <div class="peca-icone">${peca.icone}</div>
            <h3>${peca.nome}</h3>
            <p>${peca.descricao}</p>
            <span class="peca-cor" style="background-color: ${peca.cor}"></span>
        `;

        card.addEventListener("click", () => {
            selecionarPeca(categoria, peca);
        });

        pecasDisponiveis.appendChild(card);
    });
}

// Selecionar ou remover peça
function selecionarPeca(categoria, peca) {
    if (lookSelecionado[categoria]?.nome === peca.nome) {
        delete lookSelecionado[categoria];
    } else {
        lookSelecionado[categoria] = peca;
    }

    mensagemLook.textContent = "";
    mostrarPecas(categoriaAtual);
    atualizarPreview();
}

// Atualizar a visualização do look
function atualizarPreview() {
    previewConteudo.innerHTML = "";
    listaSelecionadas.innerHTML = "";

    const categorias = Object.keys(lookSelecionado);

    if (categorias.length === 0) {
        previewConteudo.innerHTML = `
            <div class="preview-vazio">
                <span>＋</span>
                <p>Selecione peças para visualizar sua combinação.</p>
            </div>
        `;

        listaSelecionadas.innerHTML = "<li>Nenhuma peça selecionada.</li>";
        return;
    }

    categorias.forEach(categoria => {
        const peca = lookSelecionado[categoria];

        const itemPreview = document.createElement("div");
        itemPreview.classList.add("preview-item");

        itemPreview.innerHTML = `
            <div class="peca-icone">${peca.icone}</div>
            <p>${peca.nome}</p>
            <span class="peca-cor" style="background-color: ${peca.cor}"></span>
        `;

        previewConteudo.appendChild(itemPreview);

        const itemLista = document.createElement("li");
        itemLista.textContent = peca.nome;
        listaSelecionadas.appendChild(itemLista);
    });
}

// Trocar categoria
botoesCategoria.forEach(botao => {
    botao.addEventListener("click", () => {
        botoesCategoria.forEach(item => item.classList.remove("ativo"));

        botao.classList.add("ativo");
        categoriaAtual = botao.dataset.categoria;

        mensagemLook.textContent = "";
        mostrarPecas(categoriaAtual);
    });
});

// Limpar todas as peças
limparLook.addEventListener("click", () => {
    lookSelecionado = {};
    mensagemLook.textContent = "";
    mostrarPecas(categoriaAtual);
    atualizarPreview();
});

// Salvar combinação no navegador
salvarLook.addEventListener("click", () => {
    if (Object.keys(lookSelecionado).length === 0) {
        mensagemLook.textContent = "Selecione pelo menos uma peça antes de salvar.";
        return;
    }

    const looksSalvos = JSON.parse(localStorage.getItem("styleLabLooks") || "[]");

    looksSalvos.push({
        data: new Date().toLocaleDateString("pt-BR"),
        pecas: { ...lookSelecionado }
    });

    localStorage.setItem("styleLabLooks", JSON.stringify(looksSalvos));

    mensagemLook.textContent = "Sua combinação foi salva neste navegador!";
});

// Inicialização
mostrarPecas(categoriaAtual);
atualizarPreview();
