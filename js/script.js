// Cadastro dos estilos
const estilos = {
    Boho: { identidade: "livre, artí­stica e natural", elementosVisuais: ["Tecidos fluidos", "Estampas", "Franjas", "Peças artesanais", "Tons terrosos"], caracteristicas: ["Criatividade", "Liberdade", "Expressividade"] },
    Casual: { identidade: "simples, confortável e versátil", elementosVisuais: ["Camisetas básicas", "Jeans", "Tênis", "Peças fáceis de combinar"], caracteristicas: ["Praticidade", "Conforto", "Versatilidade"] },
    Classico: { identidade: "atemporal, discreta e elegante", elementosVisuais: ["Camisas", "Alfaiataria", "Cortes tradicionais", "Cores equilibradas"], caracteristicas: ["Tradição", "Discrição", "Sofisticação"] },
    Punk: { identidade: "rebelde, provocativa e contestadora", elementosVisuais: ["Couro", "Correntes", "Estampas", "Peças rasgadas", "Botas"], caracteristicas: ["Ousadia", "Independência", "Inconformismo"] },
    Gotico: { identidade: "sombria, dramática e expressiva", elementosVisuais: ["Roupas escuras", "Botas", "Acessórios metálicos", "Tecidos diferenciados"], caracteristicas: ["Intensidade", "Mistério", "Expressão visual"] },
    HipHop: { identidade: "urbana, marcante e ligada à cultura hip-hop", elementosVisuais: ["Roupas largas", "Tênis", "Bonés", "Correntes", "Estampas"], caracteristicas: ["Atitude", "Expressividade", "Identidade cultural"] },
    Skaters: { identidade: "descontraí­da, funcional e urbana", elementosVisuais: ["Calças largas", "Camisetas gráficas", "Tênis de skate", "Moletons"], caracteristicas: ["Conforto", "Liberdade de movimento", "Informalidade"] },
    Streetwear: { identidade: "urbana, contemporânea e influenciada pela cultura de rua", elementosVisuais: ["Oversized", "Peças gráficas", "Sneakers", "Sobreposições", "Acessórios"], caracteristicas: ["Originalidade", "Tendências", "Expressão individual"] },
    Glam: { identidade: "sofisticada, chamativa e luxuosa", elementosVisuais: ["Brilho", "Tecidos marcantes", "Acessórios destacados", "Peças elegantes"], caracteristicas: ["Destaque", "Elegância", "Impacto visual"] },
    Country: { identidade: "rústica, inspirada na cultura western", elementosVisuais: ["Botas", "Jeans", "Camisas xadrez", "Couro", "Cintos"], caracteristicas: ["Tradição", "Rusticidade", "Referências western"] },
    Minimalista: { identidade: "simples, funcional e visualmente limpa", elementosVisuais: ["Poucas estampas", "Cortes limpos", "Cores neutras", "Poucos acessórios"], caracteristicas: ["Simplicidade", "Discrição", "Funcionalidade"] },
    OldMoney: { identidade: "refinada, discreta e inspirada na estática tradicional de elite", elementosVisuais: ["Polos", "Tricôs", "Alfaiataria", "Camisas", "Tecidos sofisticados"], caracteristicas: ["Elegância discreta", "Atemporalidade", "Qualidade visual"] },
    Grunge: { identidade: "despojada, alternativa e despreocupada", elementosVisuais: ["Flanelas", "Jeans desgastados", "Camisetas largas", "Sobreposições"], caracteristicas: ["Autenticidade", "Informalidade", "Individualidade"] }
};

// Mapas de respostas para pontuação
const mapaPersonalidade = {
    "Discreto e reservado": ["Classico", "Minimalista", "OldMoney"],
    "Comunicativo e extrovertido": ["Streetwear", "HipHop", "Glam"],
    "Criativo e espontâneo": ["Boho", "Grunge", "Punk", "Streetwear"],
    "Confiante e determinado": ["Classico", "Glam", "Punk", "Streetwear"],
    "Calmo e tranquilo": ["Casual", "Minimalista", "Skaters"],
    "Tradicional e conservador": ["Classico", "OldMoney", "Country"],
    "Ousado e aventureiro": ["Punk", "Gotico", "Glam", "HipHop"]
};

