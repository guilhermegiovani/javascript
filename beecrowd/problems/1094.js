export function problem(lines) {
    const quantExperimento = lines[0]

    // const teste = ['10 C', '6 R', '15 S', '3 C', '8 R', '2 S', '7 C', '6 R', '4 S']

    const cadaEspecie = {
        'r': 0,
        's': 0,
        'c': 0
    }

    for(let i = 0; i <= quantExperimento * 2; i++) {
        if(lines[i] == 'R') {
            cadaEspecie.r += Number(lines[i - 1])
        } else if(lines[i] == 'S') {
            cadaEspecie.s += Number(lines[i - 1])
        } else if(lines[i] == 'C') {
            cadaEspecie.c += Number(lines[i - 1])
        }
    }

    const totCobaias = cadaEspecie.r + cadaEspecie.s + cadaEspecie.c
    const porcRato = (cadaEspecie.r / totCobaias) * 100
    const porcSapo = (cadaEspecie.s / totCobaias) * 100
    const porcCoelho = (cadaEspecie.c / totCobaias) * 100

    console.log(`Total: ${totCobaias} cobaias`)
    console.log(`Total de coelhos: ${cadaEspecie.c}`)
    console.log(`Total de ratos: ${cadaEspecie.r}`)
    console.log(`Total de sapos: ${cadaEspecie.s}`)
    console.log(`Percentual de coelhos: ${porcCoelho.toFixed(2)} %`)
    console.log(`Percentual de ratos: ${porcRato.toFixed(2)} %`)
    console.log(`Percentual de sapos: ${porcSapo.toFixed(2)} %`)
}

// cobaia / tot * 100