export function problem(lines) {
    const x = Number(lines[0])
    let z = 0

    let soma = 0
    let quantNum = 1

    for(let i = 1; i <= 5; i++) {
        z = lines[i]

        if(z > x) {
            break
        }
    }
    
    for(let i = x; i <= z; i++) {

        soma += i

        if(soma < z) {
            quantNum++
        } else {
            break
        }

    }

    console.log(quantNum)
}