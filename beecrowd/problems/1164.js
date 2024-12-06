export function problem(lines) {
    const numCasos = Number(lines[0])

    const valores = []

    function dados() {

        for(let i = 1; i <= numCasos; i++) {
            valores.push(lines[i])
        }

    }

    dados()

    function numPerfeito(valor) {
        const num = valor
        let somaDivisores = 0

        for (let i = 0; i < num.length; i++) {
            
            for(let c = 1; c < num[i]; c++) {

                if(num[i] % c == 0) {
                    somaDivisores += c
                }
            }

            if(somaDivisores == num[i]) {
                console.log(`${num[i]} eh perfeito`)
            } else {
                console.log(`${num[i]} nao eh perfeito`)
            }

            somaDivisores = 0
        }
    }

    numPerfeito(valores)
}