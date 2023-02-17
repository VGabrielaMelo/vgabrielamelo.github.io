// var livroFavorito = 'https://http2.mlstatic.com/D_NQ_NP_937843-MLB49683392402_042022-O.jpg';
// var livroQuadrinho = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADxvJpjO4j2YOIJuAxw3yAsaly5TFLq_otQ&usqp=CAU';
// var livroSaga = 'https://cf.shopee.com.br/file/fccaf51ba9727d885eda397c970a4b33';

var listaLivros = [
    'https://http2.mlstatic.com/D_NQ_NP_937843-MLB49683392402_042022-O.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADxvJpjO4j2YOIJuAxw3yAsaly5TFLq_otQ&usqp=CAU',
    'https://cf.shopee.com.br/file/fccaf51ba9727d885eda397c970a4b33',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXazQi22F0R9atrZFLp-O3eE7ol0bHfEVMNQ&usqp=CAU'

];

// listaLivros[0] = 'https://http2.mlstatic.com/D_NQ_NP_937843-MLB49683392402_042022-O.jpg';
// listaLivros[1] = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADxvJpjO4j2YOIJuAxw3yAsaly5TFLq_otQ&usqp=CAU';
// listaLivros[2] = 'https://cf.shopee.com.br/file/fccaf51ba9727d885eda397c970a4b33';

for (var i = 0; i < listaLivros.length; i++) {
    document.write('<img src=' + listaLivros[i] +'>');  
}

// document.write('<img src=' + listaLivros[0] +'>');
// document.write('<img src=' + listaLivros[1] +'>');
// document.write('<img src=' + listaLivros[2] +'>');
