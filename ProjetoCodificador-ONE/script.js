// ==================== ELEMENTOS DO DOM ====================
const textUser = document.getElementById("textUser");
const btnCriptografar = document.getElementById("btnCriptografar");
const btnDescriptografar = document.getElementById("btnDescriptografar");
const btnCopiar = document.getElementById("btnCopiar");
const encriptado = document.getElementById("encriptado");
const emptyState = document.getElementById("emptyState");
const resultContent = document.getElementById("resultContent");

// ==================== CONFIGURAÇÕES DA CIFRA ====================
const DESLOCAMENTO = 3; // Número de posições para deslocar (pode ser alterado)
const alfabeto = 'abcdefghijklmnopqrstuvwxyz';

// ==================== FUNÇÕES AUXILIARES ====================
// Normalizar texto (minúsculo, sem acentos, apenas letras)
const normalizarTexto = (texto) => {
    return texto
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z\s]/g, ''); // remove números e caracteres especiais, mantém espaços
};

// Cifra de César - Criptografar
const cifraCesarCriptografar = (texto) => {
    let resultado = '';
    
    for (let i = 0; i < texto.length; i++) {
        const char = texto[i];
        
        // Se for espaço, mantém
        if (char === ' ') {
            resultado += ' ';
            continue;
        }
        
        // Encontra a posição da letra no alfabeto
        const posicao = alfabeto.indexOf(char);
        
        if (posicao !== -1) {
            // Aplica o deslocamento (com volta ao início se necessário)
            const novaPosicao = (posicao + DESLOCAMENTO) % alfabeto.length;
            resultado += alfabeto[novaPosicao];
        } else {
            resultado += char; // mantém caracteres não reconhecidos (não deve acontecer)
        }
    }
    
    return resultado;
};

// Cifra de César - Descriptografar
const cifraCesarDescriptografar = (texto) => {
    let resultado = '';
    
    for (let i = 0; i < texto.length; i++) {
        const char = texto[i];
        
        // Se for espaço, mantém
        if (char === ' ') {
            resultado += ' ';
            continue;
        }
        
        // Encontra a posição da letra no alfabeto
        const posicao = alfabeto.indexOf(char);
        
        if (posicao !== -1) {
            // Aplica o deslocamento inverso (com volta ao final se necessário)
            let novaPosicao = posicao - DESLOCAMENTO;
            if (novaPosicao < 0) {
                novaPosicao += alfabeto.length;
            }
            resultado += alfabeto[novaPosicao];
        } else {
            resultado += char;
        }
    }
    
    return resultado;
};

// ==================== FUNÇÕES PRINCIPAIS ====================
// Mostrar erro
const mostrarErro = (mensagem) => {
    alert(mensagem || "❌ Texto inválido! Digite um texto para processar.");
};

// Mostrar resultado
const mostrarResultado = (texto) => {
    emptyState.classList.add("hidden");
    resultContent.classList.remove("hidden");
    encriptado.value = texto;
};

// Limpar resultado
const limparResultado = () => {
    emptyState.classList.remove("hidden");
    resultContent.classList.add("hidden");
    encriptado.value = "";
};

// Criptografar
const criptografar = () => {
    let texto = textUser.value.trim();
    
    if (texto === "") {
        mostrarErro("❌ Digite um texto para criptografar!");
        return;
    }
    
    // Normalizar texto (minúsculo, sem acentos, sem números)
    texto = normalizarTexto(texto);
    
    if (texto === "") {
        mostrarErro("❌ Texto inválido! Use apenas letras e espaços.");
        return;
    }
    
    const textoCriptografado = cifraCesarCriptografar(texto);
    mostrarResultado(textoCriptografado);
    textUser.value = "";
};

// Descriptografar
const descriptografar = () => {
    let texto = textUser.value.trim();
    
    if (texto === "") {
        mostrarErro("❌ Digite um texto para descriptografar!");
        return;
    }
    
    // Normalizar texto (já deve estar no formato criptografado)
    texto = texto.toLowerCase();
    
    const textoDescriptografado = cifraCesarDescriptografar(texto);
    mostrarResultado(textoDescriptografado);
    textUser.value = "";
};

// Copiar texto
const copiarTexto = async () => {
    try {
        await navigator.clipboard.writeText(encriptado.value);
        
        const btnOriginalText = btnCopiar.innerHTML;
        btnCopiar.innerHTML = '<i class="fas fa-check"></i> Copiado!';
        btnCopiar.style.background = '#e8f5e9';
        btnCopiar.style.borderColor = '#4caf50';
        btnCopiar.style.color = '#2e7d32';
        
        setTimeout(() => {
            btnCopiar.innerHTML = btnOriginalText;
            btnCopiar.style.background = '';
            btnCopiar.style.borderColor = '';
            btnCopiar.style.color = '';
        }, 2000);
    } catch (err) {
        alert("❌ Erro ao copiar texto!");
    }
};

// ==================== EVENTOS ====================
btnCriptografar.addEventListener("click", criptografar);
btnDescriptografar.addEventListener("click", descriptografar);
btnCopiar.addEventListener("click", copiarTexto);

// Limpar resultado quando o usuário começar a digitar novo texto
textUser.addEventListener("focus", () => {
    limparResultado();
});
