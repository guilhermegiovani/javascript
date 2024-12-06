export function problem(lines) {
    let s = 1
    let aux = 2

    for(let i = 3; i <= 39; i += 2) {
        s += i/aux
        aux *= 2
    }

    console.log(s.toFixed(2))
}