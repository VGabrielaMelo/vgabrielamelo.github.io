// ==================== ELEMENTOS DO DOM ====================
const elementos = {
    telaInicio: document.getElementById("inicio"),
    telaJogo: document.getElementById("jogo"),
    telaAddPalavra: document.getElementById("vistapalavra"),
    btnIniciar: document.getElementById("btnIniciarJogo"),
    btnAddPalavra: document.getElementById("btnAddPalavra"),
    btnVerPalavras: document.getElementById("btnVerPalavras"),
    btnNovoJogo: document.getElementById("btnNovoJogoGame"),
    btnDesistir: document.getElementById("btnDesistirGame"),
    btnAdd: document.getElementById("btnAdd"),
    btnVoltar: document.getElementById("btnVoltar"),
    btnAceitar: document.getElementById("btnAceitar"),
    btnFecharPalavras: document.getElementById("btnFecharPalavras"),
    palavraSecretaContainer: document.getElementById("contPalavraSecreta"),
    letrasUsadasContainer: document.getElementById("contLetrasUsadas"),
    inputPalavra: document.getElementById("palavra"),
    mensagemContainer: document.getElementById("containerJanelaFlutuante"),
    modal: document.getElementById("mensagemJogo"),
    modalPalavras: document.getElementById("modalPalavras"),
    listaPalavras: document.getElementById("listaPalavras"),
    tecladoContainer: document.querySelector(".keyboard-grid"),
    canvas: document.getElementById("canvas-forca")
};

// ==================== CANVAS E CONTEXTO ====================
let ctx = null;

// ==================== FUNÇÕES DE DESENHO (BASE - CINZA) ====================
const piso = () => {
    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(0, 355, 350, 5);
};

const mastro = () => {
    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(80, 40, 5, 320);
};

const barra = () => {
    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(80, 40, 180, 5);
};

const corda = () => {
    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(260, 40, 5, 30);
};

