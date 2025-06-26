const prompt = require('prompt-sync')();

const frase = prompt("Digite uma frase: ");

const palavras = frase.split(" ");
const unicas = [];

for (let i = 0; i < palavras.length; i++) {
    let palavraAtual = palavras[i];
    let contador = 0;

    for (let j = 0; j < palavras.length; j++) {
        if (palavras[j] === palavraAtual) {
            contador++;
        }
    }

    if (contador === 1) {
        unicas.push(palavraAtual);
    }
}

console.log("Palavras únicas:", unicas);
