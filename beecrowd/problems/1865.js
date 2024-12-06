export function problem(lines) {
    const numCasos = lines[0]

    function data() {
        const nomes = []
        const forca = []

        for(let i = 1; i <= numCasos*2; i += 2) {
            nomes.push(lines[i])
            forca.push(lines[i+1])
        }

        return [nomes, forca]
    }

    function result() {
        const [nomes, forca] = data()
        
        for(let i = 0; i < nomes.length; i++) {

            if(nomes[i] == 'Thor') {
                console.log("Y")
            } else {
                console.log("N")
            }

        }

    }

    result()

}