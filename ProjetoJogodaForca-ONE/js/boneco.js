// Palavras Secretas
let palavrasSecretas = [
    "CSS",
    "WEB",
    "HTML",
    "JAVA",
    "BODY",
    "JSON",
    "PHYTON",
    "SCRIPT",
    "PAGINA",
    "BACKEND",
    "FRONTEND",
    "PROGRAMA"
];

// Corpo do boneco
const pantalla = document.querySelector("canvas"),
      error = pantalla.getContext("2d");

const piso = () => {
    error.fillStyle = 'lightgrey';
    error.fillRect(0, 355, 350, 5);
};

const mastro = () => {
    error.fillStyle = 'lightgrey';
    error.fillRect(80, 40, 5, 320);
};

const barra = () => {
    error.fillStyle = 'lightgrey';
    error.fillRect(80, 40, 180, 5);
};

const corda = () => {
    error.fillStyle = 'lightgrey';
    error.fillRect(260, 40, 5, 50);
};

const cabeca = () => {
    error.fillStyle = 'lightgrey';
    error.beginPath();
    error.arc(261, 110, 40, 0, 2*3.14);
    error.fill();
    error.fillStyle = 'white';
    error.beginPath();
    error.arc(261, 110, 35, 0, 2*3.14);
    error.fill();
};

const bracoEsquerda = () => {
    error.beginPath();
    error.moveTo(210, 220);
    error.lineTo(260, 150);
    error.lineWidth = 5;
    error.strokeStyle = 'lightgrey';
    error.stroke();
};

const bracoDireita = () => {
    error.beginPath();
    error.moveTo(320, 220);
    error.lineTo(265, 150);
    error.lineWidth = 5;
    error.strokeStyle = 'lightgrey';
    error.stroke();
};

const tronco = () => {
    error.fillStyle = 'lightgrey';
    error.fillRect(260, 150, 5, 135);
};

const pernaEsquerda = () => {
    error.beginPath();
    error.moveTo(210, 345);
    error.lineTo(262, 285);
    error.lineWidth = 5;
    error.strokeStyle = 'lightgrey';
    error.stroke();
};

const pernaDireita = () => {
    error.beginPath();
    error.moveTo(320, 345);
    error.lineTo(264, 285);
    error.lineWidth = 5;
    error.strokeStyle = 'lightgrey';
    error.stroke();
};

// Corpo com erros
const pisoX = () => {
    error.fillStyle = '#0A3871';
    error.fillRect(0, 355, 350, 5);
};

const mastroX = () => {
    error.fillStyle = '#0A3871';
    error.fillRect(80, 40, 5, 320);
};

const barraX = () => {
    error.fillStyle = '#0A3871';
    error.fillRect(80, 40, 180, 5);
};

const cordaX = () => {
    error.fillStyle = '#0A3871';
    error.fillRect(260, 40, 5, 30);
};

const cabecaX = () => {
    error.fillStyle = '#0A3871';
    error.beginPath();
    error.arc(261, 110, 40, 0, 2*3.14);
    error.fill();
    error.fillStyle = 'white';
    error.beginPath();
    error.arc(261, 110, 35, 0, 2*3.14);
    error.fill();
};

const bracoEsquerdaX = () => {
    error.beginPath();
    error.moveTo(210, 220);
    error.lineTo(260, 150);
    error.lineWidth = 5;
    error.strokeStyle = '#0A3871';
    error.stroke();
};

const bracoDireitaX = () => {
    error.beginPath();
    error.moveTo(320, 220);
    error.lineTo(265, 150);
    error.lineWidth = 5;
    error.strokeStyle = '#0A3871';
    error.stroke();
};

const troncoX = () => {
    error.fillStyle = '#0A3871';
    error.fillRect(260, 150, 5, 135);
};

const pernaEsquerdaX = () => {
    error.beginPath();
    error.moveTo(210, 345);
    error.lineTo(262, 285);
    error.lineWidth = 5;
    error.strokeStyle = '#0A3871';
    error.stroke();
};

const pernaDireitaX = () => {
    error.beginPath();
    error.moveTo(320, 345);
    error.lineTo(264, 285);
    error.lineWidth = 5;
    error.strokeStyle = '#0A3871';
    error.stroke();
};
