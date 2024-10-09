export function problem(lines) {
    const [iniJogo, fimJogo] = lines[0].split(' ').map(Number)

    let duracao

    if(fimJogo > iniJogo) {
        duracao = fimJogo - iniJogo
    } else {
        duracao = (24 - iniJogo) + fimJogo
    }

    console.log(`O JOGO DUROU ${duracao} HORA(S)`)
}