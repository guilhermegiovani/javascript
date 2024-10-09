export function problem(lines) {
    const valor = Number(lines[0])

    for(let i = 1; i <= 10000; i++) {
        if(i % valor == 2) {
            console.log(i)
        }
    }
}