// especificação de cada estilo

const estilos = {
    Boho: {
        identidade: "livre, artística e natural",

        elementosVisuais: [
            "Tecidos fluidos",
            "Estampas",
            "Franjas",
            "Peças artesanais",
            "Tons terrosos"
        ],

        caracteristicas: [
            "Criatividade",
            "Liberdade",
            "Expressividade"
        ],
    },

    Casual: {
        identidade: "simples, confortável e versátil",

        elementosVisuais: [
            "Camisetas básicas",
            "Jeans",
            "Tênis",
            "Peças fáceis de combinar"
        ],

        caracteristicas: [
            "Praticidade",
            "Conforto",
            "Versatilidade"
        ],
    },

    Classico: {
        identidade: "atemporal, discreta e elegante",

        elementosVisuais: [
            "Camisas",
            "Alfaiataria",
            "Cortes tradicionais",
            "Cores equilibradas"
        ],
        
        caracteristicas: [
            "Tradição",
            "Discrição",
            "Sofisticação"
        ],
    },

    Punk: {
        identidade: "rebelde, provocativa e contestadora",

        elementosVisuais: [
            "Couro",
            "Correntes",
            "Estampas",
            "Peças rasgadas",
            "Botas"
        ],

        caracteristicas: [
            "Ousadia",
            "Independência",
            "Inconformismo"
        ],
    },

    Gotico: {
        identidade: "sombria, dramática e expressiva",

        elementosVisuais: [ 
            "Roupas escuras",
            "Botas",
            "Acessórios metálicos",
            "Tecidos diferenciados"
        ],

        caracteristicas: [
            "Intensidade",
            "Mistério",
            "Expressão visual"
        ],
    },

    HipHop: {
        identidade: "urbana, marcante e ligada à cultura hip-hop",

        elementosVisuais: [
            "Roupas largas",
            "Tênis",
            "Bonés", 
            "Correntes",
            "Estampas"
        ],

        caracteristicas: [
            "Atitude", 
            "Expressividade",
            "Identidade cultural"
        ],
    },

    Skaters: {
        identidade: "descontraída, funcional e urbana",

        elementosVisuais: [
            "Calças largas", 
            "Camisetas gráficas", 
            "Tênis de skate",
            "Moletons"
        ],

        caracteristicas: [
            "Conforto", 
            "Liberdade de movimento",
            "Informalidade"
        ],
    },

    Streetwear: {
        identidade: "urbana, contemporânea e influenciada pela cultura de rua",

        elementosVisuais: [
            "Oversized", 
            "Peças gráficas", 
            "Sneakers", 
            "Sobreposições",
            "Acessórios"
        ],

        caracteristicas: [
            "Originalidade", 
            "Tendências",
            "Expressão individual"
        ],
    },

    Glam: {
        identidade: "sofisticada, chamativa e luxuosa",

        elementosVisuais: [
            "Brilho", 
            "Tecidos marcantes", 
            "Acessórios destacados",
            "Peças elegantes"
        ],

        caracteristicas: [
            "Destaque", 
            "Elegância",
            "Impacto visual"
        ],
    },

    Country: {
        identidade: "rústica, inspirada na cultura western",

        elementosVisuais: [
            "Botas", 
            "Jeans", 
            "Camisas xadrez", 
            "Couro",
            "Cintos"
        ],

        caracteristicas: [
            "Tradição", 
            "Rusticidade",
            "Referências western"
        ],
    },

    Minimalista: {
        identidade: "simples, funcional e visualmente limpa",

        elementosVisuais: [
            "Poucas estampas",
            "Cortes limpos", 
            "Cores neutras",
            "Poucos acessórios"
        ],

        caracteristicas: [
            "Simplicidade", 
            "Discrição",
            "Funcionalidade"
        ],
    },

    OldMoney: {
        identidade: "refinada, discreta e inspirada na estética tradicional de elite",

        elementosVisuais: [
            "Polos", 
            "Tricôs", 
            "Alfaiataria", 
            "Camisas",
            "Tecidos de aparência sofisticada"
        ],

        caracteristicas: [
            "Elegância discreta", 
            "Atemporalidade",
            "Qualidade visual"
        ],
    },

    Grunge: {
        identidade: "despojada, alternativa e despreocupada",

        elementosVisuais: [
            "Flanelas",
            "Jeans desgastados",
            "Camisetas largas",
            "Sobreposições"
        ],

        caracteristicas: [
            "Autenticidade",
            "Informalidade",
            "Individualidade"
        ],
    },
};


