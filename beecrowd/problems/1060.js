export function problem(lines) {
    const valores = [lines[0],lines[1],lines[2],lines[3],lines[4],lines[5]].map(Number)

    let numPositivos = 0

    for(let i = 0;i <= valores.length;i++){
        if(valores[i] > 0){
            numPositivos += 1
        }
    }

    console.log(`${numPositivos} valores positivos`)
}