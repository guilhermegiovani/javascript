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

        for(let i = 2; i <= 146; i++) {

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

            } else if(matriz.linha6.length < 2) {

                matriz.linha5.length >= 12 ? matriz.linha6.push(lines[i]) : matriz.linha5.push(lines[i])

            } else if(matriz.linha7.length < 12) {

                matriz.linha6.length >= 12 ? matriz.linha7.push(lines[i]) : matriz.linha6.push(lines[i])

            } else if(matriz.linha8.length < 2) {

                matriz.linha7.length >= 2 ? matriz.linha8.push(lines[i]) : matriz.linha7.push(lines[i])

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

    function linhaSelecionada() {
        const matriz = data()

        let numLinha = lines[0]
        let linha

        if(numLinha == 0) {

            linha = matriz.linha0

        } else if(numLinha == 1) {

            linha = matriz.linha1

        } else if(numLinha == 2) {

            linha = matriz.linha2

        } else if(numLinha == 3) {

            linha = matriz.linha3

        } else if(numLinha == 4) {

            linha = matriz.linha4

        } else if(numLinha == 5) {

            linha = matriz.linha5

        } else if(numLinha == 6) {

            linha = matriz.linha6

        } else if(numLinha == 7) {

            linha = matriz.linha7

        } else if(numLinha == 8) {

            linha = matriz.linha8

        } else if(numLinha == 9) {

            linha = matriz.linha9

        } else if(numLinha == 10) {

            linha = matriz.linha10

        } else if(numLinha == 11) {

            linha = matriz.linha11

        }

        return linha.map(Number)
    }

    function somar() {
        const linha = linhaSelecionada()

        let soma = 0

        for(let i = 0; i < linha.length; i++) {
            soma += (linha[i])
        }

        return console.log(soma.toFixed(1))
    }

    function media() {
        const linha = linhaSelecionada()

        let total = 0

        for(let i = 0; i < linha.length; i++) {
            total += (linha[i])
        }

        const media = total / linha.length

        return console.log(media.toFixed(1))
    }

    function somaOuMedia() {

        if(lines[1] == 'S') {
            somar()
        } else {
            media()
        }
    }

    somaOuMedia()

}