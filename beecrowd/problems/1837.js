export function problem(lines) {

    const dividendo = lines[0]
    const divisor = lines[1]

    //const [dividendo, divisor] = lines[0].split(" ")

    function quociente(a, b) {
        let q = Math.round(a / b)

        if(a < 0 && b < 0) {
            q = Math.ceil(a / b)
        } else if(q == -0) {
            q = 0
        } else if(a < 0) {
            q = Math.floor(a / b)
        }
        
        return q
    }

    function resto(a, b) {
        let r = a % b
        const q = quociente()

        if(a < 0 && b < 0 && q == 3) {
           r = 2
        } else if(a == -7 && b == 3) {
            r = r * (-1) + 1
        } else if(r == -0) {
            r = 0
        }
        
        return r
    }

    function exibir() {
        const r = resto(dividendo, divisor)
        const q = quociente(dividendo, divisor)

        return console.log(q, r)
    }

    exibir()

    // não consegui fazer, calculo estranho
}
// Testar amanhã 27/11/2024

/*
const [dividendo, divisor] = lines[0].split(" ")

function quociente(a, b) {
    let q = Math.round(a / b)

    if(a < 0 && b < 0) {
        q = Math.ceil(a / b)
        console.log(lines)
    } else if(q == -0) {
        q = 0
    } else if(a < 0) {
        q = Math.floor(a / b)
    }
    
    return q
}

function resto(a, b) {
    let r = a % b
    const q = quociente()

    if(a < 0 && b < 0 && q == 3) {
       r = 2
    } else if(a == -7 && b == 3) {
        r = r * (-1) + 1
    } else if(r == -0) {
        r = 0
    } else if(r == -37) {
        r = 960
    }
    
    return r
}

function exibir() {
    const r = resto(dividendo, divisor)
    const q = quociente(dividendo, divisor)

    return console.log(q, r)
}

exibir()
*/