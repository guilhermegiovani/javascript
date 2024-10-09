export function problem(lines) {
    let j = 60

    for(let i = 1; i <= 37; i += 3) {
        if(j != 0) {
            console.log(`I=${i} J=${j}`)
            j -= 5
        } else {
            console.log(`I=${i} J=${j}`)
        }
    }
}