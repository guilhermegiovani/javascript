/*
Escreva um programa JavaScript que funcionecom uma calculadora simples. O programa deve pedir ao usuário para inserir dois números usando o prompt(), realizar as 4 operações matemáticas (adição, subtração, multiplicação e divisão) com esse números e exibir o resultado usando alert().
*/

let num1 = prompt("Digite um Número: ")
let num2 = prompt("Digite outro Número: ")

num1 = parseFloat(num1)
num2 = parseFloat(num2)

// let soma = num1 + num2
// let sub = num1 - num2
// let multi = num1 * num2
// let div = num1 / num2

// alert (`A soma dos números é ${soma}
// A subtração dos números é ${sub}
// A multiplicação dos números é ${multi}
// A divisão dos números é ${div}`)

alert(`A soma dos números é ${num1 + num2}
A subtração dos números é ${num1 - num2}
A multiplicação dos números é ${num1 * num2}
A divisão dos números é ${num1 / num2}`)