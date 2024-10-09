export function problem(lines) {
    const valores = [lines[0], lines[1], lines[2], lines[3], lines[4]].map(Number)

    let numPar = 0
    let numImpar = 0
    let numPositivo = 0
    let numNegativo = 0

    for(let i = 0; i < valores.length; i++) {
        if(valores[i] % 2 == 0) {
            numPar += 1
        }

        if(valores[i] % 2 >= 1 || valores[i] % 2 <= -1) {
            numImpar += 1
        }

        if(valores[i] > 0) {
            numPositivo += 1
        }

        if(valores[i] < 0) {
            numNegativo += 1
        }
    }

    console.log(`${numPar} valor(es) par(es)`)
    console.log(`${numImpar} valor(es) impar(es)`)
    console.log(`${numPositivo} valor(es) positivo(s)`)
    console.log(`${numNegativo} valor(es) negativo(s)`)
}