const mapaCores = {
    "Neutras": ["Minimalista", "Classico", "OldMoney", "Casual"],
    "Terrosas": ["Boho", "Country", "OldMoney"],
    "Frias": ["Gotico", "Minimalista", "Classico"],
    "Quentes": ["Boho", "Glam", "Country"],
    "Pasteis": ["Casual", "Classico", "Glam"],
    "Vibrantes": ["HipHop", "Streetwear", "Glam"],
    "Monocromaticas": ["Minimalista", "Classico", "Gotico"]
};

const mapaPecas = {
    "Camisetas básicas": ["Casual", "Minimalista"],
    "Camisetas estampadas": ["Streetwear", "Skaters", "Grunge"],
    "Camisas": ["Classico", "OldMoney", "Country"],
    "Polos": ["Classico", "OldMoney", "Casual"],
    "Regatas": ["Streetwear", "HipHop", "Skaters"],
    "Moletons": ["Streetwear", "Grunge", "Skaters"],
    "Jaquetas": ["Punk", "Grunge", "Streetwear"],
    "Suéteres": ["OldMoney", "Classico", "Casual"],
    "Calças jeans": ["Casual", "Grunge", "Country"],
    "Calças de alfaiataria": ["Classico", "OldMoney", "Glam"],
    "Calças cargo": ["Streetwear", "HipHop", "Skaters"],
    "Calças esportivas": ["Casual", "Skaters", "Streetwear"],
    "Shorts": ["Casual", "Streetwear", "Skaters"],
    "Saias e vestidos": ["Glam", "Boho", "Classico"],
    "Tênis casuais": ["Casual", "Streetwear"],
    "Tênis esportivos": ["Casual", "Skaters"],
    "Tênis de skate": ["Skaters", "Streetwear"],
    "Botas": ["Country", "Punk", "Gotico"],
    "Mocassins": ["Classico", "OldMoney"],
    "Sapatos sociais": ["Classico", "OldMoney", "Glam"],
    "Sandálias": ["Boho", "Casual"],
    "Oversized": ["Streetwear", "HipHop", "Skaters"],
    "Largas": ["Streetwear", "HipHop", "Grunge"],
    "Justas": ["Glam", "Classico"],
    "Regulares": ["Casual", "Minimalista"],
    "Relógios": ["Classico", "OldMoney"],
    "Correntes": ["Streetwear", "HipHop", "Punk"],
    "Anéis": ["Punk", "Gotico", "Glam"],
    "Pulseiras": ["Boho", "Streetwear"],
    "Bonés": ["Streetwear", "HipHop", "Skaters"],
    "Óculos de sol": ["Glam", "OldMoney", "Streetwear"],
    "Bolsas e mochilas": ["Casual", "Streetwear", "Boho"],
    "Cintos": ["Country", "Classico", "OldMoney"]
};

const looks = {
    1: { nome: "Urbano oversized", estilos: ["Streetwear", "Skaters"] },
    2: { nome: "Elegância discreta", estilos: ["OldMoney", "Classico"] },
    3: { nome: "Boêmio natural", estilos: ["Boho", "Grunge"] },
    4: { nome: "Alternativo escuro", estilos: ["Punk", "Gotico"] },
    5: { nome: "Casual minimalista", estilos: ["Casual", "Minimalista"] },
    6: { nome: "Hip-hop urbano", estilos: ["HipHop", "Streetwear"] },
    7: { nome: "Glam sofisticado", estilos: ["Glam", "Classico"] },
    8: { nome: "Country casual", estilos: ["Country", "Casual"] },
    9: { nome: "Grunge alternativo", estilos: ["Grunge", "Punk"] },
    10: { nome: "Boho western", estilos: ["Boho", "Country"] }
};

// Questionário

