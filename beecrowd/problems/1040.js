export function problem(lines) {
    // outra resolução
    const notas = lines[0].split(' ').map(Number)
    const pesos = [2, 3, 4, 1]

    const soma = (total, peso) => total + peso
    const totalPesos = pesos.reduce(soma, 0)

    const somaPond = (total, nota, indice) => total + (nota * pesos[indice])
    const totalNotas = notas.reduce(somaPond, 0)

    const media = totalNotas / totalPesos

    console.log(`Media: ${media.toFixed(1)}`)

    if(media >= 7) {
        console.log("Aluno aprovado.")
    } else if(media >= 5) {
        const notaExame = Number(lines[1])
        console.log("Aluno em exame.")
        console.log(`Nota do exame: ${notaExame.toFixed(1)}`)
        const mediaExame = (media + notaExame) / 2

        if(mediaExame >= 5) {
            console.log("Aluno aprovado.")
        } else {
            console.log("Aluno reprovado.")
        }
        console.log(`Media final: ${mediaExame.toFixed(1)}`)
    } else {
        console.log("Aluno reprovado.")
    }
}

//-----------------------------------------------------------------------------------------------------------
//                                      Minha Resolução

// const notas = {
//     n1: Number(lines[0]),
//     n2: Number(lines[1]),
//     n3: Number(lines[2]),
//     n4: Number(lines[3]),
// }

// const pesos = {
//     p1: 2,
//     p2: 3,
//     p3: 4,
//     p4: 1,
// }

// function calcularPeso ({n1, n2, n3, n4}, {p1, p2, p3, p4}) {
//     const notaPeso = {
//         m1: n1 * p1,
//         m2: n2 * p2,
//         m3: n3 * p3,
//         m4: n4 * p4,
//         totPeso: p1 + p2 + p3 + p4
//     }

//     return notaPeso
// }

// function calcularMedia({n1, n2, n3, n4}) {
//     const notaPeso = calcularPeso({n1, n2, n3, n4}, pesos)
//     const somaNotas = notaPeso.m1 + notaPeso.m2 + notaPeso.m3 + notaPeso.m4
//     const media = somaNotas / notaPeso.totPeso

//     return media
// }

// function notaExame(nota) {
//     const notaMedia = nota
//     const notaExame = Number(lines[4])

//     return (notaMedia + notaExame) / 2
// }

// function aprovadoReprovado() {
//     const media = calcularMedia(notas)

//     if(media >= 7.0) {
//         return console.log(`Media: ${media.toFixed(1)}\nAluno aprovado.`)

//     } else if(media >= 5.0 && media <= 6.9) {
//         const medExame = notaExame(media)

//         if(medExame >= 5.0) {
//             console.log(`Media: ${media}\nAluno em exame.\nNota do exame: ${Number(lines[4])}\nAluno aprovado.\nMedia final: ${medExame}`)
//         } else {
//             console.log(`Media: ${media.toFixed(1)}\nAluno em exame.\nNota do exame: ${Number(lines[4])}\nAluno reprovado.\nMedia final: ${medExame.toFixed(1)}`)
//         }

//     } else {
//         return console.log(`Media: ${media.toFixed(1)}\nAluno reprovado.`)
//     }
// }

// aprovadoReprovado()