function adicionarFilme() {
    var listaFilmes = document.getElementById('listaFilmes')

    var filmeFavorito = document.getElementById('filme').value
    // document.write('<img src=' + filmeFavorito + '>')

    listaFilmes.innerHTML = listaFilmes.innerHTML + '<img src=' + filmeFavorito + '>';

    document.getElementById('filme').value = ''
}