const etapasQuestionario = [
    {
        titulo: "Preferências básicas",
        perguntas: [
            { id: "apresentacao", texto: "Como você prefere que suas sugestôes de estilo sejam apresentadas?", tipo: "radio", opcoes: ["Masculina", "Feminina", "Unissex", "Sem preferência"] },
            { id: "idade", texto: "Qual é a sua faixa etária?", tipo: "radio", opcoes: ["Até 17 anos", "18 a 24 anos", "25 a 34 anos", "35 a 44 anos", "45 anos ou mais"] }
        ]
    },
    {
        titulo: "Personalidade",
        perguntas: [
            { id: "caracteristicas", texto: "Como você descreveria sua personalidade?", ajuda: "Selecione até 3 caracterí­sticas.", tipo: "checkbox", max: 3, opcoes: Object.keys(mapaPersonalidade) },
            { id: "atencaoVisual", texto: "Quanto você gosta de chamar atenção através das roupas?", tipo: "escala", opcoes: ["1", "2", "3", "4", "5"], legenda: "1 = Prefiro discrição - 5 = Gosto de destaque" },
            { id: "valoresVestir", texto: "O que mais valoriza ao se vestir?", ajuda: "Selecione até 3 opções.", tipo: "checkbox", max: 3, opcoes: ["Conforto", "Elegância", "Originalidade", "Praticidade", "Versatilidade", "Exclusividade", "Autenticidade"] },
            { id: "experimentacao", texto: "Quanto você gosta de experimentar combinações e estilos novos?", tipo: "escala", opcoes: ["1", "2", "3", "4", "5"], legenda: "1 = Não gosto de arriscar - 5 = Adoro experimentar" },
            { id: "tendencias", texto: "Qual opção mais combina com você?", tipo: "radio", opcoes: ["Prefiro peças atemporais", "Gosto de acompanhar tendências", "Crio minhas próprias combinações", "Misturo diferentes referências", "Não tenho preferência definida"] },
            { id: "pecaDiferente", texto: "Se gostar de uma peça diferente ou fora de tendência, você...", tipo: "radio", opcoes: ["Usaria sem preocupação", "Usaria se combinasse comigo", "Ficaria inseguro, mas talvez usasse", "Prefiro seguir tendências", "Depende da ocasião"] }
        ]
    },
    {
        titulo: "Rotina",
        perguntas: [
            { id: "ambientes", texto: "Quais ambientes fazem parte da sua rotina?", ajuda: "Selecione todos que se aplicam.", tipo: "checkbox", opcoes: ["Trabalho", "Faculdade ou escola", "Academia", "Passeios com amigos", "Festas e eventos sociais", "Restaurantes e shoppings", "Eventos formais", "Atividades ao ar livre", "Igreja ou ambiente religioso", "Passo a maior parte do tempo em casa", "Outros"] },
            { id: "ambientePrincipal", texto: "Qual ambiente ocupa a maior parte do seu dia?", tipo: "radio", opcoes: ["Trabalho", "Faculdade ou escola", "Academia", "Casa", "Lazer e passeios", "Minha rotina varia bastante"] },
            { id: "regrasVestimenta", texto: "Existem regras de vestimenta nos ambientes que frequenta?", tipo: "checkbox", opcoes: ["Preciso usar roupas formais", "Uso uniforme", "Existem algumas restrições", "Não tenho restrições", "Depende do ambiente"] },
            { id: "preferenciaDiaria", texto: "Como prefere se vestir no dia a dia?", tipo: "radio", opcoes: ["Priorizar conforto", "Estar bem vestido mesmo em situações simples", "Usar peças práticas e versáteis", "Gosto de montar combinações elaboradas", "Varia conforme a ocasião"] },
            { id: "tempoEscolhendoRoupas", texto: "Quanto tempo costuma levar para escolher o que vestir?", tipo: "radio", opcoes: ["Até 5 minutos", "5 a 10 minutos", "10 a 20 minutos", "Mais de 20 minutos"] }
        ]
    },
    {
        titulo: "Cores",
        perguntas: [
            { id: "favoritas", texto: "Quais cores você mais gosta de usar?", ajuda: "Selecione suas cores favoritas.", tipo: "checkbox", opcoes: ["Preto", "Branco", "Cinza", "Bege", "Marrom", "Vermelho", "Laranja", "Amarelo", "Verde", "Azul", "Roxo", "Rosa", "Oliva", "Caramelo"] },
            { id: "evitarCores", texto: "Existe alguma cor que você evita usar?", ajuda: "Se não evita nenhuma, selecione 'Nenhuma'.", tipo: "checkbox", opcoes: ["Preto", "Branco", "Cinza", "Bege", "Marrom", "Vermelho", "Laranja", "Amarelo", "Verde", "Azul", "Roxo", "Rosa", "Oliva", "Caramelo", "Nenhuma"] },
            { id: "combinacoes", texto: "Quais combinações de cores você prefere?", tipo: "checkbox", opcoes: ["Neutras", "Terrosas", "Frias", "Quentes", "Pasteis", "Vibrantes", "Monocromaticas", "Não tenho preferência"] },
            { id: "misturaCores", texto: "Quanto gosta de misturar cores diferentes no mesmo look?", tipo: "escala", opcoes: ["1", "2", "3", "4", "5"], legenda: "1 = Poucas cores - 5 = Muitas cores" },
            { id: "confiancaCores", texto: "Quão confiante se sente combinando cores?", tipo: "escala", opcoes: ["1", "2", "3", "4", "5"], legenda: "1 = Tenho dificuldade - 5 = Tenho bastante confiançaa" }
        ]
    },
    {
        titulo: "Peças favoritas",
        perguntas: [
            { id: "roupas", texto: "Quais peças você mais gosta de usar?", tipo: "checkbox", opcoes: ["Camisetas básicas", "Camisetas estampadas", "Camisas", "Polos", "Regatas", "Moletons", "Jaquetas", "Suéteres", "Calças jeans", "Calças de alfaiataria", "Calças cargo", "Calças esportivas", "Shorts", "Saias e vestidos"] },
            { id: "calcados", texto: "Quais tipos de calçado você prefere?", tipo: "checkbox", opcoes: ["Tênis casuais", "Tênis esportivos", "Tênis de skate", "Botas", "Mocassins", "Sapatos sociais", "Sandálias"] },
            { id: "modelagem", texto: "Qual modelagem prefere?", tipo: "radio", opcoes: ["Justas", "Regulares", "Largas", "Oversized"] },
            { id: "acessorios", texto: "Quais acessórios costuma usar ou gostaria de usar?", tipo: "checkbox", opcoes: ["Relógios", "Correntes", "Anéis", "Pulseiras", "Bonés", "Óculos de sol", "Bolsas e mochilas", "Cintos", "Nenhum"] },
            { id: "evitarPecas", texto: "O que você prefere evitar nas roupas?", tipo: "checkbox", opcoes: ["Peças muito justas", "Peças muito largas", "Estampas chamativas", "Cores muito vibrantes", "Roupas formais", "Roupas esportivas", "Muitos detalhes", "Tecidos especí­ficos", "Não evito nada"] }
        ]
    },
    {
        titulo: "Avaliação visual",
        perguntas: [
        ]
    },
    {
        titulo: "Personalização",
        perguntas: [
            { id: "orcamento", texto: "Qual faixa de orçamento costuma considerar para comprar roupas?", tipo: "radio", opcoes: ["Até R$ 100", "R$ 100 a R$ 250", "R$ 250 a R$ 500", "R$ 500 a R$ 1.000", "Acima de R$ 1.000", "Não tenho orçamento fixo"] },
            { id: "prioridades", texto: "O que mais prioriza ao comprar roupas?", ajuda: "Selecione até 3.", tipo: "checkbox", max: 3, opcoes: ["Preço", "Qualidade e durabilidade", "Aparência", "Conforto", "Marca", "Exclusividade", "Versatilidade"] },
            { id: "frequenciaCompras", texto: "Com que frequência costuma comprar roupas?", tipo: "radio", opcoes: ["Toda semana", "Várias vezes por mês", "Uma vez por mês", "A cada alguns meses", "Somente quando preciso"] },
            { id: "aberturaNovidades", texto: "Quanto estaria disposto a sair da sua zona de conforto?", tipo: "escala", opcoes: ["1", "2", "3", "4", "5"], legenda: "1 = Prefiro manter meu estilo - 5 = Quero explorar novidades" },
            { id: "objetivo", texto: "Qual é seu principal objetivo com o STYLE LAB?", tipo: "radio", opcoes: ["Descobrir minha identidade visual", "Melhorar meu visual no dia a dia", "Aprender a combinar roupas e cores", "Montar um guarda-roupa versátil", "Acompanhar tendências", "Me vestir para ocasiões", "Renovar meu guarda-roupa"] }
        ]
    }
];

