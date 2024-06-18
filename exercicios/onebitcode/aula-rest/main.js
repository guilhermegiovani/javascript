/*
Criar um botão para EXCLUIR post e um botão para EDITAR post.
*/

const postForm = document.getElementById("postForm")
const titleInput = document.getElementById("title")
const bodyInput = document.getElementById("body")
const postsList = document.getElementById("postsList")

carregarPosts()

postForm.addEventListener("submit", function(event) {
  event.preventDefault()

  const title = titleInput.value
  const body = bodyInput.value

  criarPost(title, body)

  titleInput.value = ""
  bodyInput.value = ""
})

async function criarPost(title, body) {
  const resposta = await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, body })  //`{ "title": "${title}", "body": "${body}" }`  JSON.stringify({ title, body })
  })

  if(!resposta.ok) {
    console.error(`Um erro ocorreu! ${resposta.status} - ${resposta.statusText}`)
  } else {
    carregarPosts()
  }

}

async function carregarPosts() {
  const resposta = await fetch("http://localhost:3000/posts")
  const posts = await resposta.json()

  console.log(posts)

  exibirPosts(posts)
}

function exibirPosts(posts) {
  postsList.innerHTML = ""

  posts.forEach(function (post) {
    const listItem = document.createElement("li")
    listItem.innerHTML = `<article> <h3>${post.title}</h3> <p>${post.body}</p> </article> <hr>`

    postsList.appendChild(listItem)
  })
}














/*
async function executar() {
  const dados = await fetch("http://localhost:3000/tarefas").then(resposta => resposta.json())
  console.log(dados)
}

executar()
*/


/*
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
*/