export function problem(lines) {
    const valores = []

    function dados() {
        
        for(let i = 0; i < lines.length; i++) {
            valores.push(lines[i])
            console.log(lines[i])
        }
    }

    dados()

    function trocarNuloENegativo(num) {
        
        for(let i = 0; i < num.length; i++) {
            if(num[i] <= 0) {
                num[i] = 1
            }

            console.log(`X[${i}] = ${num[i]}`)
        }
    }

    trocarNuloENegativo(valores)

    // beecrownd não aceitou
}