// Estado das respostas e avaliações
const respostasQuestionario = {};
const avaliacoesLooks = {};
let etapaAtual = 0;
let perguntaAtual = 0;
let lookAtual = 1;
let parcialSelecionado = [];

// Pontuação
const pontuacaoEstilos = {};
const pontuacoesEtapas = { personalidade: {}, cores: {}, pecas: {}, visual: {} };
const pesosEtapas = { personalidade: 15, cores: 15, pecas: 25, visual: 30 };
Object.keys(estilos).forEach(estilo => {
    pontuacaoEstilos[estilo] = 0;
    Object.keys(pontuacoesEtapas).forEach(etapa => pontuacoesEtapas[etapa][estilo] = 0);
});

function adicionarPontos(etapa, estilo, pontos) {
    if (pontuacoesEtapas[etapa] && pontuacoesEtapas[etapa][estilo] !== undefined) {
        pontuacoesEtapas[etapa][estilo] += pontos;
    }
}

function calcularPontuacao() {
    Object.keys(pontuacoesEtapas).forEach(etapa => {
        Object.keys(pontuacoesEtapas[etapa]).forEach(estilo => pontuacoesEtapas[etapa][estilo] = 0);
    });
    Object.keys(estilos).forEach(estilo => pontuacaoEstilos[estilo] = 0);

    (respostasQuestionario.caracteristicas || []).forEach(resposta => {
        (mapaPersonalidade[resposta] || []).forEach(estilo => adicionarPontos("personalidade", estilo, 1));
    });

    (respostasQuestionario.combinacoes || []).filter(item => item !== "Não tenho preferência")
        .forEach(combinacao => (mapaCores[combinacao] || []).forEach(estilo => adicionarPontos("cores", estilo, 1)));

    const respostasPecas = [
        ...(respostasQuestionario.roupas || []),
        ...(respostasQuestionario.calcados || []),
        ...(respostasQuestionario.acessorios || []).filter(item => item !== "Nenhum"),
        respostasQuestionario.modelagem || ""
    ];
    respostasPecas.forEach(resposta => (mapaPecas[resposta] || []).forEach(estilo => adicionarPontos("pecas", estilo, 1)));

    Object.entries(avaliacoesLooks).forEach(([idLook, avaliacao]) => {
        if (avaliacao.tipo === "curti") (looks[idLook].estilos || []).forEach(estilo => adicionarPontos("visual", estilo, 3));
        if (avaliacao.tipo === "nao_curti") (looks[idLook].estilos || []).forEach(estilo => adicionarPontos("visual", estilo, -2));
        if (avaliacao.tipo === "algumas_pecas") (looks[idLook].estilos || []).forEach(estilo => adicionarPontos("visual", estilo, 1));
    });

    const etapasUsadas = ["personalidade", "cores", "pecas", "visual"];
    const pesoTotal = etapasUsadas.reduce((total, etapa) => total + pesosEtapas[etapa], 0);

    Object.keys(estilos).forEach(estilo => {
        let total = 0;
        etapasUsadas.forEach(etapa => {
            const valores = Object.values(pontuacoesEtapas[etapa]);
            const maior = Math.max(0, ...valores);
            const menor = Math.min(0, ...valores);
            let normalizada = 0;
            if (maior > 0) normalizada = (pontuacoesEtapas[etapa][estilo] / maior) * 100;
            if (menor < 0 && pontuacoesEtapas[etapa][estilo] < 0) {
                normalizada = Math.max(0, normalizada);
            }
            total += normalizada * pesosEtapas[etapa];
        });
        pontuacaoEstilos[estilo] = total / pesoTotal;
    });
    return Object.entries(pontuacaoEstilos).sort((a, b) => b[1] - a[1]);
}

