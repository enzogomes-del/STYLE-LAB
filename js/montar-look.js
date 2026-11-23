
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

// Elementos extras do preview: progresso e paleta de cores
const previewStatus = document.createElement("div");
previewStatus.classList.add("preview-status");
previewConteudo.insertAdjacentElement("afterend", previewStatus);

// Ordem fixa das categorias no preview
const ordemCategorias = ["camisas", "calcas", "calcados", "acessorios"];
const nomesCategorias = {
    camisas: "Parte de cima",
    calcas: "Parte de baixo",
    calcados: "Calçados",
    acessorios: "Acessórios"
};

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
    previewStatus.innerHTML = "";

    const categorias = ordemCategorias.filter(categoria => lookSelecionado[categoria]);

    if (categorias.length === 0) {
        previewConteudo.innerHTML = `
            <div class="preview-vazio">
                <span>＋</span>
                <p>Selecione peças para visualizar sua combinação.</p>
            </div>
        `;
        previewStatus.innerHTML = `
            <div class="preview-progresso">
                <div class="progresso-texto"><span>Seu look</span><strong>0 de 4 categorias</strong></div>
                <div class="progresso-trilho"><span style="width: 0%"></span></div>
            </div>
        `;
        listaSelecionadas.innerHTML = "<li>Nenhuma peça selecionada.</li>";
        return;
    }

    categorias.forEach(categoria => {
        const peca = lookSelecionado[categoria];
        const itemPreview = document.createElement("div");
        itemPreview.classList.add("preview-item");
        itemPreview.style.setProperty("--cor-peca", peca.cor);
        itemPreview.innerHTML = `
            <span class="preview-categoria">${nomesCategorias[categoria]}</span>
            <div class="preview-visual"><span class="peca-icone">${peca.icone}</span></div>
            <p>${peca.nome}</p>
            <span class="preview-cor" style="background-color: ${peca.cor}" title="Cor da peça"></span>
        `;
        previewConteudo.appendChild(itemPreview);

        const itemLista = document.createElement("li");
        itemLista.textContent = `${nomesCategorias[categoria]}: ${peca.nome}`;
        listaSelecionadas.appendChild(itemLista);
    });


    const total = categorias.length;
    const porcentagem = (total / ordemCategorias.length) * 100;
    const cores = categorias.map(categoria => lookSelecionado[categoria].cor);
    previewStatus.innerHTML = `
        <div class="preview-progresso">
            <div class="progresso-texto"><span>Composição do look</span><strong>${total} de 4 categorias</strong></div>
            <div class="progresso-trilho"><span style="width: ${porcentagem}%"></span></div>
        </div>
        <div class="preview-paleta">
            <span>Paleta selecionada</span>
            <div class="paleta-cores">${cores.map(cor => `<span style="background-color: ${cor}" title="${cor}"></span>`).join("")}</div>
        </div>
    `;
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
