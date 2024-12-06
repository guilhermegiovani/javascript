export function problem(lines) {
    let vetorN = []

    function data() {
        for(let i = 0; i < lines.length; i++) {
            vetorN.push(lines[i])
        }
    }

    data()

    function trocarValores(numbers) {
        vetorN.reverse()
        
        for(let i = 0; i < numbers.length; i++) {
            console.log(`N[${i}] = ${numbers[i]}`)
        }
        
    }

    trocarValores(vetorN)

}