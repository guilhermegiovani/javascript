export function problem(lines) {
    const valores = lines.map(Number)
    let valor = 0

    function pegandoValor() {

        for(let i = 0; i <= valores.length; i++) {
            valor = valores[i]
            
            if(valor == 0) {
                return
            } else {
                paresConsec(valor)
            }
        }

    }

    function paresConsec(num) {
        let somaPares = 0
        let quantPares = 5
        let aux = 0

        for(let i = num; i <= num + quantPares*2; i++) {

            if(i % 2 == 0 && aux != quantPares) {
                somaPares += i
                aux += 1
            }
        }

        console.log(somaPares)

        somaPares = 0
    }

    pegandoValor()

}