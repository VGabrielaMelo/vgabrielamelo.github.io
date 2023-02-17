var listaFilmes = [
    'https://1.bp.blogspot.com/-SWt9furxjhU/WD4cHIz_g3I/AAAAAAAB3R0/DCU7KcT8Kykcof5I8IYFiMiPNodwH6AkgCLcB/s1600/Capit%25C3%25A3o%2BFant%25C3%25A1stico.jpg', 
    'https://live.staticflickr.com/3327/3428645998_e6a6775888_z.jpg', 
    'https://m.media-amazon.com/images/M/MV5BMzg2Mzg4YmUtNDdkNy00NWY1LWE3NmEtZWMwNGNlMzE5YzU3XkEyXkFqcGdeQXVyMjA5MTIzMjQ@._V1_FMjpg_UX1000_.jpg', 
    'https://m.media-amazon.com/images/I/81Z6-ieAIyL.jpg', 
    'https://viureview.com.br/images/filmes8/La-la-land.jpg', 
    'https://static.rogerebert.com/uploads/movie/movie_poster/the-bridges-of-madison-county-1995/large_czRuGEx9Yhnh6nApirTLPToxHNu.jpg', 
    'https://lumiere-a.akamaihd.net/v1/images/p_soul_disneyplus_v2_20907_764da65d.jpeg', 
    'https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg', 
    'https://2.bp.blogspot.com/-KdOZ8zOrSsA/UVT4Sm4G1OI/AAAAAAAAAEQ/PZOtknEMUps/s1600/English_Spirited_Away_Poster_by_behruz.jpg',
    'https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Amsterdam_%282022_film%29.jpg/220px-Amsterdam_%282022_film%29.jpg'
];

// Desafio 2 - adicionar itens na lista usando o .push

listaFilmes.push('https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg', 
    'https://cdn.shopify.com/s/files/1/1057/4964/products/harry-potter-and-the-chamber-of-secrets-vintage-movie-poster-original-1-sheet-27x41.jpg');

var nomeFilmes = [
    'Capitão Fantástico', 
    'Kill Bill 1', 
    'Estrelas além do tempo', 
    'O grande hotel Budapeste', 
    'La La Land', 
    'As pontes de Madison', 
    'Soul', 
    'Bastardos Inglórios', 
    'A viagem de Chihiro', 
    'Amsterdam', 
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
