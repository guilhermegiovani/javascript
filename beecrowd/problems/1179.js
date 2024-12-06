export function problem(lines) {

    function impar() {
        const vetorImpar = []
        let auxImpar

        for(let i = 0; i <= 15; i++) {
            auxImpar = lines[i]

            if(auxImpar % 2 != 0 && auxImpar != undefined) {
                vetorImpar.push(auxImpar)
            }
        }

        return vetorImpar
    }

    function par() {
        const vetorPar = []
        let auxPar

        for(let i = 0; i <= 15; i++) {
            auxPar = lines[i]

            if(auxPar % 2 == 0 && auxPar != undefined) {
                vetorPar.push(auxPar)
            }
        }
        
        return vetorPar
    }
    
    function exibir5Pares() {
        const vetorPar = par()

        for(let i = 0; i < 5; i++) {

            if(i <= 5) {
                console.log(`par[${i}] = ${vetorPar[i]}`)
            }
            
        }

    }
    
    function exibir5Impares() {
        const vetorImpar = impar()

        for(let i = 0; i < 5; i++) {

            if(i <= 5) {
                console.log(`impar[${i}] = ${vetorImpar[i]}`)
            }
            
        }

    }

    function exibirRestImpar(iniImpar) {
        const vetorImpar = impar()

        for(let i = iniImpar; i < vetorImpar.length; i++) {
            console.log(`impar[${i-5}] = ${vetorImpar[i]}`)
        }
    }

    function exibirRestPar(iniPar) {
        const vetorPar = par()

        for(let i = iniPar; i < vetorPar.length; i++) {
            console.log(`par[${i-5}] = ${vetorPar[i]}`)
        }
    }

    if(lines[0] % 2 == 0) {
        exibir5Pares()
        exibir5Impares()
    } else {
        exibir5Impares()
        exibir5Pares()
    }

    exibirRestImpar(5)
    exibirRestPar(5)


}