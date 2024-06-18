/*
Crie dois arquivos JavaScript: um chamado main.js e o outro chamado funcoes.js. No arquivo funcoes.js exporte uma função chamada dobro que recebe um número como parâmetro e retorna o dobro desse numero. No arquivo main.js importe a função dobro do arquivo funcoes.js e use-a para calcular o dobro de um número com o prompt()
*/

export function dobro(numero) {
    let numDobro = numero * 2
    return numDobro
}

/*
export function dobro(numero) {
    return numero * 2
}
*/