/*
Crie uma página HTML que carregue uma lista de usuários usando a API disponível no site https://jsonplaceholder.typicode.com/ e exiba na tela todas as suas informações de forma organizada.
*/


const postsList = document.getElementById("postsList")


async function exibirUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const dados = await response.json()

  console.log(response)
  
  postsList.innerHTML = ""
  
  dados.forEach(function(user) {
    const listElement = document.createElement("li")

    listElement.innerHTML = `${user.id}`

    postsList.append(listElement)

  })
}

exibirUsers()