// exbibição de todos os estilos e suas características

for (let estilo in estilos) {
    console.log("Estilo:", estilo);
    console.log("Identidade:", estilos[estilo].identidade);
    console.log("Elementos visuais:", estilos[estilo].elementosVisuais);
    console.log("Características:", estilos[estilo].caracteristicas);
    console.log("--------------------");
}


// Pontuação de compatibilidade com cada estilo

const pontuacaoEstilos = {};

for (let estilo in estilos) {
    pontuacaoEstilos[estilo] = 0;
}


// Função de Pontuação

function adicionarPontos(etapa, estilo, pontos) {

    if (pontuacoesEtapas[etapa] &&
        pontuacoesEtapas[etapa][estilo] !== undefined) {

        pontuacoesEtapas[etapa][estilo] += pontos;
    }
}


// resposta -> pontuação
// Estilo

const mapaPersonalidade = {
    "Discreto e reservado": ["Classico", "Minimalista", "OldMoney"],

    "Comunicativo e extrovertido": ["Streetwear", "HipHop", "Glam"],

    "Criativo e espontâneo": ["Boho", "Grunge", "Punk", "Streetwear"],

    "Confiante e determinado": ["Classico", "Glam", "Punk", "Streetwear"],

    "Calmo e tranquilo": ["Casual", "Minimalista", "Skaters"],

    "Tradicional e conservador": ["Classico", "OldMoney", "Country"],

    "Ousado e aventureiro": ["Punk", "Gotico", "Glam", "HipHop"]
};


const perfilPersonalidade = {
    caracteristicas: []
};

function registrarPersonalidade(respostas) {
    perfilPersonalidade.caracteristicas = respostas.caracteristicas;
}

function pontuarPersonalidade() {
    perfilPersonalidade.caracteristicas.forEach(resposta => {
        const estilosRelacionados = mapaPersonalidade[resposta];

        if (estilosRelacionados) {
            estilosRelacionados.forEach(estilo => {
                adicionarPontos("personalidade", estilo, 1);
            });
        }
    });
}

// Rotina

const perfilRotina = {
    ambientes: [],
    ambientePrincipal: "",
    regrasVestimenta: [],
    preferenciaDiaria: "",
    tempoEscolhendoRoupas: 0
};

function registrarRotina(respostas) {
    perfilRotina.ambientes = respostas.ambientes;
    perfilRotina.ambientePrincipal = respostas.ambientePrincipal;
    perfilRotina.regrasVestimenta = respostas.regrasVestimenta;
    perfilRotina.preferenciaDiaria = respostas.preferenciaDiaria;
    perfilRotina.tempoEscolhendoRoupas = respostas.tempoEscolhendoRoupas;
}

// Cores

const perfilCores = {
    favoritas: [],
    evitar: [],
    combinacoes: [],
    misturaCores: 0,
    confiancaCores: 0
};

function registrarCores(respostas) {
    perfilCores.favoritas = respostas.favoritas;
    perfilCores.evitar = respostas.evitar;
    perfilCores.combinacoes = respostas.combinacoes;
    perfilCores.misturaCores = respostas.misturaCores;
    perfilCores.confiancaCores = respostas.confiancaCores;
}

// Peças Favoritas

const perfilPecas = {
    roupas: [],
    calcados: [],
    modelagem: "",
    acessorios: [],
    evitar: []
};

function registrarPecas(respostas) {
    perfilPecas.roupas = respostas.roupas;
    perfilPecas.calcados = respostas.calcados;
    perfilPecas.modelagem = respostas.modelagem;
    perfilPecas.acessorios = respostas.acessorios;
    perfilPecas.evitar = respostas.evitar;
}

// Correspondências visuais

const perfilVisual = {
    looksCurtidos: [],
    looksRejeitados: [],
    looksParcialmenteCurtidos: []
};

function registrarAvaliacaoVisual(idLook, avaliacao, pecas = []) {
    if (avaliacao === "curti") {
        perfilVisual.looksCurtidos.push(idLook);
    }

    else if (avaliacao === "nao_curti") {
        perfilVisual.looksRejeitados.push(idLook);
    }

    else if (avaliacao === "algumas_pecas") {
        perfilVisual.looksParcialmenteCurtidos.push({
            look: idLook,
            pecas: pecas
        });
    }
}

// Personalização

