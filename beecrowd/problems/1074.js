export function problem(lines) {
    const valorInt = Number(lines[0])
    const valoresLidos = [].map(Number)

    for(let i = 1; i <= valorInt; i++) {
        valoresLidos.push(lines[i])

        if(lines[i] == 0) {
            console.log("NULL")
        } else if(lines[i] > 0 && lines[i] % 2 == 0) {
            console.log("EVEN POSITIVE")
        } else if(lines[i] > 0 && lines[i] % 2 >= 1) {
            console.log("ODD POSITIVE")
        } else if(lines[i] < 0 && lines[i] % 2 == 0) {
            console.log("EVEN NEGATIVE")
        } else {
            console.log("ODD NEGATIVE")
        }
    }
}