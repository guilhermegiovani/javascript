export function problem(lines) {
    const quantNotas = lines[0]

    const notas = []

    const pesos = [2, 3, 5]

    function notasLidas(nota) {
        for(let i = 1; i <= 9; i++) {
            
            if(i <= 3) {
                nota.push(lines[i])
            } else if(i > 3 && i <= 6) {
                nota.push(lines[i])
            } else {
                nota.push(lines[i])
            }
        }

        return {nota}
    }

    function calcMedia(nota, peso) {
        const notas = notasLidas(nota)
        const somaPeso = peso[0] + peso[1] + peso[2]

        console.log(notas)

        const calcNota1 = (notas[0] * peso[0]) + (notas[1] * peso[1]) + (notas[2] * peso[2])
        const calcNota2 = (notas[3] * peso[0]) + (notas[4] * peso[1]) + (notas[5] * peso[2])
        const calcNota3 = (notas[6] * peso[0]) + (notas[7] * peso[1]) + (notas[8] * peso[2])

        const media1 = calcNota1 / somaPeso
        const media2 = calcNota2 / somaPeso
        const media3 = calcNota3 / somaPeso

        return console.log(`${media1.toFixed(1)}\n${media2.toFixed(1)}\n${media3.toFixed(1)}`)
    }

    calcMedia(notas, pesos)

    // beecrowd esta demorando muito para a verificação
}

// const quantNotas= lines[0]

// const notas = [].map(Number)

// const pesos = [2, 3, 5]

// function notasLidas(nota) {
//     for(let i = 1; i <= quantNotas; i++) {
//         nota.push(lines[i].split(", "))
//     }
    
//     return nota.map(Number)
// }

// function calcMedia(nota, peso) {
//     const notas = notasLidas(nota)
//     const somaPeso = peso[0] + peso[1] + peso[2]
//     const media = []

//     for(let i = 0; i <= notas.length; i++) {
//         let calcNota = (notas[i[0]] * peso[0]) + (notas[i[1]] * peso[1]) + (notas[i[2]] * peso[2])
//         let calcMedia = calcNota / somaPeso

//         media.push(calcMedia)
//     }

//     return console.log(`${media[0].toFixed(1)}\n${media[1].toFixed(1)}\n${media[2].toFixed(1)}`)
// }

// calcMedia(notas, pesos)