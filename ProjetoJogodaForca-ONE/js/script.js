// Var sections
const seccHeader = document.getElementById("header"),
      seccInicio = document.getElementById("inicio"),
      seccJogo = document.getElementById("jogo"),
      seccTeclado = document.getElementById("vistaTeclado"),
      seccAdd = document.getElementById("vistapalavra"),
      seccFooter = document.getElementById("footer"),
      janelaFlutuante = document.getElementById("mensagemJogo");

// Var botões
const btnIniciarJogo = document.getElementById("btnIniciarJogo"),
      btnAddPalavra = document.getElementById("btnAddPalavra"),
      btnNovoJogo = document.getElementById("btnNovoJogo"),
      btnDesistir = document.getElementById("btnDesistir"),
      btnAdd = document.getElementById("btnAdd"),
      btnVoltar = document.getElementById("btnVoltar"),
      btnAceitar = document.getElementById("btnAceitar");

// Var container
const contPalavraSecreta = document.getElementById("contPalavraSecreta"),
      contLetrasUsadas = document.getElementById("contLetrasUsadas"),
      palavraIngresada = document.getElementById("palavra"),
      mensagem = document.getElementById("containerJanelaFlutuante");

// Var
let secretaRandom, letraUsada, erros, acertos;

// Açoes atribuidas aos botões
btnIniciarJogo.addEventListener('click', iniciarJogo);
btnNovoJogo.addEventListener('click', novoJogo);
btnDesistir.addEventListener('click', inicioDesistir);
btnAddPalavra.addEventListener('click', addPalavra);
btnAdd.addEventListener('click', addNovaPalavra);
btnVoltar.addEventListener('click', inicio);
btnAceitar.addEventListener('click', fecharJanelaFlutuante);

// Iniciar novo jogo
function iniciarJogo() {
    seccHeader.className = "ocultarSection";
    seccInicio.className = "ocultarSection";
    seccFooter.className = "ocultarSection";
    seccJogo.className = "section";
    seccTeclado.className = "section";
    contPalavraSecreta.innerHTML = "";
    contLetrasUsadas.innerHTML = "";
    configInicialCanvas();
    palavraRandom();
    addPalavraSecreta();
    erros = 0;
    acertos = 0;
    letraUsada = [];
};

// Iniciar novo jogo
function novoJogo() {
    erros = 0;
    acertos = 0;
    contPalavraSecreta.innerHTML = "";
    contLetrasUsadas.innerHTML = "";
    configInicialCanvas();
    palavraRandom();
    addPalavraSecreta();
    resetTeclado();
    letraUsada = [];
};

// Bloquear teclas
function teclaPessionada(x) {
    const bloquearTeclas = document.getElementById("letra"+x);
    bloquearTeclas.style.backgroundColor = '#0A3871';
    bloquearTeclas.style.color = 'white';
    bloquearTeclas.disabled = true;
    letraUsada.push(x);
    return x;
};

// Desbloquear teclas
function resetTeclado() {
    for (let i = 0; i < letraUsada.length; i++) {
        const desbloquearTeclas = document.getElementById("letra"+letraUsada[i]);
        desbloquearTeclas.style.backgroundColor = '#dddddd';
        desbloquearTeclas.style.color = 'black';
        desbloquearTeclas.disabled = false;
    }
};

// Janela novas palavras
function addPalavra() {
    seccInicio.className = "ocultarSection";
    seccAdd.className = "section";
};

// Para Add novas palavras
function addNovaPalavra() {
    let novapalavra = palavraIngresada.value;
    if (novapalavra != "") {
        if (novapalavra.length >= 3) {
            palavrasSecretas.push(novapalavra);
            palavraIngresada.value = "";
            mensagemFlutuante("Palavra adicionada com sucesso.");
            console.log(novapalavra);
        } else {
            mensagemFlutuante("A palavra está fora dos padrões necessários.");
        }
    }else{
        mensagemFlutuante("Digite uma palavra para adicionar ao jogo.");
    } 
};

// Voltar a tela inicial ao add nova palavra
function inicio() {
    seccInicio.className = "section";
    seccAdd.className = "ocultarSection";
    palavraIngresada.value = "";
};

