export function problem(lines) {
    const [a, b] = lines[0].split(' ').map(Number)

    if(a > b) {
        if(a % b == 0) {
            console.log("Sao Multiplos")
        } else {
            console.log("Nao sao Multiplos")
        }
    } else {
        if(b % a == 0) {
            console.log("Sao Multiplos")
        } else {
            console.log("Nao sao Multiplos")
        }
    }

}