const cabeca = () => {
    ctx.fillStyle = '#cbd5e1';
    ctx.beginPath();
    ctx.arc(261, 110, 35, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(261, 110, 30, 0, 2 * Math.PI);
    ctx.fill();
};

const bracoEsquerda = () => {
    ctx.beginPath();
    ctx.moveTo(210, 220);
    ctx.lineTo(260, 150);
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#cbd5e1';
    ctx.stroke();
};

const bracoDireita = () => {
    ctx.beginPath();
    ctx.moveTo(320, 220);
    ctx.lineTo(265, 150);
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#cbd5e1';
    ctx.stroke();
};

const tronco = () => {
    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(258, 145, 5, 140);
};

const pernaEsquerda = () => {
    ctx.beginPath();
    ctx.moveTo(210, 345);
    ctx.lineTo(262, 285);
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#cbd5e1';
    ctx.stroke();
};

const pernaDireita = () => {
    ctx.beginPath();
    ctx.moveTo(320, 345);
    ctx.lineTo(264, 285);
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#cbd5e1';
    ctx.stroke();
};

// ==================== FUNÇÕES DE DESENHO (ERROS - ROXO) ====================
const pisoX = () => {
    ctx.fillStyle = '#9259CD';
    ctx.fillRect(0, 355, 350, 5);
};

const mastroX = () => {
    ctx.fillStyle = '#9259CD';
    ctx.fillRect(80, 40, 5, 320);
};

const barraX = () => {
    ctx.fillStyle = '#9259CD';
    ctx.fillRect(80, 40, 180, 5);
};

const cordaX = () => {
    ctx.fillStyle = '#9259CD';
    ctx.fillRect(260, 40, 5, 30);
};

const cabecaX = () => {
    ctx.fillStyle = '#9259CD';
    ctx.beginPath();
    ctx.arc(261, 110, 35, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(261, 110, 30, 0, 2 * Math.PI);
    ctx.fill();
};

const bracoEsquerdaX = () => {
    ctx.beginPath();
    ctx.moveTo(210, 220);
    ctx.lineTo(260, 150);
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#9259CD';
    ctx.stroke();
};

const bracoDireitaX = () => {
    ctx.beginPath();
    ctx.moveTo(320, 220);
    ctx.lineTo(265, 150);
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#9259CD';
    ctx.stroke();
};

const troncoX = () => {
    ctx.fillStyle = '#9259CD';
    ctx.fillRect(258, 145, 5, 140);
};

const pernaEsquerdaX = () => {
    ctx.beginPath();
    ctx.moveTo(210, 345);
    ctx.lineTo(262, 285);
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#9259CD';
    ctx.stroke();
};

const pernaDireitaX = () => {
    ctx.beginPath();
    ctx.moveTo(320, 345);
    ctx.lineTo(264, 285);
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#9259CD';
    ctx.stroke();
};

// Mapeamento de erros para funções
const funcoesErro = [
    null,
    pisoX, mastroX, barraX, cordaX,
    cabecaX, bracoEsquerdaX, bracoDireitaX,
    troncoX, pernaEsquerdaX, pernaDireitaX
];

// ==================== RESETAR CANVAS ====================
const resetarCanvas = () => {
    if (!ctx) return;
    ctx.clearRect(0, 0, elementos.canvas.width, elementos.canvas.height);
    piso();
    mastro();
    barra();
    corda();
    cabeca();
    bracoEsquerda();
    bracoDireita();
    tronco();
    pernaEsquerda();
    pernaDireita();
};

// ==================== BANCO DE PALAVRAS COM PERSISTÊNCIA ====================
const palavrasPreDefinidas = [
    "HTML", "CSS", "JAVASCRIPT", "PYTHON", "JAVA", "SQL", "REACT", 
    "ANGULAR", "NODE", "TYPESCRIPT", "GIT", "DOCKER", "API", "JSON", "XML",
    "FLEXBOX", "GRID", "RESPONSIVO", "TYPEFACE", "PALETA", "PROTOTIPO", 
    "FIGMA", "UX", "UI", "ANIMACAO", "HOVER", "MODAL",
    "ALGORITMO", "FUNCAO", "LOOP", "ARRAY", "OBJETO", "CLASSE", 
    "VARIAVEL", "CONSTANTE", "BOOLEAN", "STRING", "NUMERO",
    "NAVEGADOR", "SERVIDOR", "CLIENTE", "HOSTING", "DOMINIO", 
    "PROTOCOLO", "HTTPS", "URL", "COOKIE", "SESSION", "TOKEN",
    "FORCA", "HALLOWEEN", "NATAL", "ANONOVO", "PONTO", "LINHA", 
    "PALAVRA", "LETRA", "TECLADO", "ACERTO", "ERRO", "VITORIA",
    "PROJETO", "CODIGO", "SOFTWARE", "HARDWARE", "BANCO", "DADOS", 
    "BACKEND", "FRONTEND", "FULLSTACK", "WEBSITE", "APLICATIVO"
];

let palavrasSecretas = [];

const carregarPalavras = () => {
    const salvas = localStorage.getItem("palavrasForca");
    if (salvas) {
        palavrasSecretas = JSON.parse(salvas);
    } else {
        palavrasSecretas = [...palavrasPreDefinidas];
    }
};

const salvarPalavras = () => {
    localStorage.setItem("palavrasForca", JSON.stringify(palavrasSecretas));
};

const resetarPalavras = () => {
    if (confirm("⚠️ Isso vai remover todas as palavras adicionadas e restaurar apenas as originais. Continuar?")) {
        palavrasSecretas = [...palavrasPreDefinidas];
        salvarPalavras();
        mostrarMensagem("✅ Palavras restauradas para a lista original!");
        fecharModalPalavras();
    }
};

// ==================== VARIÁVEIS DO JOGO ====================
let palavraSecretaAtual = [];
let letrasUsadas = [];
let erros = 0;
let acertos = 0;
let palavraAtual = "";

// ==================== FUNÇÕES DO JOGO ====================
const iniciarJogo = () => {
    erros = 0;
    acertos = 0;
    letrasUsadas = [];
    palavraSecretaAtual = [];
    
    elementos.telaInicio.classList.add("ocultarSection");
    elementos.telaJogo.classList.remove("ocultarSection");
    elementos.palavraSecretaContainer.innerHTML = "";
    elementos.letrasUsadasContainer.innerHTML = "";
    
    resetarCanvas();
    
    if (palavrasSecretas.length === 0) {
        mostrarMensagem("❌ Nenhuma palavra cadastrada! Adicione palavras para jogar.");
        sairJogo();
        return;
    }
    
    palavraAtual = palavrasSecretas[Math.floor(Math.random() * palavrasSecretas.length)].toUpperCase();
    palavraSecretaAtual = palavraAtual.split('');
    
    criarDisplayPalavra();
    resetarTeclado();
};

const criarDisplayPalavra = () => {
    elementos.palavraSecretaContainer.innerHTML = "";
    palavraSecretaAtual.forEach((letra, index) => {
        const div = document.createElement('div');
        const span = document.createElement('span');
        span.id = `letra-${index}`;
        span.className = 'ocultarLetra';
        span.textContent = letra;
        div.appendChild(span);
        elementos.palavraSecretaContainer.appendChild(div);
    });
};

const atualizarLetrasUsadas = () => {
    elementos.letrasUsadasContainer.innerHTML = letrasUsadas.length > 0 
        ? `Letras usadas: ${letrasUsadas.join(', ')}` 
        : "";
};

const verificarAcerto = (letra) => {
    let acertou = false;
    palavraSecretaAtual.forEach((letraSecreta, index) => {
        if (letraSecreta === letra) {
            const span = document.getElementById(`letra-${index}`);
            if (span) span.className = 'verLetra';
            acertos++;
            acertou = true;
        }
    });
    
    if (acertos === palavraSecretaAtual.length) {
        mostrarMensagem("🎉 Parabéns! Você acertou a palavra! 🎉");
        desabilitarTeclado(true);
    }
    return acertou;
};

const verificarErro = (letra) => {
    if (!palavraSecretaAtual.includes(letra)) {
        erros++;
        if (funcoesErro[erros]) funcoesErro[erros]();
        
        if (erros >= 10) {
            mostrarMensagem(`💀 Game Over! A palavra era ${palavraAtual} 💀`);
            desabilitarTeclado(true);
        }
        return true;
    }
    return false;
};

const processarLetra = (letra) => {
    if (letrasUsadas.includes(letra)) return;
    letrasUsadas.push(letra);
    atualizarLetrasUsadas();
    
    if (!verificarAcerto(letra)) {
        verificarErro(letra);
    }
};

const reiniciarJogo = () => iniciarJogo();

const sairJogo = () => {
    elementos.telaJogo.classList.add("ocultarSection");
    elementos.telaInicio.classList.remove("ocultarSection");
    desabilitarTeclado(false);
};

// ==================== TECLADO ====================
const criarTeclado = () => {
    if (!elementos.tecladoContainer) return;
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    elementos.tecladoContainer.innerHTML = '';
    
    letras.split('').forEach(letra => {
        const btn = document.createElement('button');
        btn.className = 'key';
        btn.textContent = letra;
        btn.addEventListener('click', () => {
            if (!btn.disabled) {
                btn.disabled = true;
                btn.style.opacity = '0.5';
                processarLetra(letra);
            }
        });
        elementos.tecladoContainer.appendChild(btn);
    });
};

const resetarTeclado = () => {
    document.querySelectorAll('.key').forEach(tecla => {
        tecla.disabled = false;
        tecla.style.opacity = '1';
    });
};

const desabilitarTeclado = (desabilitar) => {
    document.querySelectorAll('.key').forEach(tecla => {
        tecla.disabled = desabilitar;
        tecla.style.opacity = desabilitar ? '0.5' : '1';
    });
};

// ==================== ADICIONAR PALAVRAS ====================
const mostrarAddPalavra = () => {
    elementos.telaInicio.classList.add("ocultarSection");
    elementos.telaAddPalavra.classList.remove("ocultarSection");
};

const adicionarPalavra = () => {
    let novaPalavra = elementos.inputPalavra.value.trim().toUpperCase();
    
    if (novaPalavra === "") {
        mostrarMensagem("❌ Digite uma palavra para adicionar!");
        return;
    }
    if (novaPalavra.length < 3 || novaPalavra.length > 15) {
        mostrarMensagem("❌ A palavra deve ter entre 3 e 15 caracteres!");
        return;
    }
    if (!/^[A-Z]+$/.test(novaPalavra)) {
        mostrarMensagem("❌ Use apenas letras (sem acentos ou números)!");
        return;
    }
    if (palavrasSecretas.includes(novaPalavra)) {
        mostrarMensagem("⚠️ Esta palavra já existe no banco!");
        return;
    }
    
    palavrasSecretas.push(novaPalavra);
    salvarPalavras();
    elementos.inputPalavra.value = "";
    mostrarMensagem("✅ Palavra adicionada com sucesso!");
};

const voltarInicio = () => {
    elementos.telaAddPalavra.classList.add("ocultarSection");
    elementos.telaInicio.classList.remove("ocultarSection");
    elementos.inputPalavra.value = "";
};

// ==================== EXIBIR PALAVRAS CADASTRADAS ====================
const exibirListaPalavras = () => {
    if (!elementos.listaPalavras) return;
    
    // Garantir que estamos usando a lista mais atualizada
    const palavrasAtuais = [...new Set(palavrasSecretas)];
    palavrasAtuais.sort();
    
    let html = '<div class="categoria">📚 Palavras disponíveis</div>';
    
    if (palavrasAtuais.length === 0) {
        html += '<div class="palavra-item">Nenhuma palavra cadastrada</div>';
    } else {
        html += '<div>';
        palavrasAtuais.forEach(palavra => {
            html += `<span class="palavra-item">${palavra}</span>`;
        });
        html += '</div>';
    }
    
    html += '<hr>';
    html += `<div class="categoria">📊 Total: ${palavrasAtuais.length} palavras</div>`;
    html += `<button id="btnResetPalavras" class="btn-secondary" style="margin-top: 1rem; width: auto; padding: 0.5rem 1rem;">
                <i class="fas fa-undo-alt"></i> Restaurar palavras originais
            </button>`;
    
    elementos.listaPalavras.innerHTML = html;
    elementos.modalPalavras.classList.remove("ocultarSection");
    
    const btnReset = document.getElementById("btnResetPalavras");
    if (btnReset) {
        // Remover evento anterior para evitar duplicação
        const novoBtn = btnReset.cloneNode(true);
        btnReset.parentNode.replaceChild(novoBtn, btnReset);
        novoBtn.addEventListener('click', resetarPalavras);
    }
};

const fecharModalPalavras = () => {
    elementos.modalPalavras.classList.add("ocultarSection");
};

// ==================== MODAL DO JOGO ====================
const mostrarMensagem = (texto) => {
    elementos.mensagemContainer.innerHTML = texto;
    elementos.modal.classList.remove("ocultarSection");
    elementos.modal.dataset.gameEnded = (erros >= 10 || acertos === palavraSecretaAtual.length) ? "true" : "false";
};

const fecharModal = () => {
    elementos.modal.classList.add("ocultarSection");
    if (elementos.modal.dataset.gameEnded === "true") {
        elementos.modal.dataset.gameEnded = "false";
        setTimeout(() => {
            if (confirm("Deseja iniciar um novo jogo?")) {
                iniciarJogo();
            } else {
                sairJogo();
            }
        }, 100);
    }
};

// ==================== EVENTOS ====================
const configurarEventos = () => {
    if (elementos.btnIniciar) elementos.btnIniciar.addEventListener('click', iniciarJogo);
    if (elementos.btnAddPalavra) elementos.btnAddPalavra.addEventListener('click', mostrarAddPalavra);
    if (elementos.btnVerPalavras) elementos.btnVerPalavras.addEventListener('click', exibirListaPalavras);
    if (elementos.btnFecharPalavras) elementos.btnFecharPalavras.addEventListener('click', fecharModalPalavras);
    if (elementos.btnNovoJogo) elementos.btnNovoJogo.addEventListener('click', reiniciarJogo);
    if (elementos.btnDesistir) elementos.btnDesistir.addEventListener('click', sairJogo);
    if (elementos.btnAdd) elementos.btnAdd.addEventListener('click', adicionarPalavra);
    if (elementos.btnVoltar) elementos.btnVoltar.addEventListener('click', voltarInicio);
    if (elementos.btnAceitar) elementos.btnAceitar.addEventListener('click', fecharModal);
};

// ==================== INICIALIZAÇÃO ====================
const init = () => {
    if (elementos.canvas) {
        ctx = elementos.canvas.getContext("2d");
    }
    carregarPalavras();
    configurarEventos();
    criarTeclado();
    resetarCanvas();
};

// Iniciar quando o DOM estiver carregado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
