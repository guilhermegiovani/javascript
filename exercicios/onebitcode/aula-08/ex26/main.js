/*
Crie uma página HTML que carregue uma lista de usuários usando a API disponível no site https://jsonplaceholder.typicode.com/ e exiba na tela todas as suas informações de forma organizada.
*/


const postsList = document.getElementById("postsList")


async function exibirUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const dados = await response.json()

  console.log(dados)
  
  postsList.innerHTML = ""
  
  dados.forEach(function(user) {
    const listElement = document.createElement("li")

    listElement.innerHTML = 
    `<article>
      <p>
        Id: ${user.id}
      </p>

      <p>
        Nome: ${user.name}
      </p>

      <p>
        Nome de Usuário: ${user.username}
      </p>

      <p>
        Email: ${user.email}
      </p>

      <p>
        Telefone: ${user.phone}
      </p>

      <p>
        Site: ${user.website}
      </p>

      <p>
        Endereço: 

        <ul>

          <li style="list-style: disc;">

            <p>
              <strong>Cidade:</strong> ${user.address.city}
            </p>

            <p>
              Rua: ${user.address.street}
            </p>

            <p>
              Suíte: ${user.address.suite}
            </p>

            <p>
              Código Postal: ${user.address.zipcode}
            </p>

            <p>
              Geográfico: Lat (${user.address.geo.lat}) / Lng (${user.address.geo.lng})
            </p>

          </li>

        </ul>
      </p>

      <p>

      </p>
      </article>`

    postsList.append(listElement)

  })
}

exibirUsers()