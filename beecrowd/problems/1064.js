export function problem(lines) {
    const valores = [lines[0], lines[1], lines[2], lines[3], lines[4], lines[5]].map(Number)

    let numPositivo = 0
    let somaTotal = 0
    
    for(let i = 0; i < valores.length; i++) {
        if(valores[i] > 0) {
            numPositivo += 1
            somaTotal += valores[i]
        }

    }

    const media = somaTotal / numPositivo

    console.log(`${numPositivo} valores positivos`)
    console.log(media.toFixed(1))

}