export function problem(lines) {
    const valores = [].map(Number)

    function data() {

        for(let i = 0; i < 100; i++) {
            valores.push(lines[i])
        }
    }

    data()

    function igualOuMenorQue10(numbers) {
        let valor = 0
        
        for(let i = 0; i <= numbers.length; i++) {
            valor = Number(numbers[i])

            if(numbers[i] <= 10) {
                console.log(`A[${i}] = ${valor.toFixed(1)}`)
            }
        }
    }

    igualOuMenorQue10(valores)
}