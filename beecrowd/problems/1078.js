export function problem(lines) {
    const valor = Number(lines[0])

    let resultado

    for(let i = 1; i <= 10; i++) {
        resultado = i * valor
        console.log(`${i} x ${valor} = ${resultado}`)
    }
}