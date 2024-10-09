export function problem(lines) {
    const valor = lines[0]
    const especiesDisponiveis = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05,  0.01]

    const quantidadeEspecie = (valor, especie) => Math.trunc(valor / especie)
    const sobraEspecie = (valor, especie) => (valor % especie).toFixed(2)

    function quantidadesEspecies(valor, especies) {
        const listaEspecies = especies.map(especie => {
            const quantidade = quantidadeEspecie(valor, especie)
            valor = sobraEspecie(valor, especie)

            return {quantidade, especie}
        })

        return listaEspecies
    }

    function exibirResultado() {
        const especies = quantidadesEspecies(valor, especiesDisponiveis)
        const notas = especies.slice(0, 6)
        const moedas = especies.slice(6, 12)

        console.log("NOTAS:")
        notas.forEach(nota => console.log(`${nota.quantidade} nota(s) de R$ ${nota.especie.toFixed(2)}`))

        console.log("MOEDAS:")
        moedas.forEach(moeda => console.log(`${moeda.quantidade} moeda(s) de R$ ${moeda.especie.toFixed(2)}`))
    }

    exibirResultado()
}




// Quase certo

// const valorTot = lines[0]
//     const especiesDisponiveis = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05,  0.01]

//     function quantidadeEspecies(valor, especie) {
//         const quantidade = Math.floor(valor / especie)
//         return quantidade
//     }

//     function quantidadesPorEspecie(valor, especies) {
//         const listaEspecies = especies.map(especie => {
//             const quantidade = quantidadeEspecies(valor, especie)
//             valor = valor - (quantidade * especie)
//             return {especie, quantidade}
//         })

//         return listaEspecies
//     }

//     function mostrarEspeciesNecessarias() {
//         const especies = quantidadesPorEspecie(valorTot, especiesDisponiveis)
//         const notas = especies.slice(0, 6)
//         const moedas = especies.slice(6, 12)

//         console.log("NOTAS:")

//         notas.forEach(({quantidade, especie}) => {
//             console.log(`${quantidade} nota(s) de R$ ${especie}.00`)
//         })

//         console.log("MOEDAS:")
//         moedas.forEach(({quantidade, especie}) => {  
//             especie < 1 ? console.log(`${quantidade} moeda(s) de R$ ${especie.toFixed(2)}`) : console.log(`${quantidade} moeda(s) de R$ ${especie}.00`)
//         })
//     }

//     mostrarEspeciesNecessarias()


// -------------------------------------------------------------------------------------------------------------
//                                             CORREÇÃO

// const valor = lines[0]
// const especiesDisponiveis = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05,  0.01]

// const quantidadeEspecie = (valor, especie) => Math.trunc(valor / especie)
// const sobraEspecie = (valor, especie) => (valor % especie).toFixed(2)

// function quantidadesEspecies(valor, especies) {
//     const listaEspecies = especies.map(especie => {
//         const quantidade = quantidadeEspecie(valor, especie)
//         valor = sobraEspecie(valor, especie)
//         return {quantidade, especie}
//     })

//     return listaEspecies
// }

// function exibirResultado() {
//     const especies = quantidadesEspecies(valor, especiesDisponiveis)
//     const notas = especies.slice(0, 6)
//     const moedas = especies.slice(7, 12)
// }