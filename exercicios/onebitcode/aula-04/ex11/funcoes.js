/*
Crie também mais duas funções, uma para somar e outra para subtrair, que aceitam dois números como parâmetros e retornam o resultado. Em seguida, importe essas funções no arquivo main.js e crie um menu interativo que permite que o usuário escolha entre calcular o dobro de um número, soma ou a subtração de dois números. Use funções sempre que achar necessário para organizar o código.
*/

export function somar(num1, num2) {
    let soma = num1 + num2
    return soma
}

export function subtrair(num1, num2) {
    let subtrair = num1 - num2
    return subtrair
}

export function dobro(num1) {
    let numDobro = num1 * 2
    return numDobro
}

/*

export function somar(num1, num2) {
    return num1 + num2
}

export function subtrair(num1, num2) {
    return num1 - num2
}

export function dobro(num1) {
    return num1 * 2
}

*/