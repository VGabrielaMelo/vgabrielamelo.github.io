var listaFilmes = [
    'https://jardimdasamericas.com.br/uploads/2022/07/capa-filme-o-telefone-preto-f6549-large.jpg', 
    'https://upload.wikimedia.org/wikipedia/pt/2/26/A_Sogra_Perfeita.jpg', 
    'https://lumiere-a.akamaihd.net/v1/images/p_soul_disneyplus_v2_20907_764da65d.jpeg',  
    'https://2.bp.blogspot.com/-KdOZ8zOrSsA/UVT4Sm4G1OI/AAAAAAAAAEQ/PZOtknEMUps/s1600/English_Spirited_Away_Poster_by_behruz.jpg',
];

// Desafio 2 - adicionar itens na lista usando o .push

listaFilmes.push('https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg', 
    'https://cdn.shopify.com/s/files/1/1057/4964/products/harry-potter-and-the-chamber-of-secrets-vintage-movie-poster-original-1-sheet-27x41.jpg');

var nomeFilmes = [
    'O Telefone Preto', 
    'A Sogra Perfeita', 
    'Soul', 
    'A viagem de Chihiro', 
    'Divertidamente', 
    'Harry Potter e a Câmara Secreta'
];

document.write('<div class="container_todosFilmes">')

// Desafio 1 - transformar for em while
var i = 0;
while(i < listaFilmes.length){
    if((listaFilmes[i].endsWith('jpg')) || (listaFilmes[i].endsWith('jpeg'))){
        document.write('<div class="container_filme">')
        document.write('<img src='+ listaFilmes[i] +'>');
        document.write('<p>'+ nomeFilmes[i] +'</p>'); // Desafio 4 - colocar titulos embaixo da imagem
        document.write('</div>')
    }else{
        document.write('<p> A imagem ' + i + ' não foi lida pois não é um arquivo do tipo jpeg ou jpg </p>');
    }
    i++;
}
document.write('</div>')
