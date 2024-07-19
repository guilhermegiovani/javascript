export async function fetchResults() {
    const results = await fetch("http://localhost:3000/results").then((response) => response.json())
    return results
}

export async function createResult(name, description) {
    // const body = JSON.stringify({ name: name, description: description })
    const body = JSON.stringify({ name, description })

    await fetch("http://localhost:3000/results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body
    })
}

export async function deleteResult(resultId) {
    await fetch(`http://localhost:3000/results/${resultId}`, { method: "DELETE" })
}

// função para carregar as perguntas do backend


// função para criar uma pergunta vazia


// função para atualizar uma pergunta exixtente


// função para excluir uma pergunta