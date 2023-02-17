var nomeUsuario = "Gabriela Melo";
var valorEmEthereum = 21;
var cotacaoEmEthereum = 8109.71;
var valorEmReal = (valorEmEthereum * cotacaoEmEthereum).toFixed(2);
// valorEmReal = valorEmReal.toFixed(2);
alert('Olá ' + nomeUsuario + '! O valor de ' + valorEmEthereum + 
    ' Ethereum em reais é de R$ '+ valorEmReal);
