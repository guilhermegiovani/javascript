export function problem(lines) {
    let renda = Number(lines[0])

    let percImposRenda
    let impostoRenda = 0

    if(renda > 4500) {
        percImposRenda = 28 / 100
        impostoRenda = (renda - 4500) * percImposRenda
        renda = 4500
    }

    if(renda > 3000) {
        percImposRenda = 18 / 100
        impostoRenda += (renda - 3000) * percImposRenda
        renda = 3000
    }
    
    if(renda > 2000) {
        percImposRenda = 8 / 100
        impostoRenda += (renda - 2000) * percImposRenda
    } 
    
    if(impostoRenda == 0) {
        impostoRenda = 'Isento'
        console.log(impostoRenda)
    }

    if(impostoRenda > 0) {
        console.log(impostoRenda.toFixed(2))
    }
    
}