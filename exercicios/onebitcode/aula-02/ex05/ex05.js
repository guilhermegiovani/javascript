/*
Escreva um programa que seja capaz de calcular descontos. O usuário inserirá o valor da compra e a porcentagem do desconto e receberá o valor do desconto e o total.
*/

let compra = Number(prompt("Qual o valor compra?"))
let porc = Number(prompt("Qual a porcentagem de desconto?"))

let desconto = (porc / 100) * compra
desconto = desconto.toFixed(2)

let total = compra - desconto
total = total.toFixed(2)

alert(`Valor da compra: R$${compra}
Porcentagem de Desconto: ${porc}%
Desconto em dinheiro: R$${desconto}
Valor total: R$${total}`)