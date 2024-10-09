export function problem(lines) {
    let num
    let crescente = []

    for(let i = 0; i <= 10; i++) {

        if(lines[i] == 0) {
            return
        } else {
            num = lines[i]

            for(let c = 1; c <= num; c++) {
                crescente.push(c)
            }

            console.log(...crescente)
        }

        crescente = []
    }
    
}