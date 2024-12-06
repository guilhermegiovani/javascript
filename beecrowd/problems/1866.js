export function problem(lines) {
    
    function data() {
        const numCasos = lines[0]
        const casos = []

        for(let i = 1; i <= numCasos; i++) {
            casos.push(lines[i])
        }

        return casos.map(Number)
    }

    function resultado() {
        const casos = data()
        let soma = 0

        for(let i = 0; i < casos.length; i++) {

            for(let c = 1; c <= casos[i]; c++) {
                if(c % 2 >= 1) {
                    soma++
                } else {
                    soma--
                }
            }

            console.log(soma)
            soma = 0
        }
    }

    resultado()

}