var nomeUsuario = "Gabriela Melo";
var valorEmAnosLuz = 100;
var anosLuzEmKm = 9460800000000;
var anosLuzEmMetros = 9460800000000000;
var valorEmMetros = (valorEmAnosLuz * anosLuzEmMetros).toFixed(2);
var valorEmKm = (valorEmAnosLuz * anosLuzEmKm).toFixed(2);
// valorEmReal = valorEmReal.toFixed(2);
alert('Olá ' + nomeUsuario + '! ' + valorEmAnosLuz + 
    ' anos-luz correspondem a '+ valorEmMetros +' metros, o que corresponde a ' + valorEmKm + ' Km');

