export function problem(lines) {

    // Outra Solução

    function buscarProdutos(codigo) {
        const tabelaProdutos = {
            1: { especificacao: "Cachorro Quente", preco: 4.0 },
            2: { especificacao: "X-Salada", preco: 4.5 },
            3: { especificacao: "X-Bacon", preco: 5.0 },
            4: { especificacao: "Torrada Simples", preco: 2.0 },
            5: { especificacao: "Refrigerante", preco: 1.50 },
        }

        return tabelaProdutos[codigo]
    }

    function calcularValorTotal(codigo, quantidade) {
        const {preco} = buscarProdutos(codigo)

        return preco * quantidade
    }

    function mostrarConta(valores) {
        const [codigo, quantidade] = valores.split(' ')

        const valorTotal = calcularValorTotal(codigo, quantidade)

        return console.log(`Total: R$ ${valorTotal.toFixed(2)}`)
    }

    mostrarConta(lines[0])
}

// Minha Resolução
//-----------------------------------------------------------------------------------------------------------

// const codItem = lines[0]
// const quantidade = Number(lines[1])

// function verificarPreco(codigo) {
//     let preco

//     if(codigo == 1) {
//         preco = 4.00
//     } else if(codigo == 2) {
//         preco = 4.50
//     } else if(codigo == 3) {
//         preco = 5.00
//     } else if(codigo == 4) {
//         preco = 2.00
//     } else {
//         preco = 1.50
//     }

//     return preco
// }

// function calcularValorTotal(codigo, quantidade) {
//     const valorTotal = quantidade * verificarPreco(codigo)
//     return valorTotal
// }

// function mostrarValorTotal(codigo, quantidade) {
//     const valorTotal = calcularValorTotal(codigo, quantidade)

//     return console.log(`Total: R$ ${valorTotal.toFixed(2)}`)
// }

// mostrarValorTotal(codItem, quantidade)