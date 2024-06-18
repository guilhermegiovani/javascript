/*
Escreva um programa que seja capaz de calcular a área e o perímetro de um triângulo. O usuário deve inserir as informações necessárias e o programa exibirá os resultados.
*/

// let lado = parseFloat(prompt("Qual o tamnho dos lados?"))

// let perímetro = lado * 3
// let alt = lado * Math.sqrt(3) / 2
// let altura = alt.toFixed(2)
// let áreaT = lado ** 2 * Math.sqrt(3) / 4
// let área = áreaT.toFixed(2)

// alert(`O perímetro do triângulo é ${perímetro} e área é ${área}`)

const ladoA = parseFloat(prompt("Digite o comprimento do lado A:"))
const ladoB = parseFloat(prompt("Digite o comprimento do lado B:"))
const ladoC = parseFloat(prompt("Digite o comprimento do lado C:"))

const perimetro = ladoA + ladoB + ladoC

const sp = perimetro / 2
const area = Math.sqrt(sp * (sp - ladoA) * (sp - ladoB) * (sp - ladoC)).toFixed(2)

alert(`Perimetro do triângulo: ${perimetro}\nÁrea do triângulo: ${area}`)