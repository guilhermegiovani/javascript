/*
Crie uma função que simule um temporizador. A função deve receber um tempo em milissegundos como argumento e retornar uma Promise que é resolvida após o tempo especificado. Depois, utilize ela com await para criar atrasos de 3, 5 e 7 segundos entre a execução de alertas(com qualquer texto)
*/


function temporizador(milissegundos) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve()
        }, milissegundos)
    })
}

async function executarAlertas() {
    alert("Inicio")

    await temporizador(3000)
    alert("Alerta 1: Se passaram 3 segundos.")

    await temporizador(5000)
    alert("Alerta 2: Se passaram 5 segundos.")

    await temporizador(7000)
    alert("Alert 3: Se passaram 7 segundos.")

    alert("Fim")
}

executarAlertas()




/*
let tempoMiliSeg = 6

function temporizador(atraso1, atraso2, atraso3) {
    const atraso1 = Number(atraso1)
    const atraso2 = Number(atraso2)
    const atraso3 = Number(atraso3)

    return new Promise(function(resolve, reject) {

        if(isNaN(tempoMiliSeg) || tempoMiliSeg === "" || tempoMiliSeg === 0) {
            reject("Promise rejeitada! Escreva um número válido!")
        } else {
            resolve("Promise Resolvida!")
        }

    })
}


setTimeout (function() {
    temporizador()
    .then(function(resultado) {
        console.log(resultado)
    })
    .catch(function(erro) {
        console.log(erro)
    })
    
}, tempoMiliSeg * 1000)


async function tempoAtrasos() {
    const resultado = await temporizador(3, 5, 7).catch(function(erro) {
        console.log(erro)
    })

    setTimeout (function() {
        console.log(`Se passaram ${resultado} segundos.`)
    }, resultado * 1000)
}
*/