export function problem(lines) {

    function data() {
        const matriz = {
            linha0: [],
            linha1: [],
            linha2: [],
            linha3: [],
            linha4: [],
            linha5: [],
            linha6: [],
            linha7: [],
            linha8: [],
            linha9: [],
            linha10: [],
            linha11: []
        }

        for(let i = 1; i <= 145; i++) {

            if(matriz.linha1.length < 12) {

                matriz.linha0.length >= 12 ? matriz.linha1.push(lines[i]) : matriz.linha0.push(lines[i])
               
            } else if(matriz.linha2.length < 12) {

                matriz.linha1.length >= 12 ? matriz.linha2.push(lines[i]) : matriz.linha1.push(lines[i])

            } else if(matriz.linha3.length < 12) {

                matriz.linha2.length >= 12 ? matriz.linha3.push(lines[i]) : matriz.linha2.push(lines[i])

            } else if(matriz.linha4.length < 12) {

                matriz.linha3.length >= 12 ? matriz.linha4.push(lines[i]) : matriz.linha3.push(lines[i])

            } else if(matriz.linha5.length < 12) {

                matriz.linha4.length >= 12 ? matriz.linha5.push(lines[i]) : matriz.linha4.push(lines[i])

            } else if(matriz.linha6.length < 12) {

                matriz.linha5.length >= 12 ? matriz.linha6.push(lines[i]) : matriz.linha5.push(lines[i])

            } else if(matriz.linha7.length < 12) {

                matriz.linha6.length >= 12 ? matriz.linha7.push(lines[i]) : matriz.linha6.push(lines[i])

            } else if(matriz.linha8.length < 12) {

                matriz.linha7.length >= 12 ? matriz.linha8.push(lines[i]) : matriz.linha7.push(lines[i])

            } else if(matriz.linha9.length < 12) {

                matriz.linha8.length >= 12 ? matriz.linha9.push(lines[i]) : matriz.linha8.push(lines[i])

            } else if(matriz.linha10.length < 12) {

                matriz.linha9.length >= 12 ? matriz.linha10.push(lines[i]) : matriz.linha9.push(lines[i])

            } else if(matriz.linha11.length < 12) {

                matriz.linha10.length >= 12 ? matriz.linha11.push(lines[i]) : matriz.linha10.push(lines[i])

            }

        }
        
        return matriz
    }

    function abaixoDiagonalSecundaria() {
        const matriz = data()
        const abaixoDiagonal = []

        for(const [key, value] of Object.entries(matriz)) {

            if(key == "linha11") {

                for(let i = 1; i < value.length; i++) {
                    abaixoDiagonal.push(value[i])
                }
                
            }

            if(key == "linha10") {

                for(let i = 2; i < value.length; i++) {
                    abaixoDiagonal.push(value[i])
                }

            }

            if(key == "linha9") {

                for(let i = 3; i < value.length; i++) {
                    abaixoDiagonal.push(value[i])
                }

            }

            if(key == "linha8") {

                for(let i = 4; i < value.length; i++) {
                    abaixoDiagonal.push(value[i])
                }

            }

            if(key == "linha7") {

                for(let i = 5; i < value.length; i++) {
                    abaixoDiagonal.push(value[i])
                }

            }

            if(key == "linha6") {

                for(let i = 6; i < value.length; i++) {
                    abaixoDiagonal.push(value[i])
                }

            }

            if(key == "linha5") {

                for(let i = 7; i < value.length; i++) {
                    abaixoDiagonal.push(value[i])
                }

            }

            if(key == "linha4") {

                for(let i = 8; i < value.length; i++) {
                    abaixoDiagonal.push(value[i])
                }

            }

            if(key == "linha3") {

                for(let i = 9; i < value.length; i++) {
                    abaixoDiagonal.push(value[i])
                }

            }

            if(key == "linha2") {

                for(let i = 10; i < value.length; i++) {
                    abaixoDiagonal.push(value[i])
                }

            }

            if(key == "linha1") {

                for(let i = 11; i < value.length; i++) {
                    abaixoDiagonal.push(value[i])
                }

            }
        
        }

        return abaixoDiagonal.map(Number)

    }

    function somar() {
        const abaixoDiagonal = abaixoDiagonalSecundaria()
        let soma = 0

        for(let i = 0; i < abaixoDiagonal.length; i++) {
            soma += abaixoDiagonal[i]
        }

        return console.log(soma.toFixed(1))
    }

    function media() {
        const abaixoDiagonal = abaixoDiagonalSecundaria()
        let total = 0

        for(let i = 0; i < abaixoDiagonal.length; i++) {
            total += abaixoDiagonal[i]
        }

        const media = total / abaixoDiagonal.length

        return console.log(media.toFixed(1))
    }

    function exibir() {

        if(lines[0] == "S") {
            somar()
        } else {
            media()
        }

    }

    exibir()

}