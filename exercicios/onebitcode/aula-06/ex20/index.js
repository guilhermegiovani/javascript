/*
Crie uma página HTML que permite ao usuário adicionar e remover itens de uma lista de tarefas. A lista de tarefas deve incluir os seguintes recursos:
    1.Adicionar uma nova tarefa.
    2.Marcar uma tarefa como concluída.
    3.Riscar as tarefas que forem marcados como concluídas.
    4.Excluir uma tarefa.
*/

const form = document.getElementById("formTarefas")
form.addEventListener("submit", adicionarTarefa)

function toKebabCase(str) {
    return str.split(" ").join("-").toLowerCase()
}


// Função para adicionar uma nova tarefa à lista
function adicionarTarefa(event) {
    event.preventDefault()

    const inputTarefa = document.getElementById("tarefa")
    const textoTarefa = inputTarefa.value

    if(textoTarefa !== "") {
        const listaTarefas = document.getElementById("ListaTarefas")
        const novaTarefa = document.createElement("li")

        // Cria input de checkbox para marcar como concluída
        const checkbox = document.createElement("input")
        checkbox.id = toKebabCase(textoTarefa)
        checkbox.type = "checkbox"
        checkbox.addEventListener("change", function() {
            novaTarefa.classList.toggle("concluido")
        })

        // Cria uma label com a tarefa
        const label = document.createElement("label")
        label.htmlFor = toKebabCase(textoTarefa)
        label.textContent = textoTarefa

        novaTarefa.append(checkbox, label)

        // Adiciona um botão para excluir a tarefa
        const botaoExcluir = document.createElement("button")
        botaoExcluir.textContent = "Excluir"
        botaoExcluir.addEventListener("click", function() {
            novaTarefa.remove()
        })

        novaTarefa.appendChild(botaoExcluir)
        listaTarefas.appendChild(novaTarefa)

        inputTarefa.value = ""
    }


    // const li = document.createElement("li")
    // li.id = toKebabCase(tarefas.tarefa)
    // li.innerText = `${tarefas.tarefa}`

    // const btnRemover = document.createElement("button")
    // btnRemover.innerText = "Remover Tarefa"
    // btnRemover.addEventListener("click", function() {
    //     removerTarefa(li.id)
    // })

    // li.appendChild(btnRemover)

    // const marcar = document.createElement("input:checkbox")
    // li.appendChild(marcar)

    // document.getElementById("ListaTarefas").appendChild(li)
}
