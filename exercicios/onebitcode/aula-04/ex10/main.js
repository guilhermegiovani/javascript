/*
Crie dois arquivos JavaScript: um chamado main.js e o outro chamado funcoes.js. No arquivo funcoes.js exporte uma função chamada dobro que recebe um número como parâmetro e retorna o dobro desse numero. No arquivo main.js importe a função dobro do arquivo funcoes.js e use-a para calcular o dobro de um número com o prompt()
*/

import { dobro } from "./funcoes.js"

let num = Number(prompt('Digite um número:'))
// let numDobro = dobro(num)

alert(`O dobro de ${num} é ${dobro(num)}`)

/*
import { dobro } from "./funcoes.js"

let num = Number(prompt('Digite um número:'))

if(!isNaN(num)) {
    let res = dobro(num)
    alert(`O dobro de ${num} é ${res}`)
} else {
    alert("Por favor, insira um número válido.")
}
*/