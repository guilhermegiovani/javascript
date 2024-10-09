export function problem(lines) {
    const n = Number(lines[0])

    const x = [].map(Number)
    const y = [].map(Number)

    let divisaoXY

    for(let i = 1; i <= n * 2; i++) {

        if(i % 2 >= 1) {
            x.push(lines[i])
        } else {
            y.push(lines[i])
        }
    }

    for(let i = 0; i < x.length; i++) {

        if(y[i] == 0) {
            console.log("divisao impossivel")
        } else {
            divisaoXY = x[i] / y[i]
            console.log(divisaoXY.toFixed(1))
        }
    }

}