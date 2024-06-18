/*
Utilize a função temporizadora do exercício anterior para criar uma função async que retorna um número aleatório após 3 segundos. Depois, crie uma função que recebe um argumento "quantidade" e retorna um array com essa quantidade de números aleatórios.
*/

function temporizador(milissegundos) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve()
        }, milissegundos)
    })
}

async function gerarNumAleatorio() {
    await temporizador(3000)  // Esperar 3 segundos
    return Math.floor(Math.random() * 100)  // Gerar um número aleatório entre 0 e 99
}

async function gerarNumerosAleatorios(quantidade) {
    const numAletorio = []

    for (let i = 1; i <= quantidade; i++) {
        console.log(`Gerando ${i}° números...`)
        const numero = await gerarNumAleatorio()
        numAletorio.push(numero)
    }

    return numAletorio
}


async function gerarNumerosAleatoriosComPromiseAll(quantidade) {
    const arrayInicial = new Array(quantidade).fill(0)
    console.log(arrayInicial)

    const numerosPromise = arrayInicial.map(function (num, indice) {
        console.log(`Gerando ${indice + 1}° números...`)
        return gerarNumAleatorio()
    })
    console.log(numerosPromise)

    const numerosAletaorio = await Promise.all(numerosPromise)

    return numerosAletaorio
}


async function exemplo() {
    const numeros = await gerarNumerosAleatoriosComPromiseAll(5)  // Gerar 5 números aleatórios
    console.log(numeros)
}

exemplo()





/*
const quantNum = []

function gerarNumAleatorio() {
    let gerarNum = Math.floor(Math.random() * (999 - 1 + 1)) + 1
    

    quantNum.push(gerarNum)

    // quantNum.forEach(function(eleAtual, indAtual, arrayCompleto) {
    //     console.log(`O número no indice ${indAtual} é ${eleAtual}`)
    // })

    // quantNum.map(function(eleAtual, indAtual, arrayCompleto) {
    //     console.log(`Indice: ${indAtual + 1} | Número: ${eleAtual}`)
    // })
}

async function temporizador() {
    
    // setTimeout

    // setTimeout (function() {

    //     quantNum.push(gerarNum)

    //     console.log(gerarNum)

    //     quantNum.forEach(function(elementoAtual, indiceAtual, arrayCompleto) {
    //         console.log(`O elemento no indice ${indiceAtual} é ${elementoAtual}`)
    //     })

        
    // }, 3 * 1000)


    // setInterval

    let cont = 0
    let totNum = 0
    
    const intId = setInterval(function() {
        
        if(cont >= 5) {
            clearInterval(intId)
            console.log("Finalizado!")
            console.log(`A quantidade de números aleatórios gerados é ${totNum}`)
        } else {
            gerarNumAleatorio()
    
            totNum++
            cont++
        }
        
        
    }, 3 * 1000)

    setTimeout(function() {
        console.log(quantNum)
    }, 18 * 1000)
    
}


temporizador()
*/