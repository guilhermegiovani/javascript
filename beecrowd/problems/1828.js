export function problem(lines) {
    const numCasos = Number(lines[0])

    function escolhas() {
        const sheldon = []
        const raj = []

        for(let i = 1; i < (numCasos*2); i += 2) {
            sheldon.push(lines[i])
            raj.push(lines[i+1])
        }
    
        return [sheldon, raj]
    }

    function resultado() {
        const [sheldon, raj] = escolhas()

        for(let i = 0; i < numCasos; i++) {

            if(sheldon[i] == raj[i]) {
                console.log(`Caso #${i+1}: De novo!`)
            } else {

                if(sheldon[i] == "pedra") {

                    if(raj[i] == "papel") {

                        console.log(`Caso #${i+1}: Raj trapaceou!`)

                    } else if(raj[i] == "lagarto") {

                        console.log(`Caso #${i+1}: Bazinga!`)

                    } else if(raj[i] == "Spock") {

                        console.log(`Caso #${i+1}: Raj trapaceou!`)

                    } else if(raj[i] == "tesoura") {

                        console.log(`Caso #${i+1}: Bazinga!`)

                    }

                } else if(sheldon[i] == "papel") {

                    if(raj[i] == "tesoura") {

                        console.log(`Caso #${i+1}: Raj trapaceou!`)

                    } else if(raj[i] == "pedra") {

                        console.log(`Caso #${i+1}: Bazinga!`)

                    } else if(raj[i] == "lagarto") {

                        console.log(`Caso #${i+1}: Raj trapaceou!`)

                    } else if(raj[i] == "Spock") {

                        console.log(`Caso #${i+1}: Bazinga!`)

                    }

                } else if(sheldon[i] == "tesoura") {

                    if(raj[i] == "Spock") {

                        console.log(`Caso #${i+1}: Raj trapaceou!`)

                    } else if(raj[i] == "papel") {

                        console.log(`Caso #${i+1}: Bazinga!`)

                    } else if(raj[i] == "pedra") {

                        console.log(`Caso #${i+1}: Raj trapaceou!`)

                    } else if(raj[i] == "lagarto") {

                        console.log(`Caso #${i+1}: Bazinga!`)

                    }

                } else if(sheldon[i] == "lagarto") {

                    if(raj[i] == "pedra") {

                        console.log(`Caso #${i+1}: Raj trapaceou!`)

                    } else if(raj[i] == "Spock") {

                        console.log(`Caso #${i+1}: Bazinga!`)

                    } else if(raj[i] == "tesoura") {

                        console.log(`Caso #${i+1}: Raj trapaceou!`)

                    } else if(raj[i] == "papel") {

                        console.log(`Caso #${i+1}: Bazinga!`)

                    }

                } else if(sheldon[i] == "Spock") {

                    if(raj[i] == "lagarto") {

                        console.log(`Caso #${i+1}: Raj trapaceou!`)

                    } else if(raj[i] == "tesoura") {

                        console.log(`Caso #${i+1}: Bazinga!`)

                    } else if(raj[i] == "papel") {

                        console.log(`Caso #${i+1}: Raj trapaceou!`)

                    } else if(raj[i] == "pedra") {

                        console.log(`Caso #${i+1}: Bazinga!`)

                    }

                }

            }

        }
    }

    resultado()
    
    // beecrownd infomação errada.

}