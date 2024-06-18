
async function executar() {
    const postsList = document.getElementById("postsList")

    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts") // Chama a API
    const dados = await resposta.json() // Converte o JSON para um objeto JS na memória

    console.log(dados)

    dados.forEach(function (post) {
        const postElement = document.createElement("article")

        const postTitle = document.createElement("h2")
        postTitle.textContent = post.title

        const postAuthor = document.createElement("span")
        postAuthor.textContent = `Autor: ${post.userId}` // /users/post.userId OU /users/1

        const postContent = document.createElement("p")
        postContent.textContent = post.body

        postElement.append(postTitle, postAuthor, postContent, document.createElement("hr") )
        postsList.appendChild(postElement)
    })
}

executar()




/*
async function executar() {
    const postsList = document.getElementById("postsList")

    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts")  // Chama a API
    const dados = await resposta.json() // Converte o JSON para um objeto JS na memória

    console.log(dados)

    dados.forEach(function(post) {
        const postElements = document.createElement("article")

        const postTitle = document.createElement("h2")
        postTitle.textContent = post.title

        const postAuthor = document.createElement("span")
        postAuthor.textContent = `Autor: ${post.userId}` // /users/post.userId  OU  /users/1

        const postContent = document.createElement("p")
        postContent.textContent = post.body

        postElements.append(postTitle, postAuthor, postContent, document.createElement("hr"))
        postsList.appendChild(postElements)
    })
} 

executar()

*/




/*
async function executar() {
    const resposta = await fetch("http://127.0.0.1:5500/aula-08/pratica/index.html", { method: "GET" })
    const textoHtml = await resposta.text()
    console.log(textoHtml)
} 

executar()

-----------------------------------------------------------------------------------------------------------------------------------------
async function executar() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
} 

executar()

------------------------------------------------------------------------------------------------------------------------------------------
async function executar() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts")
    const dados = await resposta.json()
    console.log(dados)
} 

executar()

*/