// Voltar a tela inicial ao desistir
function inicioDesistir() {
    seccHeader.className = "section";
    seccInicio.className = "section";
    seccFooter.className = "section";
    seccJogo.className = "ocultarSection";
    seccTeclado.className = "ocultarSection";
    if (letraUsada.length != 0) {
        resetTeclado();
    }
};

// Exibir janela flutuante
function mensagemFlutuante(texto) {
    mensagem.innerHTML = '<p><b>'+texto+'</b></p>';
    janelaFlutuante.classList = "section";
}

// Fechar janela flutuante
function fecharJanelaFlutuante() {
    janelaFlutuante.classList = "ocultarSection";
}

//Função para converter para maiuscula
function converterMaiuscula(x) {
    x.value = x.value.toUpperCase();
};

// Verificar novas palavras
function condicionpalavra(x) {
    let key = x.keyCode || x.which,
        tecla = String.fromCharCode(key).toString(),
        parametros = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        enterDelete = [8,13],
        tecla_enterDelete = false;

    for(let i in enterDelete) {
        if(key == enterDelete[i]){
            tecla_enterDelete = true;
            break;
        }
    }
    
    if(parametros.indexOf(tecla) == -1 && !tecla_enterDelete) {
        mensagemFlutuante(" Colocar somente letras (sem acentos)");
        return false;
    }
};

// Inicializar canvas
function configInicialCanvas() {
    const kvs = document.getElementsByTagName("canvas");
    kvs.width = kvs.width;
    piso(), mastro(), barra(), corda(), cabeca(),
    bracoEsquerda(), bracoDireita(), tronco(),
    pernaEsquerda(), pernaDireita();
};

// Add palavra secreta
function palavraRandom() {
    let palavra = palavrasSecretas[Math.floor((Math.random() * palavrasSecretas.length))].toUpperCase();
    secretaRandom = palavra.split('');
};

// Add palavra secreta
function addPalavraSecreta() {
    let aux = 0;
    secretaRandom.forEach(letra => {
        const letraSecreta = document.createElement('div'),
            letraMay = letra.toUpperCase();
        letraSecreta.innerHTML = '<span id=letra'+aux+' class="letra ocultarLetra">'+letraMay+'</span>';
        contPalavraSecreta.appendChild(letraSecreta);
        aux++;
    });
};

// Função para bloquear teclas
function bloquearTeclas(estado) {
    const bloqueoTotal = document.getElementsByTagName("button");
    bloqueoTotal.disabled = estado;
};

// Funçao para comparar letra teclada com as letras da palavra secreta (acertos)
function contAcertos(x) {
    for (let i = 0; i < secretaRandom.length; i++) {
        if (x === secretaRandom[i]) {
            document.getElementById("letra"+i).className = "verLetra";
            acertos++
        }
    }

    if (acertos === secretaRandom.length) {
        mensagemFlutuante("Você acertou, parabens!");
        bloquearTeclas(true);
        btnAceitar.addEventListener('click', function () {
            novoJogo();
            configInicialCanvas();
            bloquearTeclas(false);
        });
    }
};

// Funçao para comparar letra teclada com as letras da palavra secreta (erros)
function contErros(x) {
    let coincidencia = secretaRandom.includes(x);
    if (!coincidencia) {
        erros++;
        switch (erros) {
            case 1:
                pisoX();
                break;
            case 2:
                mastroX();
                break;
            case 3:
                barraX();
                break;
            case 4:
                cordaX();
                break;
            case 5:
                cabecaX();
                break;
            case 6:
                bracoEsquerdaX();
                break;
            case 7:
                bracoDireitaX();
                break;
            case 8:
                troncoX();
                break;
            case 9:
                pernaEsquerdaX();
                break;
            case 10:
                pernaDireitaX();
                mensagemFlutuante("Você perdeu, tente novamente!");
                bloquearTeclas(true);
                btnAceitar.addEventListener('click', function () {
                    novoJogo();
                    configInicialCanvas();
                    bloquearTeclas(false);
                });
                break;
        }
    }
}