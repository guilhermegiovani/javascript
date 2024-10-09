export function problem(lines) {
    const [x, y] = [lines[0], lines[1]].map(Number)
    let aux = 1

    for(let i = 1; i <= Math.trunc(y / x); i++) {
        console.log(`${aux} ${aux + 1} ${aux + 2} ${aux + 3} ${aux + 4} ${aux + 5} ${aux + 6} ${aux + 7} ${aux + 8} ${aux + 9} ${aux + 10} ${aux + 11} ${aux + 12} ${aux + 13} ${aux + 14} ${aux + 15} ${aux + 16}`)
        aux += 17
    }
}