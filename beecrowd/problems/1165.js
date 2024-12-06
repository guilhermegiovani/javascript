export function problem(lines) {
    const numCasos = Number(lines[0])

    const valores = [].map(Number)

    function dados() {

        for(let i = 1; i <= numCasos; i++) {
            valores.push(lines[i])
        }
    }

    dados()

    function numPrimos(num) {
        let divisores = 0

        for(let i = 0; i < num.length; i++) {

            for(let c = 1; c <= num[i]; c++) {

                if(num[i] > 1 && num[i] % c == 0) {
                    divisores++
                }
            }
        

            if(divisores == 2) {
                console.log(`${num[i]} eh primo`)
            } else {
                console.log(`${num[i]} nao eh primo`)
            }

            divisores = 0

        }

    }

    numPrimos(valores)
}