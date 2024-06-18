// num.length para ver o comprimento/quantidade de elementos em um array 
// num[posiçao do elemento] = valor do elemento

let num = [5, 8, 2, 9, 3]
num.push(1) // Acrescenta valores em um array
num.sort() // Deixa os elementos em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posição`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(1) // num.indexOf(valor)
if (pos == -1) {
    console.log('O valor não encontrado!')
} else {
    console.log(`O valor 1 está na posição ${pos}`)
}

for (let c = 0;c < num.length; c++) {
    console.log(num[c])
}

/*
Um array/vetor/variável composta é uma variável que tem vários elementos, cada elemento é composto por seu valor e por uma chave de identificação
*/