export function problem(lines) {

    function maisVeloz() {
        let numLesmas = 0

        let grupoLesmas = []
        let niveis = []

        let maiorNivel

        for(let i = 0; i < 100000; i += 2) {
            numLesmas = lines[i]

            if(numLesmas != "EOF") {
                grupoLesmas = lines[i+1].split(" ")
    
                for(let c = 0; c < grupoLesmas.length; c++) {
    
                    if(grupoLesmas[c] < 10) {
                        niveis.push(1)
                        //console.log("nivel 1")
                    } else if(grupoLesmas[c] >= 10 && grupoLesmas[c] < 20) {
                        niveis.push(2)
                        //console.log("nivel 2")
                    } else {
                        niveis.push(3)
                        //console.log("nivel 3")
                    }
    
                }
                
                maiorNivel = Math.max(...niveis)
    
                console.log(maiorNivel)
    
                grupoLesmas = []
                niveis = []
            } else {
                return
            }
        }
    }

    maisVeloz()

}


// if(i == 11) {
//     for(let c = 12; c <= numLesmas+11; c++) {
//         grupoLesmas.push(lines[c])
//     }
// } else if(i == 22) {
//     for(let c = 23; c <= numLesmas+22; c++) {
//         grupoLesmas.push(lines[c])
//     }
    
// } else {
//     for(let c = 1; c <= numLesmas; c++) {
//         grupoLesmas.push(lines[c])
//     }
// }

/*
10
8 6 5 1 2 6 4 7 4 5
10
19 9 1 4 5 8 6 11 9 7
EOF
*/