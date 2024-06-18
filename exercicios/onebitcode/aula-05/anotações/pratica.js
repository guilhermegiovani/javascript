/*

OBJECT
------------------------------------------------------------------------------------------------------------------------------------
// Armazenou
let pessoa = {
    idade: 22,
    nome: "Guilherme",
    endereco: { rua: "Qualquer coisa", numero: "101" }
}

// Acessou
console.log(pessoa.nome)
console.log(pessoa.endereco)
console.log(pessoa.endereco.rua)

// Manipular Object
pessoa.nome = "Lucas"
console.log(pessoa)

pessoa.telefone = "16 99856-7423"

console.log(pessoa)
--------------------------------------------------------------------------------------------------------------------------------------
let pessoa = {
    idade: 22,
    nome: "Guilherme",
    endereco: { rua: "Qualquer coisa", numero: "101" },
    ola: function() {
        alert(`Olá, Mundo! Aqui é o ${this.nome}!`) // Para pegar uma propriedade do próprio objeto usa o this.
    }
}

pessoa.ola()

pessoa.nome = "Leonardo"

pessoa.ola()
----------------------------------------------------------------------------------------------------------------------------------------
let calculadora = {
    x: 5,
    y: 9,
    somar: function() {
        console.log(this.x + this.y)
    }
}

calculadora.somar()
calculadora.x = 50
calculadora.somar()

*/



/*

ARRAY
------------------------------------------------------------------------------------------------------------------------------------
let listaDeFrutas = ["Maçã", "Laranja", "Uva"]

console.log(listaDeFrutas[0])

console.log(listaDeFrutas)
listaDeFrutas[1] = "Banana"
console.log(listaDeFrutas)
----------------------------------------------------
Push()
----------
listaDeFrutas.push("Abacaxi")
console.log(listaDeFrutas)
------------------------------
Pop()
----------
listaDeFrutas.pop()
console.log(listaDeFrutas)
------------------------------
Shift()
----------
listaDeFrutas.shift()
console.log(listaDeFrutas)
------------------------------
Unshift()
----------
listaDeFrutas.unshift("Laranja")
console.log(listaDeFrutas)

------------------------------------------------------------------------------------------------------------------------------------
let listaDeFrutas = ["Maçã", "Laranja", "Uva"]

let numeros = [4, 9, 10, 3, false, true, "5"]

console.log(listaDeFrutas)
console.log(numeros)
----------------------------------------------------------
Concat()
----------
let novoArray = listaDeFrutas.concat(numeros)
console.log(novoArray)
---------------------------------------------------
Join()
----------
let listaEmTexto = novoArray.join("; ")
console.log(listaEmTexto)
---------------------------------------------------
Split()
----------
let resultado = listaEmTexto.split("; ")
console.log(resultado)

--------------------------------------------------------------------------------------------------------------------------------------
let frutas = ["Maçã", "Laranja", "Uva", "Banana", "Abacaxi", "Goiaba", "Melão"]

Slice()
----------
const duasPrimeiras = frutas.slice(1, 5) // o primeiro parâmetro ta incluso no resultado, o segundo parâmetro não

console.log(frutas)
console.log(duasPrimeiras)
-------------------------------------------------------------------------------------------------
Splice()
-----------
frutas.splice(2, 2, "Limão")
// Primerio parâmetro: Inicio, era remover tudo que vier depois incluinda ela mesma
// Segundo parâmetro: Quantos elementos você quer excluir
// Terceiro parâmetro: Substituir(remover) elementos em uma posição especifica do array e colocar novos naquela posição

console.log(frutas)

------------------------------------------------------------------------------------------------------------------------------------
const numeros = [3, 7, 4, 9, 10, 3]

forEach()
-------------
numeros.forEach(function(elementoAtual, indiceAtual, arrayCompleto) {
    // Primeiro parâmetro: elemento atual
    // Segundo parâmetro: indice do elemento atual
    // Terceiro parâmetro: array completo
    console.log(`O elemento no indice ${indiceAtual} é ${elementoAtual}`)
})

OU

function mostrarElementos(elementoAtual, indiceAtual, arrayCompleto) {
    // Primeiro parâmetro: elemento atual
    // Segundo parâmetro: indice do elemento atual
    // Terceiro parâmetro: array completo
    console.log(`O elemento no indice ${indiceAtual} é ${elementoAtual}`)
}

numeros.forEach(mostrarElementos)

// MANUALMENTE

for (let i = 0; i < numeros.length; i++) {
    console.log(`O elemento no indice ${i} é ${numeros[i]}`)
}

-------------------------------------------------------------------------------------------------------
Map()
--------------
numeros.map(function(elementoAtual, indiceAtual, arrayOriginal) {
    console.log(`indice: ${indiceAtual} | valor: ${elementoAtual}`)
})

Dobro
--------
const dobroDosNumeros = numeros.map(function (elementoAtual, indiceAtual, arrayOriginal) {
  console.log(`Indice: ${indiceAtual} | Valor: ${elementoAtual}`)
  return { dobro: elementoAtual * 2, metade: elementoAtual / 2, valorOriginal: elementoAtual }
})

console.log(dobroDosNumeros)

------------------------------------------------------------------------------------------------------------------------------------
const numeros = [3, 7, 4, 9, 10, 3]

Filter()
----------------------------
Pares
--------
const pares = numeros.filter(function (elementoAtual) {
    return elementoAtual % 2 === 0
})

console.log(numeros, pares)

-------------------------------------------------------------
Impares
---------
const impares = numeros.filter(function (elementoAtual) {
    return elementoAtual % 2 !== 0
})

console.log(numeros, impares)

---------------------------------------------------------------
const pessoas = [
    { id: 100, nome: "Guilherme", idade: 22 },
    { id: 101, nome: "Lucas", idade: 28 },
    { id: 102, nome: "Juliana", idade: 30 },
    { id: 103, nome: "Isaac", idade: 28 },
    { id: 104, nome: "Leonardo", idade: 25 },
]

let idadeMaxima =  Number(prompt("Escolha uma idade máxima:"))

const pessoasDentroLimite = pessoas.filter(function(pessoas) {
    return pessoas.idade <= idadeMaxima
})

console.log(pessoasDentroLimite)

-----------------------------------------------------------------
Find
----------------------
// POR NOME

let nomePesquisado =  (prompt("Perquisar por nome:"))

const pessoaEncontrada = pessoas.find(function(pessoa) {
    return pessoa.nome === nomePesquisado
})
-----------------------------------------------------------------
// POR IDADE

let idade =  (prompt("Perquisar por idade:"))

const pessoaEncontrada = pessoas.find(function(pessoa) {
    return pessoa.idade == idade
})

console.log(pessoaEncontrada)

*/



/*

const numeros = [3, 7, 4, 9, 10, 3]

// function mostrarElementos(elementoAtual, indiceAtual, arrayCompleto) {
//     console.log(`O elemento no indice ${indiceAtual} é ${elementoAtual}`)
// }

// Como funciona o forEach por baixo dos panos

function paraCada(array, funcaoParaExecutar) {
    for (let i = 0; i < array.length; i++) {
        funcaoParaExecutar(array[i], i, array)
    }
}

paraCada(numeros, function mostrarElementos(elementoAtual, indiceAtual, arrayCompleto) {
    console.log(`O elemento no indice ${indiceAtual} é ${elementoAtual}`)
})

OU

paraCada(numeros, mostrarElementos)

*/
