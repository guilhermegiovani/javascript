/*
Crie um programa para gerenciamento de estoque que seja capaz de armazenar um array de objetos onde cada objeto representa um item com nome e quantidade. Utilize o prompt() para criar um menu de opções para usuário que permite cadastrar novos itens, listar os itens cadastrados, alterar a quantidade e excluir um item do estoque.
*/

const estoque = []

function cadastrarItem() {
    const nome = prompt("Digite o nome do item:")
    const quantidade = Number(prompt("Digite a quantidade do item:"))

    if(isNaN(quantidade) || quantidade <= 0) {
        alert("Quantidade inválida. O item não foi adicionado.")
        return
    }

    // mesmo que { nome: nome, quantidade: quantidade }
    const item = { nome, quantidade }
    estoque.push(item)
    alert(`${nome} foi adicionado ao estoque com ${quantidade} unidades.`)
}

function listarItens() {
    if(estoque.length === 0) {
        alert("O estoque está vazio")
        return
    }

    // Transforma a lista do objetos em uma lista de strings e depois junta tudo
    const itensString = estoque.map(function(item, index) {
        return `${index + 1}. ${item.nome}: ${item.quantidade} unidade`
    }).join("\n")

    alert(`Itens no estoque:\n${itensString}`)
}

function alterarQuantidade() {
    listarItens()
    const indice = Number(prompt("Digite o número do item que deseja alterar:")) - 1

    if(isNaN(indice) || indice < 0 || indice > estoque.length) {
        alert("Número de item inválido")
        return
    }

    const novaQuantidade = Number(prompt(`Digite a nova quantidade para ${estoque[indice].nome}`))

    if(isNaN(novaQuantidade) || novaQuantidade <= 0) {
        alert("Quantidade inválida. A alteração não foi feita.")
        return
    }

    estoque[indice].quantidade = novaQuantidade
    alert(`"${estoque[indice].nome}" agora possui ${novaQuantidade} unidades.`)
}

function excluirItem() {
    listarItens()
    const indice = Number(prompt("Digite o número do item que deseja exluir:")) - 1

    if(isNaN(indice) || indice <= 0 || indice > estoque.length) {
        alert("Número de item inválido.")
    }

    const nomeItemExcluido = estoque[indice].nome
    estoque.splice(indice, 1)
    alert(`"${nomeItemExcluido}" foi excluído.`)
}

let escolha

while(escolha !== "5") {
    escolha = prompt("Escolha uma opção:\n1. Cadastrar novo item\n2. Listar itens\n3. Alterar quantidade\n4. Excluir item\n5. Sair")

    switch(escolha) {
        case "1":
            cadastrarItem()
            break
        case "2":
            listarItens()
        case "3":
            alterarQuantidade()
            break
        case "4":
            excluirItem()
            break
        case "5":
            alert("Saindo do programa de gerenciamento de estoque...")
            break
        default:
            alert("Opção inválida. Tente novamente.")
    }
}