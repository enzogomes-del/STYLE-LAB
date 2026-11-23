
const paletas = {
    neutros: {
        nome: "Neutros",
        descricao: "Uma seleção versátil de cores neutras, que funcionam como base para diversas composições.",
        sugestao: "Combine bege e branco para uma proposta leve, ou acrescente preto e marrom para criar mais contraste.",
        cores: [
            { nome: "Off-white", hex: "#E9E1D5" },
            { nome: "Bege", hex: "#B8A38B" },
            { nome: "Marrom", hex: "#786553" },
            { nome: "Preto", hex: "#292725" }
        ]
    },

    terrosos: {
        nome: "Terrosos",
        descricao: "Inspirados na natureza, os tons terrosos trazem sensação de acolhimento e combinam muito bem entre si.",
        sugestao: "Use terracota como destaque, com bege ou marrom para equilibrar o look.",
        cores: [
            { nome: "Terracota", hex: "#A65C38" },
            { nome: "Caramelo", hex: "#C58C62" },
            { nome: "Oliva", hex: "#8C7355" },
            { nome: "Marrom escuro", hex: "#574334" }
        ]
    },

    frias: {
        nome: "Tons frios",
        descricao: "Cores associadas a uma aparência mais tranquila e visualmente equilibrada.",
        sugestao: "Combine azul claro e azul médio, ou use azul marinho com cinza para um visual mais discreto.",
        cores: [
            { nome: "Azul gelo", hex: "#C6D2D8" },
            { nome: "Azul acinzentado", hex: "#829DAA" },
            { nome: "Azul petróleo", hex: "#4C6576" },
            { nome: "Azul marinho", hex: "#263B4A" }
        ]
    },

    vibrantes: {
        nome: "Vibrantes",
        descricao: "Cores intensas que criam looks expressivos, energéticos e cheios de personalidade.",
        sugestao: "Escolha uma cor vibrante para ser o destaque e mantenha as outras peças mais neutras, se quiser equilibrar.",
        cores: [
            { nome: "Coral", hex: "#E94B35" },
            { nome: "Amarelo", hex: "#F0B323" },
            { nome: "Verde", hex: "#2E9D75" },
            { nome: "Azul", hex: "#474BA8" }
        ]
    },

    monocromaticas: {
        nome: "Monocromáticas",
        descricao: "Uma composição baseada em diferentes tonalidades de uma mesma cor.",
        sugestao: "Experimente usar tons claros e escuros de marrom no mesmo look, criando profundidade sem misturar muitas cores.",
        cores: [
            { nome: "Bege rosado", hex: "#D5C6BE" },
            { nome: "Taupe", hex: "#B89A8C" },
            { nome: "Marrom médio", hex: "#8C6E61" },
            { nome: "Marrom profundo", hex: "#59453D" }
        ]
    },

    contraste: {
        nome: "Contrastes",
        descricao: "Combinações de cores diferentes que criam destaque e chamam a atenção.",
        sugestao: "Combine cores opostas ou visualmente distintas, como amarelo e azul, usando uma delas em menor quantidade.",
        cores: [
            { nome: "Amarelo", hex: "#F2D94E" },
            { nome: "Verde", hex: "#5D8D46" },
            { nome: "Azul", hex: "#3A5596" },
            { nome: "Vermelho", hex: "#CB4545" }
        ]
    }
};

const botoesPaleta = document.querySelectorAll(".botao-paleta");
const detalhePaleta = document.getElementById("detalhePaleta");
const nomePaleta = document.getElementById("nomePaleta");
const descricaoPaleta = document.getElementById("descricaoPaleta");
const coresDetalhe = document.getElementById("coresDetalhe");
const sugestaoPaleta = document.getElementById("sugestaoPaleta");
const fecharPaleta = document.getElementById("fecharPaleta");

// Exibir uma paleta selecionada
function mostrarPaleta(chave) {
    const paleta = paletas[chave];

    if (!paleta) return;

    nomePaleta.textContent = paleta.nome;
    descricaoPaleta.textContent = paleta.descricao;
    sugestaoPaleta.textContent = paleta.sugestao;

    coresDetalhe.innerHTML = "";

    paleta.cores.forEach(cor => {
        const elementoCor = document.createElement("article");
        elementoCor.classList.add("cor-individual");

        elementoCor.innerHTML = `
            <div class="cor-amostra" style="background-color: ${cor.hex}"></div>
            <div class="cor-nome">
                <h4>${cor.nome}</h4>
                <p>${cor.hex}</p>
            </div>
        `;

        
        elementoCor.querySelector(".cor-amostra").addEventListener("click", () => {
            navigator.clipboard.writeText(cor.hex)
                .then(() => {
                    alert(`Cor ${cor.hex} copiada!`);
                })
                .catch(() => {
                    alert(`Código da cor: ${cor.hex}`);
                });
        });

        elementoCor.querySelector(".cor-amostra").style.cursor = "pointer";
        elementoCor.querySelector(".cor-amostra").title = `Clique para copiar ${cor.hex}`;

        coresDetalhe.appendChild(elementoCor);
    });

    detalhePaleta.hidden = false;
    detalhePaleta.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Eventos dos botões
botoesPaleta.forEach(botao => {
    botao.addEventListener("click", () => {
        mostrarPaleta(botao.dataset.paleta);
    });
});

// Fechar a paleta
fecharPaleta.addEventListener("click", () => {
    detalhePaleta.hidden = true;
});
