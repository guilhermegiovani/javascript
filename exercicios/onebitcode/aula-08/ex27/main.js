/*
Crie uma aplicação wed capaz de gerenciar uma lista de leitura. Deve ser possível adicionar livros à lista através de um formulário, visualizar a lista na tela e editar suas informações (como o seu progresso de leitura). Livros finalizados devem ser exibidos de alguma forma diferente. Também deve ser possível excluir livros da lista. Utilize a biblioteca json-server para simular o backend da aplicação onde serão salvos os livros. 
*/

const livroForm = document.getElementById("livroForm")
const livroInput = document.getElementById("nomeLivro")
const buttonAdd = document.getElementById("buttonAdd")
const listLivro = document.getElementById("listLivro")
const pagLidasForm = document.getElementById("pagLidasForm")
const pagTotalInput = document.getElementById("totalPag")
const infoDiv = document.getElementById("infoDiv")
const btnEdit = document.getElementById("btnEdit")
const btnCancel = document.getElementById("btnCancel")
const btnSairInfo = document.createElement("button")
let pagLidasInput = document.getElementById("numPagLidas")

let url = "http://localhost:3000/livros"
let livroId
let livroPagLidas
let livroNome
let livroTotPag
let livroPagRest

// let editarLivro

// let urlId = new URLSearchParams(window.location.search)

infoDiv.classList.add("hiden")

carregarLivros()

livroForm.addEventListener("submit", (event) => {
  event.preventDefault()

  const livro = livroInput.value
  const paginas = pagTotalInput.value
  const pagLidas = 0
  const pagRestantes = 0

  addLivro(livro, paginas, pagLidas, pagRestantes)

  livroInput.value = ""
  pagTotalInput.value = ""

  livroInput.focus()

})

async function addLivro(nome, paginas, pagLidas, pagRestantes) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nome, paginas, pagLidas, pagRestantes })
  })

  if(!response.ok) {
    console.error(`Um erro ocorreu! ${response.status} - ${response.statusText}`)
  } else {
    carregarLivros()
  }
}

async function carregarLivros() {
  const response = await fetch(url)
  const livros = await response.json()

  console.log(livros)

  exibirLivros(livros)
}

function exibirLivros(livros) {
  listLivro.innerHTML = ""

  livros.forEach(function (livro) {
    const liElement = document.createElement("li")
    // const article = document.createElement("article")
    const hr = document.createElement("hr")
    const btnEditar = document.createElement("button")
    const btnExcluir = document.createElement("button")
    const btnConcluir = document.createElement("button")
    const btnInfo = document.createElement("button")

    livroId = livro.id
    livroPagLidas = livro.pagLidas
    livroNome = livro.nome
    livroTotPag = livro.paginas

    btnEditar.innerHTML = '<i class="fa-solid fa-pen"></i>'
    btnExcluir.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    btnConcluir.innerHTML = '<i class="fa-solid fa-check"></i>'
    btnInfo.innerHTML = "Info"

    btnConcluir.classList.add("concluir")
    btnEditar.classList.add("editar")
    btnExcluir.classList.add("excluir")
    btnInfo.classList.add("infoLivro")
    

    btnEditar.style.marginRight = "5px"
    btnConcluir.style.marginRight = "5px"
    btnExcluir.style.marginRight = "5px"

    liElement.innerHTML = `<article> <p> ${livro.nome} </p> </article>`
    liElement.classList.add("livro")
    
    liElement.append(btnConcluir, btnEditar, btnExcluir, btnInfo)
    listLivro.append(liElement, hr)

    // Excluir

    btnExcluir.addEventListener("click", (event) => {
      event.preventDefault()

      excluirLivro()

    })

    async function excluirLivro() {
      const response = await fetch(`${url}/${livro.id}`, {
        method: "DELETE"
      })
    
      if(!response.ok) {
        console.error(`Ocorreu um erro ao excluir o livro da lista! ${response.status} - ${response.statusText}`)
      } else {
        console.warn("O livro foi excluído da lista com sucesso!")
        
        setTimeout(() => {
          location.reload()
        }, 1000)
      }
    }

    // Editar

    // btnEdit.addEventListener('click', (e) => {
    //   // ou pagLidasForm
    //   e.preventDefault()
      
    //   let pagLidas = pagLidasInput.value
    //   const nome = livro.nome
    //   const paginas = livro.paginas
    //   const pagRestantes = (paginas - pagLidas)
    //   // livroPagRest = pagRestante
      
    //   // if(pagLidasInput.value === paginas) {
    //   //   console.warn(`A leitura do livro "${livroNome}" foi concluído! Click no botão "Concluir" para riscar o livro da lista!`)

    //   // } else if(pagLidasInput.value > paginas){
    //   //   console.log(`ERRO! Esse livro não tem ${pagLidasInput.value} páginas! Digite outro número!`)
    //   //   pagLidas = livro.pagLidas

    //   // } else if(pagLidasInput.value < livro.pagLidas) {
    //   //   console.log(`ERRO! Digite um número maior que o anterior!`)
    //   //   pagLidas = livro.pagLidas

    //   // }
      
    //  editarLivro(nome, paginas, pagLidas, pagRestantes)
      
    //  pagLidasForm.classList.add("hiden")
    //  livroForm.classList.remove("hiden")
    
    //})

    // btnEditar.addEventListener('click', () => {
    //   pagLidasForm.classList.remove("hiden")
    //   livroForm.classList.add("hiden")
    //   infoDiv.classList.add("hiden")

    //   pagLidasInput.value = livro.pagLidas
    // })

    // async function editarLivro(nome, paginas, pagLidas, pagRestantes) {
    //   const response = await fetch(`${url}/${livro.id}`, {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({ nome, paginas, pagLidas, pagRestantes })
    //   })
    
    //   if(!response.ok) {
    //     console.error(`Ocorreu um erro ao editar! ${response.status} - ${response.statusText}`)
    //   } else {
    //     console.warn("O livro foi editado com sucesso!")
    
    //     setTimeout(() => {
    //       location.reload()
    //     }, 2000);
    //   }
    // }

    // editarLivro = async (nome, paginas, pagLidas, pagRestantes) => {
    //   const response = await fetch(`${url}/${livro.id}`, {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({ nome, paginas, pagLidas, pagRestantes })
    //   })
    
    //   if(!response.ok) {
    //     console.error(`Ocorreu um erro ao editar! ${response.status} - ${response.statusText}`)
    //   } else {
    //     console.warn("O livro foi editado com sucesso!")
    
    //     setTimeout(() => {
    //       location.reload()
    //     }, 5000);
    //   }
    // }


    /* Ver informações do livro */

    btnInfo.addEventListener('click', () => {
      infoDiv.classList.remove("hiden")
      livroForm.classList.add("hiden")
      pagLidasForm.classList.add("hiden")

      mostrarInfo()
    })
    
    async function mostrarInfo() {
      // const response = await fetch(`${url}/${livro.id}`)

      infoDiv.innerHTML = 
      `
      <p> Nome do Livro: ${livro.nome} </p>
      <p> Total de Páginas: <strong>${livro.paginas}</strong> páginas </p>
      <p> Páginas Lidas: <strong>${livro.pagLidas}</strong> páginas </p>
      <p> Restam <strong>${livro.pagRestantes}</strong> páginas para terminar o livro! </p>
      `

      btnSairInfo.innerHTML = "Sair"

      infoDiv.appendChild(btnSairInfo)
    }
    
  })
  
}

