export function problem(lines) {
    const valorInteiro = Number(lines[0])
    const valoresLidos = [].map(Number)

    let intervaloIn = 0
    let intervaloOut = 0

    for(let i = 1; i <= valorInteiro; i++) {
        valoresLidos.push(lines[i])

        if(lines[i] >= 10 && lines[i] <= 20) {
            intervaloIn += 1
        } else{
            intervaloOut += 1
        }
    }

    console.log(`${intervaloIn} in`)
    console.log(`${intervaloOut} out`)
}