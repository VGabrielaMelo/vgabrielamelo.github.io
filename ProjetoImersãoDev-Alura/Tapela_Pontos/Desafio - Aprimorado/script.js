var listaDeJogadores = [];
var elementoTabela = document.getElementById("tabelaJogadores");

//elementoTabela.addEventListener("onload", exibirNaTela());

function exibirNaTela() {
  elementoTabela.innerHTML = "";
  listaDeJogadores.forEach((jogador, index) => {
    console.log(jogador);
    elementoTabela.innerHTML += `
        <tr>
            <td>${jogador.nome}</td>
            <td>${jogador.vitoria}</td>
            <td>${jogador.empate}</td>
            <td>${jogador.derrota}</td>
            <td>${jogador.pontos}</td>
            <td><button onClick="adicionarVitoria(${index})">Vitória</button></td>
            <td><button onClick="adicionarEmpate(${index})">Empate</button></td>
            <td><button onClick="adicionarDerrota(${index})">Derrota</button></td>
            <td><button onClick="limparPontuacaoJogador(${index})">Limpar Registros</button></td>
            <td><button onClick="removerJogador(${index})">Apagar Jogador</button></td>
          </tr>
    `;
  });
}

function criarJogador() {
  //verificar se player ja existe ou não
  var nomeNovoJogador = document.getElementById("campoNomeJogador").value;
  listaDeJogadores.push({
    nome: nomeNovoJogador,
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  });
  document.getElementById("campoNomeJogador").value = "";
  exibirNaTela();
}

function adicionarVitoria(index) {
  listaDeJogadores[index].vitoria++;
  listaDeJogadores[index].pontos = listaDeJogadores[index].pontos + 3;
  exibirNaTela();
}

function adicionarEmpate(index) {
  listaDeJogadores[index].empate++;
  listaDeJogadores[index].pontos++;
  exibirNaTela();
}

function adicionarDerrota(index) {
  listaDeJogadores[index].derrota++;
  exibirNaTela();
}

function limparPontuacaoJogador(index) {
  listaDeJogadores[index].vitoria = 0;
  listaDeJogadores[index].empate = 0;
  listaDeJogadores[index].derrota = 0;
  listaDeJogadores[index].pontos = 0;
  exibirNaTela();
}

function removerJogador(index) {
  listaDeJogadores.splice(index, 1);
  exibirNaTela();
}

function apagarJogadores() {
  listaDeJogadores = [];
  exibirNaTela();
}
