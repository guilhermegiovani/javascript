/*
Escreva um programa JavaScript que solicite ao usuário um número e exiba a tabuada desse número de 1 a 10.
*/

let num = Number(prompt("Digite um número:"))
let texto = ""

for (let i = 1; i <= 10;i++) {
    let res = num * i
    texto += `${num} x ${i} = ${res}\n`
}

alert(texto)