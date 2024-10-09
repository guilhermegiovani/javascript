export function problem(lines) {
    let j = [1, 2, 3]

    for(let i = 0; i <= 2; i += 0.2) {
        if(i == 0 || i == 1 || i == 2) {
            console.log(`I=${i} J=${j[0] + i}`)
            console.log(`I=${i} J=${j[1] + i}`)
            console.log(`I=${i} J=${j[2] + i}`)
        } else {
            console.log(`I=${i.toFixed(1)} J=${(j[0] + i).toFixed(1)}`)
            console.log(`I=${i.toFixed(1)} J=${(j[1] + i).toFixed(1)}`)
            console.log(`I=${i.toFixed(1)} J=${(j[2] + i).toFixed(1)}`)
        }
    }

    // o 2 está em decimal
}