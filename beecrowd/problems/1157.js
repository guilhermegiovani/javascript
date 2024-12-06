export function problem(lines) {
    const valor = Number(lines[0])

    for(let i = 1; i <= valor; i++) {

        if(valor % i == 0) {
            console.log(i)
        }
    }
}