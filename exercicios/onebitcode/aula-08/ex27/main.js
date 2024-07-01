/*
Crie uma aplicação wed capaz de gerenciar uma lista de leitura. Deve ser possível adicionar livros à lista através de um formulário, visualizar a lista na tela e editar suas informações (como o seu progresso de leitura). Livros finalizados devem ser exibidos de alguma forma diferente. Também deve ser possível excluir livros da lista. Utilize a biblioteca json-server para simular o backend da aplicação onde serão salvos os livros. 
*/

const livroForm = document.getElementById("livroForm")
const livroInput = document.getElementById("nomeLivro")
const buttonAdd = document.getElementById("buttonAdd")
const listLivro = document.getElementById("listLivro")

// let urlId = new URLSearchParams(window.location.search)

carregarLivros()

livroForm.addEventListener("submit", (event) => {
  event.preventDefault()

  const livro = livroInput.value

  
  if (livro) {
    addLivro(livro)
  }

  livroInput.value = ""
  livroInput.focus()

})

async function addLivro(nomeLivro) {
  const response = await fetch("http://localhost:3000/livros", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nomeLivro })
  })

  if(!response.ok) {
    console.error(`Um erro ocorreu! ${response.status} - ${response.statusText}`)
  } else {
    carregarLivros()
  }
}

async function carregarLivros() {
  const response = await fetch("http://localhost:3000/livros")
  const livros = await response.json()

  console.log(livros)

  exibirLivros(livros)
}

function exibirLivros(livros) {
  listLivro.innerHTML = ""

  livros.forEach(function (livro) {
    const liElement = document.createElement("li")
    const article = document.createElement("div")
    const hr = document.createElement("hr")
    const btnEditar = document.createElement("button")
    const btnExcluir = document.createElement("button")
    const btnConcluir = document.createElement("button")

    // urlId.set('id', `${livro.id}`)

    btnEditar.innerHTML = '<i class="fa-solid fa-pen"></i>'
    btnExcluir.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    btnConcluir.innerHTML = '<i class="fa-solid fa-check"></i>'

    btnConcluir.classList.add("concluir")
    btnEditar.classList.add("editar")
    btnExcluir.classList.add("excluir")

    btnEditar.style.marginRight = "5px"
    btnConcluir.style.marginRight = "5px"

    article.innerHTML = `<p> ${livro.nomeLivro} </p>`
    liElement.classList.add("livro")
    
    liElement.appendChild(article)
    listLivro.append(liElement, btnConcluir, btnEditar, btnExcluir, hr)

    // btnExcluir.addEventListener("click", (event) => {
    //   event.preventDefault()

    //   excluirLivro()

    // })
  })
}

/* Editar */

// async function editarLivro(livro) {}

/* Excluir */

async function excluirLivro() {
  const response = await fetch('http://localhost:3000/livros', {
    method: "DELETE"
  })

  if(!response.ok) {
    console.error(`Ocorreu um erro ao excluir o livro da lista! ${response.status} - ${response.statusText}`)
  } else {
    console.warn("O livro foi excluído da lista com sucesso!")
    
    setTimeout(() => {
      location.reload()
    }, 3000)
  }
}


document.addEventListener("click", (e) => {
  const targetEl = e.target
  const parentEl = targetEl.closest("div")

  if(targetEl.classList.contains("concluir")) {
    parentEl.classList.toggle("concluido")
  }
})