const perfilPersonalizacao = {
    orcamento: "",
    prioridades: [],
    frequenciaCompras: "",
    aberturaNovidades: 0,
    objetivo: ""
};

function registrarPersonalizacao(respostas) {
    perfilPersonalizacao.orcamento = respostas.orcamento;
    perfilPersonalizacao.prioridades = respostas.prioridades;
    perfilPersonalizacao.frequenciaCompras = respostas.frequenciaCompras;
    perfilPersonalizacao.aberturaNovidades = respostas.aberturaNovidades;
    perfilPersonalizacao.objetivo = respostas.objetivo;
}

// Recomendação Final

const looks = {
    1: {
        estilos: ["Streetwear", "Skaters"]
    },

    2: {
        estilos: ["OldMoney", "Classico"]
    },

    3: {
        estilos: ["Boho", "Grunge"]
    },

    4: {
        estilos: ["Punk", "Gotico"]
    },

    5: {
        estilos: ["Casual", "Minimalista"]
    },

    6: {
        estilos: ["HipHop", "Streetwear"]
    },

    7: {
        estilos: ["Glam", "Classico"]
    },

    8: {
        estilos: ["Country", "Casual"]
    },

    9: {
        estilos: ["Grunge", "Punk"]
    },

    10: {
        estilos: ["Boho", "Country"]
    }
};

function pontuarAvaliacaoVisual() {

    perfilVisual.looksCurtidos.forEach(idLook => {
        const estilosRelacionados = looks[idLook];

        if (estilosRelacionados) {
            estilosRelacionados.estilos.forEach(estilo => {
                adicionarPontos("visual", estilo, 3);
            });
        }
    });

    perfilVisual.looksRejeitados.forEach(idLook => {
        const estilosRelacionados = looks[idLook];

        if (estilosRelacionados) {
            estilosRelacionados.estilos.forEach(estilo => {
                adicionarPontos("visual", estilo, -3);
            });
        }
    });
}

// mapa de cores

const mapaCores = {
    "Neutras": ["Minimalista", "Classico", "OldMoney", "Casual"],

    "Terrosas": ["Boho", "Country", "OldMoney"],

    "Frias": ["Gotico", "Minimalista", "Classico"],

    "Quentes": ["Boho", "Glam", "Country"],

    "Pasteis": ["Casual", "Classico", "Glam"],

    "Vibrantes": ["HipHop", "Streetwear", "Glam"],

    "Monocromaticas": ["Minimalista", "Classico", "Gotico"]
};

function pontuarCores() {
    perfilCores.combinacoes.forEach(combinacao => {
        const estilosRelacionados = mapaCores[combinacao];

        if (estilosRelacionados) {
            estilosRelacionados.forEach(estilo => {
                adicionarPontos("cores", estilo, 1);
            });
        }
    });
}

// mapa de peças

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
    "Saias e vestidos": ["Glam", "Boho", "Classico"],

    "Tênis casuais": ["Casual", "Streetwear"],
    "Tênis esportivos": ["Casual", "Skaters"],
    "Tênis de skate": ["Skaters", "Streetwear"],
    "Botas": ["Country", "Punk", "Gotico"],
    "Mocassins": ["Classico", "OldMoney"],
    "Sapatos sociais": ["Classico", "OldMoney", "Glam"],

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

function pontuarPecas() {

    const respostas = [
        ...perfilPecas.roupas,
        ...perfilPecas.calcados,
        ...perfilPecas.acessorios,
        perfilPecas.modelagem
    ];

    respostas.forEach(resposta => {
        const estilosRelacionados = mapaPecas[resposta];

        if (estilosRelacionados) {
            estilosRelacionados.forEach(estilo => {
                adicionarPontos("pecas", estilo, 1);
            });
        }
    });
}

// pontuação geral

function calcularPontuacao() {

    // Reinicia as pontuações
    inicializarPontuacoes();

    for (let estilo in pontuacaoEstilos) {
        pontuacaoEstilos[estilo] = 0;
    }

    // Calcula os pontos de cada etapa
    pontuarPersonalidade();
    pontuarAvaliacaoVisual();
    pontuarCores();
    pontuarPecas();

    // Etapas que participam da identidade de estilo
    const etapas = ["personalidade", "cores", "pecas", "visual"];

    const pesoTotal = 85;

    // Aplica os pesos e calcula a compatibilidade
    for (let estilo in estilos) {

        let pontuacaoFinal = 0;

        etapas.forEach(etapa => {

            const pontuacoes = pontuacoesEtapas[etapa];

            const maiorPontuacao = Math.max(
                0,
                ...Object.values(pontuacoes)
            );

            const pontuacaoNormalizada = normalizarPontuacao(
                pontuacoes[estilo],
                maiorPontuacao
            );

            pontuacaoFinal +=
                pontuacaoNormalizada * pesosEtapas[etapa];
        });

        pontuacaoEstilos[estilo] = pontuacaoFinal / pesoTotal;
    }

    console.log("Compatibilidade dos estilos:", pontuacaoEstilos);
}

