export function problem(lines) {
    const valor = Number(lines[0])

    let raizQuad

    for(let i = 1; i <= valor; i++) {
        if(i % 2 == 0) {
            raizQuad = i**2
            console.log(`${i}^2 = ${raizQuad}`)
        }
    }
}