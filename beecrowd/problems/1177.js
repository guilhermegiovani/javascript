export function problem(lines) {
    const t = Number(lines[0])

    function preenchendoVetor(numVet) {
        const vetorN = []

        for(let i = 0; i <= numVet-1; i++) {
            vetorN.push(i)
        }

        return vetorN
    }

    function exibirVetor() {
        const vetorN = preenchendoVetor(t)
        let aux = 0

        for(let i = 0; i < 1000; i++) {
            console.log(`N[${i}] = ${vetorN[aux]}`)
            aux++

            if(aux >= vetorN.length) {
                aux = 0
            }
        }
    }

    exibirVetor()
}