export function problem(lines) {
    // n - quantidade de casos
    // x - conta a partir do x com ele incluso
    // y - quantidade de ímpares consecutivos

    
    const n = Number(lines[0])
    
    let quantImpares = 0
    let aux = 0
    let somaImpares = 0
    
    const x = [].map(Number)
    const y = [].map(Number)

    for(let i = 1; i <= n*2; i += 2) {
        x.push(lines[i])
        y.push(lines[i+1])
    }

    console.log(x, y)

    for(let i = 0; i <= n; i++) {

        for(let c = x[i]; c <= (y[i]*2+x[i]); c++) {
            quantImpares = y[i]

            if(c % 2 != 0 && aux != quantImpares) {
                somaImpares += c
                aux += 1
            }
        }

        console.log(somaImpares)
        aux = 0
        somaImpares = 0
        quantImpares = 0
    }

}

// const n = Number(lines[0])

// let quantImpares = 0
// let aux = 0
// let somaImpares = 0

// const arrayX = [].map(Number)
// const arrayY = [].map(Number)

// for(let i = 1; i <= n*2; i += 2) {
//     const [x, y] = lines[i].split(' ')
    
//     arrayX.push(x)
//     arrayY.push(y)
// }

// for(let i = 0; i <= n; i++) {

//     for(let c = arraX[i]; c <= (arrayY[i]*2+arrayX[i]); c++) {
//         quantImpares = arrayY[i]

//         if(c % 2 != 0 && aux != quantImpares) {
//             somaImpares += c
//             aux += 1
//         }
//     }

//     console.log(somaImpares)
//     aux = 0
//     somaImpares = 0
//     quantImpares = 0
// }
