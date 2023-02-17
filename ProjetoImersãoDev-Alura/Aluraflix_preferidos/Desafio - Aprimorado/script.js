var listaFilmesFavoritos = [];
var listaTrailersFilmesFavoritos = [];

function adicionarFilme(){
    var filmeFavorito = document.getElementById('filme').value;
    var trailerFilmeFavorito = document.getElementById('trailer').value;
  
    if(( filmeFavorito.endsWith('jpg') ) || ( filmeFavorito.endsWith('jpeg') )){ 
        document.getElementById('mensagemDeErro').innerHTML = '';
        listaFilmesFavoritos.push(filmeFavorito);
        listaTrailersFilmesFavoritos.push(trailerFilmeFavorito);
        
        limpaCampos();
        recarregarFilmes();    
    } else {  
        document.getElementById('mensagemDeErro').innerHTML = 'Endereço de imagem inválido, tente novamente';
        limpaCampos();  
    }
}

function recarregarFilmes(){
    var elementoListaFilmes = document.getElementById('listaFilmes');
    elementoListaFilmes.innerHTML = '';
    for(i=0; i < listaFilmesFavoritos.length ; i++){
        elementoListaFilmes.innerHTML += 
            `<a href=" ${listaTrailersFilmesFavoritos[i]} "><img src=" ${listaFilmesFavoritos[i]} "></a>`;  
    }
}

function limpaCampos(){
   document.getElementById('filme').value = '';
   document.getElementById('trailer').value = '';
}
