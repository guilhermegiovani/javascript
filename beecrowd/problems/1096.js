export function problem(lines) {
    const j = [7, 6, 5]

    for(let i = 1; i <= 9; i += 2) {
        if(i == 1) {
            console.log(`I=${i} J=${j[0]}`)
            console.log(`I=${i} J=${j[1]}`)
            console.log(`I=${i} J=${j[2]}`)
        } else if(i == 3) {
            console.log(`I=${i} J=${j[0]}`)
            console.log(`I=${i} J=${j[1]}`)
            console.log(`I=${i} J=${j[2]}`)
        } else if(i == 5) {
            console.log(`I=${i} J=${j[0]}`)
            console.log(`I=${i} J=${j[1]}`)
            console.log(`I=${i} J=${j[2]}`)
        } else if(i == 7) {
            console.log(`I=${i} J=${j[0]}`)
            console.log(`I=${i} J=${j[1]}`)
            console.log(`I=${i} J=${j[2]}`)
        } else {
            console.log(`I=${i} J=${j[0]}`)
            console.log(`I=${i} J=${j[1]}`)
            console.log(`I=${i} J=${j[2]}`)
        }
    }
}