// Funções de interface
const introducao = document.getElementById("introducao");
const areaPerguntas = document.getElementById("areaPerguntas");
const conteudoPergunta = document.getElementById("conteudoPergunta");
const iniciarQuestionario = document.getElementById("iniciarQuestionario");
const proximaPergunta = document.getElementById("proximaPergunta");
const voltarPergunta = document.getElementById("voltarPergunta");
const etapaAtualTexto = document.getElementById("etapaAtual");
const barraProgresso = document.getElementById("barraProgresso");

function escaparHTML(texto) {
    return String(texto).replace(/[&<>"']/g, caractere => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[caractere]));
}

function atualizarNavegacao() {
    if (!etapaAtualTexto || !barraProgresso) return;
    etapaAtualTexto.textContent = `Etapa ${etapaAtual + 1} de ${etapasQuestionario.length}`;
    barraProgresso.value = etapaAtual + 1;
    barraProgresso.max = etapasQuestionario.length;
    voltarPergunta.disabled = etapaAtual === 0 && perguntaAtual === 0;
    proximaPergunta.textContent = (etapaAtual === etapasQuestionario.length - 1 &&
        perguntaAtual === etapasQuestionario[etapaAtual].perguntas.length - 1) ? "Finalizar" : "Próxima";
}

function perguntaAtualObjeto() {
    return etapasQuestionario[etapaAtual].perguntas[perguntaAtual];
}

function renderizarPergunta() {
    if (etapaAtual === 5) {
        renderizarLook();
        atualizarNavegacao();
        return;
    }

    const pergunta = perguntaAtualObjeto();
    if (!pergunta) return;

    const respostaSalva = respostasQuestionario[pergunta.id];
    const valoresSalvos = Array.isArray(respostaSalva) ? respostaSalva : (respostaSalva !== undefined ? [respostaSalva] : []);

    let html = `<h2>${escaparHTML(pergunta.texto)}</h2>`;
    if (pergunta.ajuda) html += `<p>${escaparHTML(pergunta.ajuda)}</p>`;
    if (pergunta.legenda) html += `<p>${escaparHTML(pergunta.legenda)}</p>`;

    html += `<div class="opcoes-pergunta">`;
    pergunta.opcoes.forEach(opcao => {
        const selecionada = valoresSalvos.includes(opcao) ? "checked" : "";
        const tipoInput = pergunta.tipo === "checkbox" ? "checkbox" : "radio";
        const nameInput = pergunta.tipo === "checkbox" ? pergunta.id : "respostaAtual";
        html += `
            <label class="opcao-questionario">
                <input type="${tipoInput}" name="${nameInput}" value="${escaparHTML(opcao)}" ${selecionada}>
                <span>${escaparHTML(opcao)}</span>
            </label>`;
    });
    html += `</div>`;

    conteudoPergunta.innerHTML = html;

    if (pergunta.tipo === "checkbox" && pergunta.max) {
        const caixas = [...conteudoPergunta.querySelectorAll(`input[name="${pergunta.id}"]`)];
        caixas.forEach(caixa => caixa.addEventListener("change", () => {
            const marcadas = caixas.filter(item => item.checked);
            if (marcadas.length > pergunta.max) {
                caixa.checked = false;
                alert(`Você pode selecionar até ${pergunta.max} opções.`);
            }
        }));
    }
    atualizarNavegacao();
}

function salvarRespostaAtual() {
    if (etapaAtual === 5) return true;
    const pergunta = perguntaAtualObjeto();
    const entradas = conteudoPergunta.querySelectorAll("input:checked");
    const respostas = [...entradas].map(entrada => entrada.value);

    if (respostas.length === 0) {
        alert("Selecione pelo menos uma opção para continuar.");
        return false;
    }

    if (pergunta.tipo === "checkbox" && pergunta.max && respostas.length > pergunta.max) {
        alert(`Selecione no máximo ${pergunta.max} opções.`);
        return false;
    }
    respostasQuestionario[pergunta.id] = pergunta.tipo === "checkbox" ? respostas : respostas[0];
    return true;
}

function renderizarLook() {
    const look = looks[lookAtual];
    const avaliacaoSalva = avaliacoesLooks[lookAtual]?.tipo || "";
    const pecas = ["Parte de cima", "Calça ou shorts", "Calçado", "Jaqueta ou sobreposição", "Acessórios"];
    conteudoPergunta.innerHTML = `
        <div class="avaliacao-look">
            <h2>Look ${lookAtual} de ${Object.keys(looks).length}</h2>
            <h3>${escaparHTML(look.nome)}</h3>
            <p>Referências de estilo: ${look.estilos.map(escaparHTML).join(" - ")}</p>
            <div class="look-placeholder">
                <p>Imagem de inspiração</p>
                <p>${escaparHTML(look.nome)}</p>
                <small>.Adicionar imagem</small>
            </div>
            <p>O que você achou dessa combinação?</p>
            <div class="opcoes-look">
                <label class="opcao-questionario"><input type="radio" name="avaliacaoLook" value="curti" ${avaliacaoSalva === "curti" ? "checked" : ""}> Gostei do look</label>
                <label class="opcao-questionario"><input type="radio" name="avaliacaoLook" value="nao_curti" ${avaliacaoSalva === "nao_curti" ? "checked" : ""}> Não gostei</label>
                <label class="opcao-questionario"><input type="radio" name="avaliacaoLook" value="algumas_pecas" ${avaliacaoSalva === "algumas_pecas" ? "checked" : ""}> Gostei de algumas peças</label>
            </div>
            <div id="pecasParciais" ${avaliacaoSalva === "algumas_pecas" ? "" : "hidden"}>
                <p>Quais peças você gostou? (selecione pelo menos uma)</p>
                ${pecas.map(peca => `<label class="opcao-questionario"><input type="checkbox" name="pecaLook" value="${escaparHTML(peca)}" ${avaliacoesLooks[lookAtual]?.pecas?.includes(peca) ? "checked" : ""}> ${escaparHTML(peca)}</label>`).join("")}
            </div>
        </div>`;
    const radioParcial = conteudoPergunta.querySelector('input[value="algumas_pecas"]');
    const blocoParcial = conteudoPergunta.querySelector("#pecasParciais");
    radioParcial.addEventListener("change", () => blocoParcial.hidden = !radioParcial.checked);
    conteudoPergunta.querySelectorAll('input[name="avaliacaoLook"]').forEach(radio => {
        radio.addEventListener("change", () => {
            blocoParcial.hidden = radio.value !== "algumas_pecas";
        });
    });
}

function salvarAvaliacaoLook() {
    const escolha = conteudoPergunta.querySelector('input[name="avaliacaoLook"]:checked');
    if (!escolha) {
        alert("Escolha uma avaliação para este look.");
        return false;
    }
    const pecas = [...conteudoPergunta.querySelectorAll('input[name="pecaLook"]:checked')].map(item => item.value);
    if (escolha.value === "algumas_pecas" && pecas.length === 0) {
        alert("Selecione pelo menos uma peça que você gostou.");
        return false;
    }
    avaliacoesLooks[lookAtual] = { tipo: escolha.value, pecas };
    return true;
}

function mostrarResultado() {
    const resultado = calcularPontuacao();
    const top3 = resultado.slice(0, 3);
    const primeiro = top3[0][0];

    conteudoPergunta.innerHTML = `
        <div class="resultado-questionario">
            <h2>Seu resultado está pronto!</h2>
            <p>Com base nas suas respostas, estes estilos se aproximam das suas preferências:</p>
            <div class="resultado-principal">
                <h3>${escaparHTML(primeiro)}</h3>
                <p>${escaparHTML(estilos[primeiro].identidade)}</p>
                <ul>${estilos[primeiro].elementosVisuais.map(item => `<li>${escaparHTML(item)}</li>`).join("")}</ul>
            </div>
            <h3>Outros estilos que combinam com você</h3>
            <div class="resultado-lista">
                ${top3.slice(1).map(([nome]) => `
                    <article class="resultado-card">
                        <h4>${escaparHTML(nome)}</h4>
                        <p>${escaparHTML(estilos[nome].identidade)}</p>
                        <p>${estilos[nome].elementosVisuais.map(escaparHTML).join(" - ")}</p>
                    </article>`).join("")}
            </div>
            <p>Seu resultado é uma referência inicial. Você pode combinar diferentes estilos e adaptar as sugestões à sua personalidade.</p>
            <button type="button" id="reiniciarQuestionario">Refazer questionário</button>
        </div>`;
    conteudoPergunta.querySelector("#reiniciarQuestionario").addEventListener("click", reiniciarQuestionario);
    proximaPergunta.hidden = true;
    voltarPergunta.hidden = true;
    etapaAtualTexto.textContent = "Resultado";
    barraProgresso.value = etapasQuestionario.length;
}

function reiniciarQuestionario() {
    Object.keys(respostasQuestionario).forEach(chave => delete respostasQuestionario[chave]);
    Object.keys(avaliacoesLooks).forEach(chave => delete avaliacoesLooks[chave]);
    etapaAtual = 0;
    perguntaAtual = 0;
    lookAtual = 1;
    introducao.hidden = false;
    areaPerguntas.hidden = true;
    proximaPergunta.hidden = false;
    voltarPergunta.hidden = false;
    renderizarPergunta();
}

function avancar() {
    if (etapaAtual === 5) {
        if (!salvarAvaliacaoLook()) return;
        if (lookAtual < Object.keys(looks).length) {
            lookAtual++;
            renderizarPergunta();
        } else {
            etapaAtual++;
            perguntaAtual = 0;
            renderizarPergunta();
        }
        return;
    }

    if (!salvarRespostaAtual()) return;

    const perguntasDaEtapa = etapasQuestionario[etapaAtual].perguntas;
    if (perguntaAtual < perguntasDaEtapa.length - 1) {
        perguntaAtual++;
    } else if (etapaAtual < etapasQuestionario.length - 1) {
        etapaAtual++;
        perguntaAtual = 0;
    } else {
        mostrarResultado();
        return;
    }
    renderizarPergunta();
}

function voltar() {
    if (etapaAtual === 5) {
        if (lookAtual > 1) {
            lookAtual--;
        } else {
            etapaAtual--;
            perguntaAtual = etapasQuestionario[etapaAtual].perguntas.length - 1;
        }
    } else if (perguntaAtual > 0) {
        perguntaAtual--;
    } else if (etapaAtual > 0) {
        etapaAtual--;
        perguntaAtual = etapasQuestionario[etapaAtual].perguntas.length - 1;
        if (etapaAtual === 5) lookAtual = Object.keys(looks).length;
    } else {
        return;
    }
    renderizarPergunta();
}

iniciarQuestionario.addEventListener("click", () => {
    introducao.hidden = true;
    areaPerguntas.hidden = false;
    etapaAtual = 0;
    perguntaAtual = 0;
    lookAtual = 1;
    renderizarPergunta();
});

proximaPergunta.addEventListener("click", avancar);
voltarPergunta.addEventListener("click", voltar);

// Exibe os dados dos estilos no console para consulta durante desenvolvimento.
console.log("STYLE LAB carregado. Estilos disponí­veis:", Object.keys(estilos));