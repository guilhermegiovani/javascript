export function problem(lines) {
    const numCasos = Number(lines[0])

    const pa = [].map(Number)
    const pb = [].map(Number)

    const g1 = [].map(Number)
    const g2 = [].map(Number)

    function pegandoPAePB() {

        for (let i = 1; i <= numCasos*4; i += 4) {
            pa.push(lines[i])
            pb.push(lines[i+1])
        }
    }

    function pegandoG1eG2() {

        for (let i = 3; i <= numCasos*4; i += 4) {
            g1.push(lines[i])
            g2.push(lines[i+1])
        }
    }

    pegandoPAePB()
    pegandoG1eG2()

    
    function crescPopA(pop, crescPerc) {
        const populacao = pop
        const percentualCresc = crescPerc
        const crescimentoAnual = []

        let aux

        for(let i = 0; i < pop.length; i++) {
            aux = percentualCresc[i] / 100 * populacao[i]
            crescimentoAnual.push(aux.toFixed(0))
        }

        return crescimentoAnual
        
    }

    function crescPopB(pop, crescPerc) {
        const populacao = pop
        const percentualCresc = crescPerc
        const crescimentoAnual = []

        let aux

        for(let i = 0; i < pop.length; i++) {
            aux = percentualCresc[i] / 100 * populacao[i]
            crescimentoAnual.push(aux.toFixed(0))
        }

        return crescimentoAnual
        
    }

    function popAMaiorQuePopB(popA, popB) {
        const populacaoA = popA
        const crescAnualA = crescPopA(pa, g1)
        // populacaoA.map(Number)
        // crescAnualA.map(Number)

        const populacaoB = popB
        const crescAnualB = crescPopB(pb, g2)
        // populacaoB.map(Number)
        // crescAnualB.map(Number)

        const tempo = []

        let popAtualA = [].map(Number)
        let aux = 0
        let aux2 = 0

        for(let i = 0; i < popA.length; i++) {
            aux = Number(populacaoA[i])
            aux2 = Number(crescAnualA[i])
            
            
            for(let c = 0; c <= 200 ; c++) {

                // if(aux > populacaoB[i]) {
                //     popAtualA.push(aux)
                //     tempo.push(c)
                //     console.log(tempo[i])
                //     return
                // } else {
                //     aux += aux2
                // }

                while(aux <= populacaoB[i]) {
                    aux += aux2
                }

                if(c > 100 && aux > populacaoB[i]) {
                    tempo.push("Mais de 1 seculo.")
                    return
                }

                popAtualA.push(aux)
                tempo.push(c)

            }

            console.log(popAtualA[i])
            console.log(i)

           
        }
        
    }

    popAMaiorQuePopB(pa, pb)

    /*
        populacao A + crescPopA até ser maior que poulacao B

        Impossivel resolver
    */

}