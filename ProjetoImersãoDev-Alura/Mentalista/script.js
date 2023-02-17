var numeroSecreto = parseInt(Math.random() * 1001);

while (chuteUsuario != numeroSecreto) {
    var chuteUsuario = prompt("Informe seu chute (entre 0 e 1000)");

    if (chuteUsuario == numeroSecreto) {
        alert("Você acertou. Parabéns!!!");
    } else if (chuteUsuario > numeroSecreto) {
        alert("Você errou. *DICA: O número é menor que o chute.*");
    } else {
        alert("Você errou. *DICA: O número é maior que o chute.*");
    }
}
