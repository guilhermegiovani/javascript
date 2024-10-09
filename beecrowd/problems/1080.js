export function problem(lines) {
    const valores = [].map(Number)

    let maior = 0
    let posicao = 0
    
    for(let i = 0; i < 100; i++) {
        valores.push(lines[i])

        if(lines[i] > maior) {
            maior = lines[i]
            posicao = i + 1
        }
    }

    console.log(maior)
    console.log(posicao)
}