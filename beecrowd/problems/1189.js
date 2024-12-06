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

    function matrizColuna() {
        const matrizLinha = data()
        const matrizCol = {
            coluna0: [],
            coluna1: [],
            coluna2: [],
            coluna3: [],
            coluna4: [],
            coluna5: [],
            coluna6: [],
            coluna7: [],
            coluna8: [],
            coluna9: [],
            coluna10: [],
            coluna11: []
        }

        for(const [key, value] of Object.entries(matrizLinha)) {

            for(let i = 0; i < value.length; i++) {

                if(i == 0) {
                    matrizCol.coluna0.push(value[i])
                }

                if(i == 1) {
                    matrizCol.coluna1.push(value[i])
                }

                if(i == 2) {
                    matrizCol.coluna2.push(value[i])
                }

                if(i == 3) {
                    matrizCol.coluna3.push(value[i])
                }

                if(i == 4) {
                    matrizCol.coluna4.push(value[i])
                }

                if(i == 5) {
                    matrizCol.coluna5.push(value[i])
                }

                if(i == 6) {
                    matrizCol.coluna6.push(value[i])
                }

                if(i == 7) {
                    matrizCol.coluna7.push(value[i])
                }

                if(i == 8) {
                    matrizCol.coluna8.push(value[i])
                }

                if(i == 9) {
                    matrizCol.coluna9.push(value[i])
                }

                if(i == 10) {
                    matrizCol.coluna10.push(value[i])
                }

                if(i == 11) {
                    matrizCol.coluna11.push(value[i])
                }

            }    
        
        }

        return matrizCol
    }

    function areaEsquerda() {
        const matriz = matrizColuna()
        const areaEsq = []

        for(const [key, value] of Object.entries(matriz)) {

            if(key == 'coluna0') {

                for(let i = 1; i < (value.length - 1); i++) {
                    areaEsq.push(value[i])
                }

            }

            if(key == 'coluna1') {

                for(let i = 2; i < (value.length - 2); i++) {
                    areaEsq.push(value[i])
                }

            }

            if(key == 'coluna2') {

                for(let i = 3; i < (value.length - 3); i++) {
                    areaEsq.push(value[i])
                }

            }

            if(key == 'coluna3') {

                for(let i = 4; i < (value.length - 4); i++) {
                    areaEsq.push(value[i])
                }

            }

            if(key == 'coluna4') {

                for(let i = 5; i < (value.length - 5); i++) {
                    areaEsq.push(value[i])
                }

            }

        }

        return areaEsq.map(Number)
    }

    function somar() {
        const areaEsq = areaEsquerda()
        let soma = 0

        for(let i = 0; i < areaEsq.length; i++) {
            soma += areaEsq[i]
        }

        return console.log(soma.toFixed(1))
    }

    function media() {
        const areaEsq = areaEsquerda()
        let total = 0

        for(let i = 0; i < areaEsq.length; i++) {
            total += areaEsq[i]
        }

        const med = total / areaEsq.length

        return console.log(med.toFixed(1))
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