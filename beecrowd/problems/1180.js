export function problem(lines) {
    const n = lines[0]
    
    function data() {
        const vetorX = []

        for(let i = 1; i <= n; i++) {
            vetorX.push(lines[i])
        }

        return vetorX
    }

    function menorValor() {
        const vetorX = data()
        
        // let min = vetorX.map(Number).reduce((a, b) => {return Math.min(a, b)})
        
        console.log(min)

        return min
    }

    menorValor()

    function posicaoMenorValor() {
        const vetorX = data()
        const menor = menorValor()
        let posicao = 0

        for(let i = 0; i <= vetorX.length; i++) {

            if(vetorX[i] == menor) {
                posicao = i
            }
        }

        return posicao
    }

    function exibir() {
        const menor = menorValor()
        const posicaoMenor = posicaoMenorValor()

        console.log(`Menor valor: ${menor}`)
        console.log(`Posicao: ${posicaoMenor}`)
    }

    exibir()

    // O site lixo da beecrownd não aceitou
}