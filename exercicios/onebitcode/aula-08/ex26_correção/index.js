const usersList = document.getElementById("usersList")

document.addEventListener("DOMContentLoaded", loadUsers)

async function loadUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if(!response.ok) throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`)

        const users = await response.json()

        users.forEach((user) => {
            const listItem = document.createElement("li")
            listItem.innerHTML = renderUser(user)
            usersList.append(listItem)
        })
    } catch (error) {
        console.error("Erro na requisição", error)
    }
}

function renderUser(user) {
    return `
    <strong>Nome:</strong> ${user.name}<br>
    <strong>Nome de Usuário:</strong> ${user.username}<br>
    <strong>Email:</strong> ${user.email}<br>
    <strong>Endereço:</strong> ${user.address.street}<br>
    <strong>Telefone:</strong> ${user.phone}<br>
    <strong>Website:</strong> ${user.website}<br>
    <strong>Empresa:</strong> ${user.company.name}<br><hr>
    `
}