export function problem(lines) {

    let cod

    let alcool = 0
    let gasolina = 0
    let diesel = 0

    for(let i = 0; i <= 6; i++) {

        cod = lines[i]

        switch(cod) {
            case 1:
                alcool++
                break

            case 2:
                gasolina++
                break

            case 3:
                diesel++
                break

            case 4:
                console.log(`MUITO OBRIGADO\nAlcool: ${alcool}\nGasolina: ${gasolina}\nDiesel: ${diesel}`)
                break
            default:
                cod = lines[i + 1]
                i++
                break
        }  
        
    }
}

// beecrowd não aceitou

// if(cod == 1) {
//     alcool++
// } else if(cod == 2) {
//     gasolina++
// } else if(cod == 3) {
//     diesel++
// } else if(cod == 4) {
//     return console.log(`MUITO OBRIGADO\nAlcool: ${alcool}\nGasolina: ${gasolina}\nDiesel: ${diesel}`)
// }