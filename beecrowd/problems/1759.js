export function problem(lines) {
    function quantHo() {
        const arrayHo = []
        const numHo = lines[0]

        for(let i = 1; i <= numHo; i++) {
            if(i == numHo) {
                arrayHo.push("Ho!")
            } else {
                arrayHo.push("Ho")
            }
        }

        return console.log(...arrayHo)
    }

    quantHo()

    // Maximum call stack size exceeded 
}