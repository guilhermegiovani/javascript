/*
Escreva um programa JavaScript que peça ao usuário para inserir um número inteiro positivo e, em seguida, calcule o fatorial desse número usando um loop for e exiba o resultado.
*/

let num = Number(prompt("Digite um número:"))
let fatorial = 1

for (let i = 1;i <= num;i++) {
    fatorial *= i
}

alert(`O fatorial de ${num} é ${fatorial}`)