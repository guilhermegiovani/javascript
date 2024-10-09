export function problem(lines) {
    const quant = Number(lines[0])

    for(let i = 1; i <= quant; i++) {
        console.log(`${i} ${i**2} ${i**3}`)
    }
}