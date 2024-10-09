export function problem(lines) {
    const [a, b, c] = lines[0].split(' ').map(Number)

    function perimetroTriangulo(ladoA, ladoB, ladoC) {
        const perimetroTri = ladoA + ladoB + ladoC

        return console.log(`Perimetro = ${perimetroTri.toFixed(1)}`)
    }

    function areaTrapezio(ladoA, ladoB, ladoC) {
        const areaTrap = ((a + b) * c) / 2

        return console.log(`Area = ${areaTrap.toFixed(1)}`)
    }

    if(b + c > a) {
        perimetroTriangulo(a, b, c)
    } else {
        areaTrapezio(a, b, c)
    }

}

//--------------------------------------------------------------------------------------------------------------
//                                          Outra Resolução

// const [a, b, c] = lines[0].split(' ').map(Number)

// if(a + b > c && a + c > b && b + c > a) {
//     const perimetro = a + b + c
//     console.log(`Perimetro = ${perimetro.toFixed()}`)
// } else {
//     const area = ((a + b) * c) / 2
//     console.log(`Area = ${area.toFixed(1)}`)
// }

// const a = Number(lines[0])
// const b = Number(lines[1])
// const c = Number(lines[2])