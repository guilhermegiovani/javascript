/*
Crie um programa que solicita ao usuário que insira notas de alunos e, quando ele inserir -1, o programa calcula e exibe a média das notas.
*/

// Crie variaveis necessarias
let totNotas = 0
let quantNotas = 0
let notas

do {
    // Solicita a nota e converta para um valor númerico
    nota = Number(prompt("Digite a nota do aluno(ou -1 para sair e calcular a média):"))

    // Se o usuário inseriu uma nota, soma a nota inserida no total
    if(nota !== -1) {
        totNotas += nota
        quantNotas++
    }
} while (nota !== -1) // Se a nota for -1 encerra o loop

if (quantNotas === 0) {
    alert("Nenhuma nota foi inserida.")
} else {
    // Calcula a média
    let media = totNotas / quantNotas
    alert("A média das notas é: " + media.toFixed(2))
}