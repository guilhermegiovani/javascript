/*
Crie um jogo ondo o computador gera um número aleatório entre 1 e 100, e o usuário tem um número limitado de tentativas para adivinhar o número. O programa deve informar se o palpite do usuário é maior ou menor.

Obs: para gerar um número aleatório pesquise sobre as funções Math.random() e Math.floor() do JavaScript.
*/

// Gera um número aleatório de 1 e 100
const numAleatorio = Math.floor(Math.random() * 100) + 1

// Número máximo de tentativas
const maxTentativas = 10
let tentativas = 0

// Loop para adivinhar o número
for (tentativas = 1; tentativas <= maxTentativas; tentativas++) {
    const palpite = parseInt(prompt(`Tentativa ${tentativas}/${maxTentativas}. Adivinhe o número (entre 1 e 100):`))

    if(isNaN(palpite) || palpite < 1 || palpite > 100) {
        alert("Por favor, insira um número válido entre 1 e 100.")
        tentativas--
    } else if(palpite === numAleatorio) {
        alert(`Parabéns! Você acertou o número ${numAleatorio} em ${tentativas} tentativas.`)
        break
    } else if(palpite < numAleatorio) {
        alert("Tente um número maior.")
    } else {
        alert("Tente um número menor.")
    }
}

if(tentativas > maxTentativas) {
    alert(`Suas ${maxTentativas} tentativas acabaram. O número era ${numAleatorio}`)
}