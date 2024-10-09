export function problem(lines) {
    // hora inicial, minuto inicial, hora final, minuto final

    const [iniHora,iniMin, fimHora, fimMin] = lines[0].split(' ').map(Number)

    const inicio = iniHora * 60 + iniMin
    const fim = fimHora * 60 + fimMin

    let duracaoMinTot

    if(fim > inicio) {
        duracaoMinTot = fim - inicio
    } else {
        duracaoMinTot = (24 * 60 - inicio) + fim
    }

    const duracaoHora = Math.floor(duracaoMinTot / 60)
    const duracaoMin = duracaoMinTot % 60

    console.log(`O JOGO DUROU ${duracaoHora} HORA(S) E ${duracaoMin} MINUTO(S)`)
}

//const iniHora = Number(lines[0])
// const iniMin = Number(lines[1])
// const fimHora = Number(lines[2])
// const fimMin = Number(lines[3])

// if(fimHora > iniHora) {
//     duracaoHora = fimHora - iniHora
// } else {
//     duracaoHora = (24 - iniHora) + fimHora
// }

// if(fimMin > iniMin) {
//     duracaoMin = fimMin - iniMin
// } else {
//     duracaoMin = (60 - iniMin) + fimMin
//     if(duracaoMin >= 60) {
//         duracaoHora = duracaoHora + 1
//         duracaoMin = 60 - duracaoMin
//     }
// }