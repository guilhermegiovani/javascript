export function problem(lines) {
    const x = Number(lines[0])

    function data(num) {
        const valorIni = num
        const valores = []

        let metadeAnterior = valorIni

        for(let i = 0; i < 100; i++) {
            valores.push(metadeAnterior)
            metadeAnterior /= 2
        }

        return valores
    }

    function exibirVetores() {
        const valores = data(x)

        let num = 0

        for(let i = 0; i < 100; i++) {
            num = valores[i]
            console.log(`N[${i}] = ${num.toFixed(4)}`)
        }
    }

    exibirVetores()

    // beecrownd não aceitou / está adicionando +1 em uns dos números
}