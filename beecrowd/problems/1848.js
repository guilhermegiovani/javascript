export function problem(lines) {
    const olhosCorvo = {
        "--*": 1,
        "-*-": 2,
        "-**": 3,
        "*--": 4,
        "*-*": 5,
        "**-": 6,
        "***": 7
    }

    function data() {
        let caw = 0

        const valores = []

        for(let i = 0; i < 100; i++) {

            if(caw == 3) {
                return
            } else {
                valores.push(lines[i])

                if(lines[i] == "caw caw") {
                    caw += 1
                }
            }

        }

        console.log(valores)

        return valores

    }

    function resultado() {
        const valores = data()

        let result = 0

        for(let i = 0; i < valores.length; i++) {

            if(valores[i] != 'caw caw') {
                result += olhosCorvo[valores[i]]
            } else {
                console.log(result)
                result = 0
            }

        }
    }

    resultado()
}