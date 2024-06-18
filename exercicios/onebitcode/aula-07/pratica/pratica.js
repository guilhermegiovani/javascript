function somaComPromise(a, b) {
    return new Promise(function(resolve, reject) {
        const numA = Number(a)
        const numB = Number(b)

        if(isNaN(numA) || isNaN(numB)) {
            reject("Números inválidos!")
        } else {
            resolve(numA + numB)
        }

    })

    // return minhaPromise
}

somaComPromise(3, 9)
    .then(function(resultado) {
        console.log(resultado)
        console.log("----------------------------------")
    })
    .catch(function(erro) {
        console.log(erro)
    })


async function somaAsync(a, b) {
    const numA = Number(a)
    const numB = Number(b)

    if(isNaN(numA) || isNaN(numB)) {
       return Promise.reject("Números inválidos!")
    }

    return numA + numB
}

async function executar() {

    const resultado = await somaAsync(3, "erro").catch(function(motivo) {
        console.log(motivo)
    })
    console.log("Executando...")
    console.log(resultado)

    // try {
    //     const resultado = await somaAsync(3, 9)
    //     console.log("Executando...")
    //     console.log(resultado)
    // } catch(erro) {
    //     console.log(erro)
    // }
}

executar()



/*

// Promise

console.log("Iniciado")

const minhaPromise = new Promise(function(resolve, reject) {

    // reject("Promise rejeitada")

    // if(true){
    //     reject("Promise rejeitada")
    // }

    // setTimeout(function() {
    //     console.log("Executando a promise...")
    //     resolve("Promise resolvida")
    // }, 3 * 1000)

    if(true) {
        reject("Promise rejeitada")
    } else {
        setTimeout(function() {
            console.log("Executando a promise...")
            resolve("Promise resolvida")
        }, 3 * 1000)
    }

})

minhaPromise.then(function(resultado) {
    console.log(resultado)
})

minhaPromise.catch(function(motivo) {
    console.log(motivo)
})

console.log(minhaPromise)

console.log("Finalizado")

------------------------------------------------------------------------------------------------------------------------------------------

function somaAssincrona(a, b) {
    return new Promise(function(resolve, reject) {
        const numA = Number(a)
        const numB = Number(b)

        if(isNaN(numA) || isNaN(numB)) {
            reject("Números inválidos!")
        } else {
            resolve(numA + numB)
        }

    })

    // return minhaPromise
}

somaAssincrona(3, 9).then(function(resultado) {
    console.log(resultado)
}).catch(function(motivo) {
    console.log(motivo)
}).finally(function() {
    console.log("Promise Finalizada!")
})

console.log("Finalizado!")

---------------------------------------------------------------------------------------------------------------------------------------

// async

async function somaAsync(a, b) {
    const numA = Number(a)
    const numB = Number(b)

    if(isNaN(numA) || isNaN(numB)) {
       return Promise.reject("Números inváidos!")
    }

    return numA + numB
}

somaAsync(3, "texto").then(function(resultado) {
    console.log(resultado)
}).catch(function(motivo) {
    console.log(motivo)
})

console.log("Finalizado!")

-----------------------------------------------------------------------------------------------------------------------------------------

function somaComPromise(a, b) {
    return new Promise(function(resolve, reject) {
        const numA = Number(a)
        const numB = Number(b)

        if(isNaN(numA) || isNaN(numB)) {
            reject("Números inválidos!")
        } else {
            resolve(numA + numB)
        }

    })

    // return minhaPromise
}

somaComPromise(3, 9)
    .then(function(resultado) {
        console.log(resultado)
        console.log("----------------------------------")
    })
    .catch(function(erro) {
        console.log(erro)
    })
-----------------------------------------------------------------------------------------------------------------------------------------

async function somaAsync(a, b) {
    const numA = Number(a)
    const numB = Number(b)

    if(isNaN(numA) || isNaN(numB)) {
       return Promise.reject("Números inválidos!")
    }

    return numA + numB
}

// await

async function executar() {

    const resultado = await somaAsync(3, "erro").catch(function(motivo) {
        console.log(motivo)
    })
    console.log("Executando...")
    console.log(resultado)

    // try {
    //     const resultado = await somaAsync(3, 9)
    //     console.log("Executando...")
    //     console.log(resultado)
    // } catch(erro) {
    //     console.log(erro)
    // }
}

executar()

*/



/*

// setInterval

console.log("Script iniciado")
let contador = 1

const intervalId = setInterval(function() {
    console.log(`Executado ${contador} vezes após 2 segundos`)
    contador++
    if(contador >= 6) {
        clearInterval(intervalId)
    }
}, 2 * 1000)

console.log("Script finalizado")

*/



/*

// setTimeout

console.log("Script iniciado")
console.log("Iniciando contagem")

setTimeout(function() {
    console.log("Executado após 3 segundos")
}, 3000)

// clearTimeout

console.log("Contagem iniciada")
console.log("O script ainda está em execução")
console.log("Script finalizado")

*/