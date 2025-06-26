const prompt = require('prompt-sync')();

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;
let palpite;

console.log("Adivinhe o número entre 1 e 100!");

while (palpite !== numeroSecreto) {
    palpite = Number(prompt("Digite seu palpite: "));
    tentativas++;

    if (isNaN(palpite)) {
        console.log("Por favor, digite um número válido.");
    } else if (palpite < numeroSecreto) {
        console.log("Mais alto!");
    } else if (palpite > numeroSecreto) {
        console.log("Mais baixo!");
    } else {
        console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s).`);
    }
}
