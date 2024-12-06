export function problem(lines) {
    let idades = 0

    for(let i = 0; i <= 10; i++) {
        if(lines[i] <= 0) {
            const medIdade = idades / i
            console.log(medIdade.toFixed(2))
            return
        } else {
            idades += Number(lines[i])
        }
    }

    
}