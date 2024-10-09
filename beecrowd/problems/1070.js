export function problem(lines) {
    const valor = Number(lines[0])
    const aux = valor + 6 * 2

    for(let i = 0; i <= aux; i++) {
        if(i > valor && i % 2 >= 1) {
            console.log(i)
        }
    }

    // beecrowd não aceitou
}