export function problem(lines) {
    const valores = {
        'a': Number(lines[0]),
        'b': Number(lines[1]),
        'c': Number(lines[2]),
        'd': Number(lines[3])
    }

    function verificarValores(a, b, c, d) {
        if(b>c && d>a && (c+d) > (a+b) && c>0 && d>0 && a%2 == 0) {
            console.log("Valores aceitos")
        } else {
            console.log("Valores nao aceitos")
        }
    }

    verificarValores(valores.a, valores.b, valores.c, valores.d)
}


// -------------------------------------------------------------------------------------------------------------
//                                             CORREÇÃO

// const valores = lines[0].split(' ').map(Number)

// function verificarValores(a, b, c, d) {
//     if(b>c && d>a && (c+d) > (a+b) && c>0 && d>0 && a%2 == 0) {
//         console.log("Valores aceitos")
//     } else {
//         console.log("Valores nao aceitos")
//     }
// }

// verificarValores(...valores)
