/*
Criei um programa para calcular a média ponderada que armaneza uma quantidade qualquer de números e seus respectivos pesos e, no fim, mostre o resultado.
*/

// Inicializando os arrays para armazenar os números e os pesos
const notas = []
const pesos = []

// Loop para solicitar números e pesos
while(true) {
    const numero = Number(prompt("Digite um número (ou deixe em branco para encerar"))

    // Se não for número válido, encerra o loop
    if(isNaN(numero)) {
        break
    }

    const peso = Number(prompt(`Digite o peso para o número ${numero}`))

    if(isNaN(peso)) {
        alert("Por favor, insira um peso válido.")
    } else {
        notas.push(numero)
        pesos.push(peso)
    }
}

if(notas.length === 0) {
    alert("Nenhum número inserido. Encerrando...")
} else {
    // Calcula a média ponderada
    let somaNotas = 0
    let somaPesos = 0

    for(let i = 0; i < notas.length; i++) {
        somaNotas += notas[i] * pesos[i]
        somaPesos += pesos[i]
    }

    const mediaPonderada = somaNotas / somaPesos
    
    //Exiba o resultado
    alert(`A media ponderada é: ${mediaPonderada.toFixed(2)}`)
}
