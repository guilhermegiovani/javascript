export function problem(lines) {
    const j = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    
    for(let i = 1; i <= 9; i += 2) {
        if(i == 1) {
            console.log(`I=${i} J=${j[2]}`)
            console.log(`I=${i} J=${j[1]}`)
            console.log(`I=${i} J=${j[0]}`)
        } else if(i == 3) {
            console.log(`I=${i} J=${j[4]}`)
            console.log(`I=${i} J=${j[3]}`)
            console.log(`I=${i} J=${j[2]}`)
        } else if(i == 5) {
            console.log(`I=${i} J=${j[6]}`)
            console.log(`I=${i} J=${j[5]}`)
            console.log(`I=${i} J=${j[4]}`)
        } else if(i == 7) {
            console.log(`I=${i} J=${j[8]}`)
            console.log(`I=${i} J=${j[7]}`)
            console.log(`I=${i} J=${j[6]}`)
        } else {
            console.log(`I=${i} J=${j[10]}`)
            console.log(`I=${i} J=${j[9]}`)
            console.log(`I=${i} J=${j[8]}`)
        }
        
    }
}
