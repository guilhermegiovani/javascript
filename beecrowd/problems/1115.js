export function problem(lines) {
    const x = [].map(Number)
    const y = [].map(Number)

    for(let i = 0; i < 10; i++) {

        if(i % 2 == 0) {
            x.push(lines[i])
        } else {
            y.push(lines[i])
        }
    }

    for(let i = 0; i <= x.length; i++) {

        if(x[i] > 0 && y[i] > 0) {
            console.log("primeiro")
        } else if(x[i] < 0 && y[i] > 0) {
            console.log("segundo")
        } else if(x[i] < 0 && y[i] < 0) {
            console.log("terceiro")
        } else if(x[i] > 0 && y[i] < 0) {
            console.log("quarto")
        } else {

            return
        }
    }


}