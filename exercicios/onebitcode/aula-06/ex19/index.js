/*
Crie uma página HTML com um botão e um elemento de parágrafo que exibe quantas vezes o botão foi clicado, começando em "O cliques". Cada vez que o botão for clicado, o número de cliques exibido no parágrafo deve ser incrementado.
*/
let paragrafo = document.getElementById("quantidadeClicks")
let quantClicks = 0
const button = document.getElementById("button").addEventListener("click", function() {
    quantClicks++
    paragrafo.innerHTML = `${quantClicks} Clique${quantClicks !== 1 ? "s" : ""}`
})

/*
Operador ternário

condição ? valor_caso_verdadeiro : valor_caso_falso
*/