export function problem(lines) {
    const valores = [lines[0]]

    function dobroAnterior(num) {
        let dobro

        for(let i = 0; i < 10; i++) {
            dobro = num[i]
            dobro *= 2
            valores.push(dobro)
            console.log(`N[${i}] = ${num[i]}`)

        }
    }

    dobroAnterior(valores)
}