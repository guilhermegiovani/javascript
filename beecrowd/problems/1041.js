export function problem(lines) {
    // const x = Number(lines[0])
    // const y = Number(lines[1])

    const [x, y] = lines[0].split(' ').map(Number)

    function verificarQuadrante(x, y) {
        // const pi = 3.1415

        if(x > 0 && y > 0) {
            return 'Q1'
        } else if(x < 0 && y > 0) {
            return 'Q2'
        } else if(x < 0 && y < 0) {
            return 'Q3'
        } else if(x > 0 && y < 0) {
            return 'Q4'
        } else if(x == 0 && y == 0) {
            return 'Origem'
        } else if(x == 0) {
            return 'Eixo Y'
        } else {
            return 'Eixo X'
        }
    }

    const quadrante = verificarQuadrante(x, y)

    console.log(quadrante)
}