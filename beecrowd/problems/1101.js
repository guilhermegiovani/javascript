export function problem(lines) {
    const m = [].map(Number)
    const n = [].map(Number)

    let sequencia = [].map(Number)

    let soma = 0

    for(let i = 0; i < 6; i++) {
        if(i % 2 == 0) {
            m.push(lines[i])
        } else {
            n.push(lines[i])
        }
    }

    console.log(m, n)

    for(let i = 0; i <= m.length; i++) {

        if(m[i] <= 0 || n[i] <= 0) {

            return

        } else if(m[i] > n[i]){
            
            for(let c = n[i]; c <= m[i]; c++) {
                soma += Number(c)
                sequencia.push(c)
            }

            console.log(`${sequencia.join(" ")} Sum=${soma}`)
        } else {
            for(let c = m[i]; c <= n[i]; c++) {
                soma += Number(c)
                sequencia.push(c)
            }

            console.log(`${sequencia.join(" ")} Sum=${soma}`)
        }

        sequencia = []
        soma = 0
    }

    // m.sort((a, b) => {return a - b})
    // n.sort((a, b) => {return a - b})

    
    // console.log(`${n.values} Sum=${somaN}`)    
}