export function problem(lines) {
    const valores = [lines[0], lines[1], lines[2], lines[3], lines[4]].map(Number)

    let numPares = 0

    for(let i = 0; i < valores.length; i++) {
        if(valores[i] % 2 == 0) {
            numPares += 1
        }
    }

    console.log(`${numPares} valores pares`)
}