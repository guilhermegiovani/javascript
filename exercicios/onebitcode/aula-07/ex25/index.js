/*
Crie uma função que recebe um ID numérico como argumento e retorna uma promise que resolve para um objeto usuário com id, nome (no formato "Usuário ${id}") e email (no formato "usuario${id}@email.com"). Depois, crie uma função async para mapear um array de IDs quaisquer para seus respectivos objetos de usuário usando a função anterior.
*/

// function obterUsuarioPorID(id) {
//     // Arrow function
//     // (arg) => { return }
//     return new Promise((resolve) => {
//         const usuario = {
//             id,
//             nome: `Usuário ${id}`,
//             email: `usuario${id}@email.com`,
//         }
//         resolve(usuario)
//     })
// }

// async function mapearIDsParaUsuarios(ids) {
//     const usuarios = []

//     for (let i = 0; i < ids.length; i++) {
//         const id = ids[i]
//         const usuario = await obterUsuarioPorID(id)
//         usuarios.push(usuario)
//     }

//     return usuarios
// }

// async function exemplo() {
//     const ids = [23, 11, 95, 54, 15]
//     const usuarios = await mapearIDsParaUsuarios(ids)
//     console.log(usuarios)
// }

// exemplo()


async function obterUsuarioPorID(id) {
    return {
        id,
        nome: `Usuário${id}`,
        email: `usuario${id}@email.com`
    }
}

async function mapearIDsParaUsuarios(ids) {
    // () => { return 42 }
    // () => 42
    // () => { return calcular() }
    // () => calcular()
    const usuariosPromises = ids.map((id) => obterUsuarioPorID(id))
    const usuarios = await Promise.all(usuariosPromises)
    return usuarios
}

async function exemplo() {
    const ids = [23, 11, 95, 54, 15]
    const usuarios = await mapearIDsParaUsuarios(ids)
    console.log(usuarios)
}

exemplo()









/*
const usuario = {
    nome: [],
    id: []
}

// usuario.nome.push("Guilherme")
// usuario.id.push(1)

function cadastrarUsuario() {
    let nomeUsu = prompt("Digite um nome?")
    let idUsu = Math.floor(Math.random() * (100 - 1 + 1)) + 1

    if(nomeUsu === usuario.nome || idUsu === usuario.id) {
        alert("Nome ou Id já cadastrado! Tente Novamente!")
    }

    usuario.nome.push(nomeUsu)
    usuario.id.push(idUsu)

}

function numId() {
    return new Promise(function(resolve, reject) {

        if(usuario.nome === Number || usuario.nome === "" || isNaN(usuario.id) || usuario.id === 0) {
            reject("Nenhum usuário encontrado")
        } else {
            resolve(usuario)
        }

    })
}

numId().then(function(resultado) {
    console.log(resultado)
})
.catch(function(erro) {
    console.log(erro)
})

async function usuarioMap() {
    let idMap = usuario.map(function(eleAtual, indAtual) {
        alert(`${indAtual} ${eleAtual}\n`)
    })

    return idMap
}

let escolha

while(escolha !== "2") {
    escolha = prompt("Deseja se cadastrar? \n1. Sim \n2. Não")

    switch(escolha) {
        case "1":
            cadastrarUsuario()
            break
        case "2":
            alert("Finalizando...")
            usuarioMap()
            // alert(`Usuário ${usuario.id}\n`)
            // alert(`Usuário${usuario.id}@email.com\n`)
            break
        default:
            break
    }
}
*/