export function problem(lines) {
    // const [valor1, valor2] = lines[0].split(' ').map(Number)

    const valor1 = Number(lines[0])
    const valor2 = Number(lines[1])

    let somaImpares1 = 0
    let somaImpares2 = 0

    if(valor1 >= 0) {
        for(let i = 0; i < valor1; i++) {
            if(i % 2 >= 1) {
                somaImpares1 += i
            }
        }
    } else {
        for(let i = 0; i > valor1; i--) {
            if(i % 2 <= -1) {
                somaImpares1 += i
            }
        }
    }

    if(valor2 >= 0) {
        for(let i = 0; i < valor2; i++) {
            if(i % 2 >= 1) {
                somaImpares2 += i
            }
        }
    } else {
        for(let i = 0; i > valor2; i--) {
            if(i % 2 <= -1) {
                somaImpares2 += i
            }
        }
    }

    if(valor1 < 0 || valor2 < 0) {
        const total = somaImpares1 + somaImpares2
        console.log(total)
    } else {
        const total = somaImpares1 - somaImpares2
        console.log(total)
    }

}