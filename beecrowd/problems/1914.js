export function problem(lines) {

    function data() {
        const numCasos = lines[0]

        const nomeJog1 = []
        const nomeJog2 = []

        const numero1 = []
        const numero2 = []

        // let [nome1, escolha1, nome2, escolha2] = [0, 0, 0, 0]
        // let [num1, num2] = [0, 0]

        for(let i = 1; i <= numCasos*6; i += 6) {

            // [nome1, escolha1, nome2, escolha2] = lines[i].split(" ")

            nomeJog1.push(lines[i])
            nomeJog2.push(lines[i+2])

            // [num1, num2] = lines[i+1].split(" ")
    
            numero1.push(lines[i+4])
            numero2.push(lines[i+5])
        }

        return [nomeJog1, nomeJog2, numero1.map(Number), numero2.map(Number)]

    }

    function parOuImpar() {
        const [nomeJog1, nomeJog2, numero1, numero2] = data()

        let soma = 0

        for(let i = 0; i < nomeJog1.length; i++) {
            soma = numero1[i] + numero2[i]

            if(soma % 2 == 0) {
                console.log(nomeJog1[i])
            } else {
                console.log(nomeJog2[i])
            }

        }
    }

    parOuImpar()

    // beecrownd não aceitou

}

/*
4
Quico PAR Chiquinha IMPAR
9 7
Dami PAR Marcus IMPAR
12 3
Dayran PAR Conrado IMPAR
3 1000000000
Popis PAR Chaves IMPAR
2 7
*/

/*
function data() {
    const numCasos = lines[0]

    const nomeJog1 = []
    const nomeJog2 = []

    const numero1 = []
    const numero2 = []

    let [nome1, escolha1, nome2, escolha2] = [0, 0, 0, 0]
    let [num1, num2] = [0, 0]

    for(let i = 1; i <= numCasos; i += 2) {

        [nome1, escolha1, nome2, escolha2] = lines[i].split(" ")

        nomeJog1.push(nome1)
        nomeJog2.push(nome2)

        [num1, num2] = lines[i+1].split(" ")

        numero1.push(num1)
        numero2.push(num2)
    }

    return [nomeJog1, nomeJog2, numero1.map(Number), numero2.map(Number)]

}

function parOuImpar() {
    const [nomeJog1, nomeJog2, numero1, numero2] = data()

    let soma = 0

    for(let i = 0; i < nomeJog1.length; i++) {
        soma = numero1[i] + numero2[i]

        if(soma % 2 == 0) {
            console.log(nomeJog1[i])
        } else {
            console.log(nomeJog2[i])
        }

    }
}

parOuImpar()
*/