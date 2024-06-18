function toKebabCase(str) {
    return str.split(" ").join("-").toLowerCase()
}

function removerLi(id) {
    const liRemover = document.getElementById(id)
    liRemover.remove()
}

function adicionarLi(jogo) {
    const liElement = document.createElement("li")
    liElement.id = toKebabCase(jogo.nome)
    liElement.textContent = `Nome: ${jogo.nome} | Ano de lançamento: ${jogo.ano} | Gênero: ${jogo.genero}`

    const btnRemover = document.createElement("button")
    btnRemover.innerText = "Remover Jogo"
    btnRemover.addEventListener("click", function() {
        removerLi(liElement.id)
    })

    liElement.appendChild(btnRemover)

    document.getElementById("ListaDeJogos").appendChild(liElement)
}

const form = document.getElementById("cadastrarJogo")

form.addEventListener("submit", function(evento) {
    evento.preventDefault()

    const inputNome = document.getElementById("nome")
    const inputAno = document.getElementById("ano")
    const inputGenero = document.getElementById("genero")

    const jogo = {}
    jogo.nome = inputNome.value
    jogo.ano = inputAno.value
    jogo.genero = inputGenero.value

    adicionarLi(jogo)

    evento.target.reset()
})



/*
function toKebabCase(str) {
    return str.split(" ").join("-").toLowerCase()
}

function removerLi(id) {
    const liRemover = document.getElementById(id)
    liRemover.remove()
}

function adicionarLi() {
    const jogo = prompt("Insira o nome do jogo que você deseja adicionar á lista:")

    const liElement = document.createElement("li")
    liElement.innerText = jogo
    liElement.id = toKebabCase(jogo)

    const btnRemover = document.createElement("button")
    btnRemover.innerText = "Remover Jogo"
    btnRemover.addEventListener("click", function() {
        removerLi(liElement.id)
    })

    liElement.appendChild(btnRemover)

    const ulElement = document.getElementById("ListaDeJogos")
    
    ulElement.appendChild(liElement)
}

document.getElementById("adicionar-jogo").addEventListener("click", adicionarLi)
*/