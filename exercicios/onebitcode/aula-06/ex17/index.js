/*
Crie uma página HTML com um botão e um elemento de parágrafo (por exemplo, <p id="meuParagrafo">Este é um parágrafo.</p>. Quando o usuário clicar no botão, o texto do parágrafo deve ser alterado para "Texto alterado com sucesso".)
*/

const paragrafo = document.getElementById("meuParagrafo")
const button = document.getElementById("button").addEventListener("click", function() {
    paragrafo.innerText = "Texto alterado com sucesso!"
})