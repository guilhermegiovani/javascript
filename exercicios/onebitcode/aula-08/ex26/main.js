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

    listElement.style.fontFamily = "Arial"
    listElement.innerHTML = 
    `<article>
      <p style="font-size: 14px;">
        <strong style="font-size: 17px;">Nome:</strong> ${user.name}
      </p>

      <p style="font-size: 14px;">
        <strong style="font-size: 17px;">Nome de Usuário:</strong> ${user.username}
      </p>

      <p style="font-size: 14px;">
        <strong style="font-size: 17px;">Id:</strong> ${user.id}
      </p>

      <p style="font-size: 14px;">
        <strong style="font-size: 17px;">Email:</strong> ${user.email}
      </p>

      <p style="font-size: 14px;">
        <strong style="font-size: 17px;">Telefone:</strong> ${user.phone}
      </p>

      <p style="font-size: 14px;">
        <strong style="font-size: 17px;">Site:</strong> ${user.website}
      </p>

      <p style="font-size: 14px;">
        <strong style="font-size: 17px;">Endereço:</strong> 

        <ul>

          <li style="list-style: disc;">

            <p style="font-size: 14px;">
              <strong style="font-size: 16px;">Cidade:</strong> ${user.address.city}
            </p>

            <p style="font-size: 14px;">
              <strong style="font-size: 16px;">Rua:</strong> ${user.address.street}
            </p>

            <p style="font-size: 14px;">
              <strong style="font-size: 16px;">Suíte:</strong> ${user.address.suite}
            </p>

            <p style="font-size: 14px;">
              <strong style="font-size: 16px;">Código Postal:</strong> ${user.address.zipcode}
            </p>

            <p style="font-size: 14px;">
              <strong style="font-size: 16px;">Geográfico:</strong> Lat (${user.address.geo.lat}) / Lng (${user.address.geo.lng})
            </p>

          </li>

        </ul>
      </p>

      <p style="font-size: 14px;">
        <strong style="font-size: 17px;">Empresa:</strong>

        <ul>

          <li style="list-style: disc;">

            <p style="font-size: 14px;">
              <strong style="font-size: 16px;">Nome:</strong> ${user.company.name}
            </p>

            <p style="font-size: 14px;">
              <strong style="font-size: 16px;">CatchPhrase:</strong> ${user.company.catchPhrase}
            </p>

            <p style="font-size: 14px;">
              <strong style="font-size: 16px;">Bs:</strong> ${user.company.bs}
            </p>

          </li>

        </ul>
      </p>

      </article> <hr style="margin-bottom: 25px;">`

    postsList.append(listElement)

  })
}

exibirUsers()