/*
Crie uma página HTML que gera na tela um número aleatório entre 1 e 999999 a cada 10 segundos(complete os zeros à esquerda).
*/

// Math.floor(Math.random() * 999999)

// Função para gerar um número aleatório e exibir na tela

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 999999) + 1
    const paddedNumber = randomNumber.toString().padStart(6, '0')
    const randomNumberElement = document.getElementById("confirmationCode")
    randomNumberElement.textContent = paddedNumber
}

// Chama a função para gerar o número aleatório a cada 10 segundos
setInterval(generateRandomNumber, 10 * 1000) // 10000 milissegundos (10 segundos)



/*
let contador = 1

const intervalId = setInterval(function() {
    let numAleatorio = Math.floor(Math.random() * 999999)
    let mostrarNum = document.getElementById("mostrar-numero")
    let criarP = document.createElement("p")
    mostrarNum.appendChild(criarP).innerHTML = `<p>Número ${contador}: <strong> ${numAleatorio}</strong></p>`
    contador++
    if(contador > 3) {
        clearInterval(intervalId)
        alert("Programa Finalizado!")
    }
}, 10 * 1000)
*/