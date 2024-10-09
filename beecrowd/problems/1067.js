export function problem(lines) {
    const valor = Number(lines[0])

    for(let i = 0; i < valor; i++) {
        if(i % 2 >= 1 || i % 2 <= -1) {
            console.log(i)
        }
    }
}