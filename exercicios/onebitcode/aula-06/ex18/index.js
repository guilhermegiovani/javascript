/*
Crie uma página HTML com um input de texto, uma lista não ordenada de filmes e um botão de adicionar filme. Quando o usuário clicar no botão, um novo item de lista deve ser adicionado à lista com o nome do filme informado.
*/

const filme = document.getElementById("filme")
const adicionarFilme = document.getElementById("adicionarFilme")
const listaFilmes = document.getElementById("ListaFilmes")

adicionarFilme.addEventListener("click", function() {
    const nomeFilme = filme.value
    // Verificar se o campo de entrada não está vazio
    if(nomeFilme !== "") {
        const novoItem = document.createElement("li")
        novoItem.textContent = nomeFilme
        listaFilmes.appendChild(novoItem)

        // Limpa o campo de entrada após adicionar o filme
        filme.value = ""
    } else {
        alert("Filme inválido, Tente novamente!")
    }
})








// function adicionarFilmes(filmes) {
//     const lista = document.createElement("li")
//     lista.id = toKebabCase(filmes.filme)
//     lista.innerText = `Nome do filme: ${filmes.filme}`

//     document.getElementById("ListaFilmes").appendChild(lista)
//     // const ulElement = document.getElementById("ListaFilmes")
//     // ulElement.appendChild(lista)
// }

// const form = document.getElementById("ListaFilmes")

// form.addEventListener("submit", function(evento) {
//     evento.preventDefault()

//     const nomeFilme = document.getElementById("filme")

//     const filmes = {}
//     filmes.filme = nomeFilme.value

//     adicionarFilmes(filmes)
//     evento.target.reset()
// })