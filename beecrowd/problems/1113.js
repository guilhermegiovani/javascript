export function problem(lines) {
    const x = [].map(Number)
    const y = [].map(Number)

    for(let i = 0; i < 8; i++) {

        if(i % 2 == 0) {

            x.push(lines[i])
        } else {

            y.push(lines[i])
        }
    }

    for(let i = 0; i <= x.length; i++) {

        if(x[i] > y[i]) {

            console.log("Decrescente")
        } else if(x[i] < y[i]) {

            console.log("Crescente")
        } else {

            return
        }
    }

}