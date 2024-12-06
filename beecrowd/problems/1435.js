export function problem(lines) {
    let numMatriz = 0
    let matriz = []

    let x, y

    for(let i = 0; i < 10; i++) {
        numMatriz = lines[i]
        matriz = Array(numMatriz)

        for(let c = 0; c < numMatriz; c++) {
            matriz[c] = Array(numMatriz)
        }


        for(x = 0; x < numMatriz; x++) {
           
            for(y = 0; y < numMatriz; y++) {
                matriz[x][y] = "  2"

                if(numMatriz == 10) {
                    matriz[x][y] = "  3"

                    if(x == 1 || x == (numMatriz - 2) || y == 1 || y == (numMatriz - 2)) {
                        matriz[x][y] = "  2"
                    }
                    
                    if(x == 3 && y == 3 || x == 3 && y == 4 || x == 3 && y == 5 || x == 3 && y == 6) {
                        matriz[x][y] = "  4"
                    }

                    if(x == 4 && y == 3 || x == 4 && y == 6) {
                        matriz[x][y] = "  4"
                    }

                    if(x == 5 && y == 3 || x == 5 && y == 4 || x == 5 && y == 6) {
                        matriz[x][y] = "  4"
                    }

                    if(x == 6 && y == 3 || x == 6 && y == 4 || x == 6 && y == 5 || x == 6 && y == 6) {
                        matriz[x][y] = "  4"
                    }

                    if(x == 4 && y == 4 || x == 4 && y == 5) {
                        matriz[x][y] = "  5"
                    }

                    if(x == 5 && y == 4 || x == 5 && y == 5) {
                        matriz[x][y] = "  5"
                    }
                    
                }

                if(numMatriz == 9) {
                    matriz[x][y] = "  3"

                    if(x == 1 || x == (numMatriz - 2) || y == 1 || y == (numMatriz - 2)) {
                        matriz[x][y] = "  2"
                    }
                    
                    if(x == 3 && y == 3 || x == 3 && y == 4 || x == 3 && y == 5) {
                        matriz[x][y] = "  4"
                    }

                    if(x == 4 && y == 3 || x == 4 && y == 5) {
                        matriz[x][y] = "  4"
                    }

                    if(x == 5 && y == 3 || x == 5 && y == 4|| x == 5 && y == 5) {
                        matriz[x][y] = "  4"
                    }

                    if(x == 4 && y == 4) {
                        matriz[x][y] = "  5"
                    }
                    
                }

                if(numMatriz == 8) {
                    matriz[x][y] = "  3"

                    if(x == 1 || x == (numMatriz - 2) || y == 1 || y == (numMatriz - 2)) {
                        matriz[x][y] = "  2"
                    }
                    
                    if(x == 3 && y == 3 || x == 4 && y == 4) {
                        matriz[x][y] = "  4"
                    }

                    if(x == 3 && y == 4 || x == 4 && y == 3) {
                        matriz[x][y] = "  4"
                    }
                    
                }

                if(numMatriz == 7) {
                    matriz[x][y] = "  3"

                    if(x == 1 || x == (numMatriz - 2) || y == 1 || y == (numMatriz - 2)) {
                        matriz[x][y] = "  2"
                    }
                    
                    if(x == 3 && y == 3) {
                        matriz[x][y] = "  4"
                    }
                    
                } 
                
                if(numMatriz >= 5 && numMatriz < 7) {
                    matriz[x][y] = "  3"
                    
                    if(x == 1 || x == (numMatriz - 2) || y == 1 || y == (numMatriz - 2)) {
                        matriz[x][y] = "  2"
                    }
                    
                }

                if(x == 0 || x == (numMatriz - 1) || y == 0 || y == (numMatriz - 1)) {
                    matriz[x][y] = "  1"
                }
                
            }

            
        }

        if(numMatriz > 1) {

            for(x = 0; x < numMatriz; x++) {
                console.log(...matriz[x])
            }

            console.log('')
        } else {

            for(x = 0; x < numMatriz; x++) {
                console.log(...matriz[x])
            }

            console.log('')
        }

        matriz = []
    }
    
}