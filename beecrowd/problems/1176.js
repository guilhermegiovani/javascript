export function problem(lines) {
    const numCasos = Number(lines[0])

    let n = 0
    let x = 0
    

    function fibonacci(numFibo) {
        let aux = 1
        let aux2 = 0

        n = numFibo

        for(let i = 0; i < n; i++) {
            aux2 = aux + x
            x = aux
            aux = aux2
        }

        aux = 1
        aux2 = 0
        console.log(`Fib(${n}) = ${x}`)
        x = 0
    }

    function casos(num) {

        for(let i = 1; i <= num; i++) {
            fibonacci(lines[i])
        }
    }

    casos(numCasos)


}