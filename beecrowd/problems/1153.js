export function problem(lines) {
    const valor = lines[0]
    let fatorial = valor
    
    for(let i = 1; i < valor; i++) {
        fatorial = fatorial * (valor - i)
    }

    console.log(fatorial)
}