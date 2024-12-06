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
            linha11: [],
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

    function colunaSeleciona() {
        const matriz = data()
        const numColuna = lines[0]
        const coluna = []

        for(const [key, value] of Object.entries(matriz)) {
            
            for(let i = 0; i < value.length; i++) {

                if(i == numColuna) {
                    coluna.push(value[i])
                }

            }

        }

        return coluna.map(Number)

    }

    function somar() {
        const coluna = colunaSeleciona()
        let soma = 0

        for(let i = 0; i < coluna.length; i++) {
            soma += coluna[i]
        }

        return console.log(soma.toFixed(1))
    }

    function media() {
        const coluna = colunaSeleciona()

        let total = 0

        for(let i = 0; i < coluna.length; i++) {
            total += coluna[i]
        }

        const media = total / coluna.length

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

    // beecronw não aceitou, site mais bugado que tudo

}

// coluna.push(matriz.linha0[numColuna])
// coluna.push(matriz.linha1[numColuna])
// coluna.push(matriz.linha2[numColuna])
// coluna.push(matriz.linha3[numColuna])
// coluna.push(matriz.linha4[numColuna])
// coluna.push(matriz.linha5[numColuna])
// coluna.push(matriz.linha6[numColuna])
// coluna.push(matriz.linha7[numColuna])
// coluna.push(matriz.linha8[numColuna])
// coluna.push(matriz.linha9[numColuna])
// coluna.push(matriz.linha10[numColuna])
// coluna.push(matriz.linha11[numColuna])