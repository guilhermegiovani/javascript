export function problem(lines) {
    const valores = lines[0].split(' ').map(Number)

    function bhaskara(a, b, c) {
        const delta = (b * b) - 4 * a * c

        const x1 = (-b + Math.sqrt(delta)) / (2 * a)
        const x2 = (-b - Math.sqrt(delta)) / (2 * a)

        if(delta < 0 || a == 0) {
            return console.log("Impossivel calcular")
        } else {
            return console.log(`R1 = ${x1.toFixed(5)}\nR2 = ${x2.toFixed(5)}`)
        }

    }

    bhaskara(...valores)
}

//const a = Number(lines[0])
//const b = Number(lines[1])
//const c = Number(lines[2])