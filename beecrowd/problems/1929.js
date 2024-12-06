export function problem(lines) {

    function data() {
        const varetas = []

        // const [var1, var2, var3, var4] = lines[0].split(" ")

        // varetas.push(var1, var2, var3, var4)

        for(let i = 0; i < lines.length; i++) {
            varetas.push(lines[i])
        }

        return varetas.map(Number)
    }

    function exibirResult() {
        const varetas = data()
        const ordemCres = varetas.sort((a, b) => a - b)

        // let soma = 0

        // for(let i = 0; i < ordemCres.length; i++) {

        //     for(let j = i + 1; j < ordemCres.length; j++) {
        //         soma = ordemCres[i] + ordemCres[j]

        //         if(soma >= 100) {
        //             break
        //         }
        //     }

        // }

        const somaLados = ordemCres[0] + ordemCres[1]

        if(somaLados != ordemCres[2] && somaLados < ordemCres[3]) {
            console.log("S")
        } else {
            console.log("N")
        }

    }

    exibirResult()
}

// const maiorVar = Math.max.apply(null, valores)
// const menorVar = Math.min.apply(null, valores)