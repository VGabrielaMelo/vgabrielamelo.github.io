function encriptar() {
    // puxando o texto
    let text = textUser.value;
    console.log(text);

    text = text.toLowerCase();

    // padrão de encriptar
    let matrizCodigo = [
        ["e", "enter"], 
        ["i", "imes"],
        ["a", "ai"], 
        ["o", "ober"], 
        ["u", "ufat"],
    ];

    // encriptando
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (text.includes(matrizCodigo[i][0])) {
            text = text.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    console.log(text);

    // removendo os detalhes
    boneco.style.display = "none";

    sumir.style.display = "none";

    // passando para a tela branca
    let textEncriptado = text 

    encriptado.style.display = 'block';

    encriptado.value = textEncriptado

    textUser.value = ''
}

function desencriptador() {
    // puxando o texto
    let text = textUser.value;
    console.log(text);

    text = text.toLowerCase();

    // padrão de encriptar
    let matrizCodigo = [
        ["e", "enter"], 
        ["i", "imes"],
        ["a", "ai"], 
        ["o", "ober"], 
        ["u", "ufat"]
    ];

    // desencriptando
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (text.includes(matrizCodigo[i][1])) {
            text = text.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    console.log(text);

    // removendo os detalhes
    boneco.style.display = "none";

    sumir.style.display = "none";

    // passando para a tela branca
    let textEncriptado = text 

    encriptado.style.display = 'block';

    encriptado.value = textEncriptado

    textUser.value = ''
}

function copiar () {
    let text = encriptado;
    console.log(text);

    // Deixamos o texto selecionado (em azul) 
    text.select();

    // Copia o texto que está selecionado
    document.execCommand("copy");
}
