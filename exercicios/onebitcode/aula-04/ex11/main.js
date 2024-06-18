/*
Crie também mais duas funções, uma para somar e outra para subtrair, que aceitam dois números como parâmetros e retornam o resultado. Em seguida, importe essas funções no arquivo main.js e crie um menu interativo que permite que o usuário escolha entre calcular o dobro de um número, soma ou a subtração de dois números. Use funções sempre que achar necessário para organizar o código.
*/

import { somar, subtrair, dobro } from "./funcoes.js"

function mostrarMenu() {
    const opcao = prompt(`Escolha uma operação:\n1. Dobro de um número\n2. Somar dois números\n3. Subtrair dois número\n4. Sair`)
    return Number(opcao)
}

function calcularDobro() {
    let num = Number(prompt("Digite um número:"))

    if(!isNaN(num)) {
        let res = dobro(num)
        alert(`O dobro de ${num} é ${res}`)
    } else {
        alert("Por favor, insira um número válido.")
    }
}

function calcularSoma() {
    let num1 = Number(prompt("Digite o primeiro número:"))
    let num2 = Number(prompt("Digite o segundo número:"))

    if(!isNaN(num1) && !isNaN(num2)) {
        let res = somar(num1, num2)
        alert(`A soma de ${num1} e ${num2} é ${res}`)
    } else {
        alert ("Por favor, insira números válidos.")
    }
}

function calcularSubtração() {
    let num1 = Number(prompt("Digite o primeiro número:"))
    let num2 = Number(prompt("Digite o segundo número:"))

    if(!isNaN(num1) && !isNaN(num2)) {
        let res = subtrair(num1, num2)
        alert(`A subtração de ${num1} e ${num2} é ${res}`)
    } else {
        alert("Por favor, insira números váidos.")
    }
}

let escolha

do {
    escolha = mostrarMenu()

    switch (escolha) {
        case 1:
            calcularDobro()
            break
        case 2:
            calcularSoma()
            break
        case 3:
            calcularSubtração()
            break
        case 4:
            alert("Saindo...")
            break
        default:
            alert("Opção inválida. Tente novamente.")
    }
} while (escolha !== 4)


/*
let menu = prompt("Escolha uma das opções:\n1. Para somar\n2. Para subtrair\n3. Para calcular o dobro de um número")

switch (menu) {
    case "1":
        let numSoma1 = Number(prompt("Digite um número para somar:"))
        let numSoma2 = Number(prompt("Digite outro número para somar:"))
        alert(`A soma de ${numSoma1} e ${numSoma2} é ${somar(numSoma1, numSoma2)}`)
        break

    case "2":
        let numSubtrair1 = Number(prompt("Digite um número para subtrair:"))
        let numSubtrair2 = Number(prompt("Digite outro número para subtrair:"))
        alert(`A subtração de ${numSubtrair1} e ${numSubtrair2} é ${subtrair(numSubtrair1, numSubtrair2)}`)
        break

    case "3":
        let numDobro = Number(prompt("Digite um número:"))
        alert(`O dobro de ${numDobro} é ${dobro(numDobro)}`)
        break

    default:
        alert("Valor inválido, Tente Novamente!")
        break
}
*/