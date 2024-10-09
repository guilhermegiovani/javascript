export function problem(lines) {
    const quant = Number(lines[0])
    let aux = 1

    for(let i = 1; i <= quant; i++) {
        console.log(`${aux} ${aux + 1} ${aux + 2} PUM`)
        aux = aux + 4
    }
}