/* Editar */

pagLidasForm.addEventListener('submit', (e) => {
  e.preventDefault()
  
  let pagLidas = pagLidasInput.value
  const nome = livroNome
  const paginas = livroTotPag
  const pagRestantes = (paginas - pagLidas)
  // livroPagRest = pagRestante
  
  // if(pagLidasInput.value === paginas) {
  //   console.warn(`A leitura do livro "${livroNome}" foi concluído! Click no botão "Concluir" para riscar o livro da lista!`)

  // } else if(pagLidasInput.value > paginas){
  //   console.log(`ERRO! Esse livro não tem ${pagLidasInput.value} páginas! Digite outro número!`)
  //   pagLidas = livroPagLidas

  // } else if(pagLidasInput.value < livroPagLidas) {
  //   console.log(`ERRO! Digite um número maior que o anterior!`)
  //   pagLidas = livroPagLidas
  //   pagRestantes = (paginas - pagLidas)

  // }
  
  editarLivro(nome, paginas, pagLidas, pagRestantes)
  
  pagLidasForm.classList.add("hiden")
  livroForm.classList.remove("hiden")

})

async function editarLivro(nome, paginas, pagLidas, pagRestantes) {
  const response = await fetch(`${url}/${livroId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nome, paginas, pagLidas, pagRestantes })
  })

  if(!response.ok) {
    console.error(`Ocorreu um erro ao editar! ${response.status} - ${response.statusText}`)

  } else {
    console.warn("O livro foi editado com sucesso!")

    setTimeout(() => {
      location.reload()
      
    }, 2000);
  }
}


/* Obter Informações */

// async function mostrarInfo() {
//   const response = await fetch(`${url}/${livroId}`)
//   const dados = await response.json()

//   console.log(dados)
// }

/* Outros eventos */

document.addEventListener("click", (e) => {
  const targetEl = e.target
  const parentEl = targetEl.closest("li")

  if(targetEl.classList.contains("concluir")) {
    parentEl.classList.toggle("concluido")
  }

  if(targetEl.classList.contains("editar")) {
    pagLidasForm.classList.remove("hiden")
    livroForm.classList.add("hiden")
    infoDiv.classList.add("hiden")

    pagLidasInput.value = livroPagLidas
  }

})

/* Cancelar */

btnCancel.addEventListener('click', (e) => {
  e.preventDefault()

  pagLidasForm.classList.add("hiden")
  livroForm.classList.remove("hiden")
})

/* Sair Informações */

btnSairInfo.addEventListener('click', () => {
  infoDiv.classList.add("hiden")
  livroForm.classList.remove("hiden")
})