// peso das pontuações

const pesosEtapas = {
    personalidade: 15,
    rotina: 10,
    cores: 15,
    pecas: 25,
    visual: 30,
    personalizacao: 5
};

// normalização das pontuações

function normalizarPontuacao(pontos, maiorPontuacao) {

    if (maiorPontuacao <= 0) {
        return 0;
    }

    return (pontos / maiorPontuacao) * 100;
}

const pontuacoesEtapas = {
    personalidade: {},
    cores: {},
    pecas: {},
    visual: {}
};

function inicializarPontuacoes() {

    for (let etapa in pontuacoesEtapas) {

        for (let estilo in estilos) {
            pontuacoesEtapas[etapa][estilo] = 0;
        }
    }
}


// Interface do questionário

const introducao = document.getElementById("introducao");
const areaPerguntas = document.getElementById("areaPerguntas");
const conteudoPergunta = document.getElementById("conteudoPergunta");

const iniciarQuestionario = document.getElementById("iniciarQuestionario");

iniciarQuestionario.addEventListener("click", () => {

    introducao.hidden = true;
    areaPerguntas.hidden = false;

    conteudoPergunta.innerHTML = `
        <h2>Como você prefere que suas sugestões de estilo sejam apresentadas?</h2>

        <label>
            <input type="radio" name="apresentacao" value="Masculina">
            Masculina
        </label>

        <br>

        <label>
            <input type="radio" name="apresentacao" value="Feminina">
            Feminina
        </label>

        <br>

        <label>
            <input type="radio" name="apresentacao" value="Unissex">
            Unissex
        </label>

        <br>

        <label>
            <input type="radio" name="apresentacao" value="Sem preferência">
            Sem preferência
        </label>
    `;

});

const proximaPergunta = document.getElementById("proximaPergunta");


let perguntaAtual = "apresentacao";

proximaPergunta.addEventListener("click", () => {

    if (perguntaAtual === "apresentacao") {

        const resposta = document.querySelector(
            'input[name="apresentacao"]:checked'
        );

        if (!resposta) {
            alert("Selecione uma opção para continuar.");
            return;
        }

        perfilPersonalidade.apresentacao = resposta.value;

        perguntaAtual = "idade";

        conteudoPergunta.innerHTML = `
            <h2>Qual é a sua faixa etária?</h2>

            <label><input type="radio" name="idade" value="Até 17 anos"> Até 17 anos</label><br>
            <label><input type="radio" name="idade" value="18 a 24 anos"> 18 a 24 anos</label><br>
            <label><input type="radio" name="idade" value="25 a 34 anos"> 25 a 34 anos</label><br>
            <label><input type="radio" name="idade" value="35 a 44 anos"> 35 a 44 anos</label><br>
            <label><input type="radio" name="idade" value="45 anos ou mais"> 45 anos ou mais</label>
        `;

    } else if (perguntaAtual === "idade") {

    const resposta = document.querySelector(
        'input[name="idade"]:checked'
    );

    if (!resposta) {
        alert("Selecione sua faixa etária.");
        return;
    }

    perfilPersonalidade.idade = resposta.value;

    // Avança para a etapa 2
    perguntaAtual = "personalidade";

    document.getElementById("etapaAtual").textContent = "Etapa 2 de 7";
    document.getElementById("barraProgresso").value = 2;

    conteudoPergunta.innerHTML = `
        <h2>Como você descreveria sua personalidade?</h2>
        <p>Selecione até 3 características.</p>

        ${[
            "Discreto e reservado",
            "Comunicativo e extrovertido",
            "Criativo e espontâneo",
            "Confiante e determinado",
            "Calmo e tranquilo",
            "Tradicional e conservador",
            "Ousado e aventureiro"
        ].map(opcao => `
            <label>
                <input type="checkbox" name="personalidade" value="${opcao}">
                ${opcao}
            </label><br>
        `).join("")}
    `;
    }
});