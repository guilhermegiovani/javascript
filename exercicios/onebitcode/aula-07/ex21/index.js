/*
Crie uma página HTML com um botão de "Adicionar ao carrinho" que, ao clicar, exibe uma mensagem na tela. Após 5 segundos a mensagem deve ser removido da tela
*/



// Funçao para exibir a mensagem e removê-la após 5 segundos
function exibirMensagem() {
    const mensagem = document.querySelector(".mensagem")
    mensagem.classList.remove("hidden")

    setTimeout(function() {
        mensagem.classList.add("hidden")
    }, 5 * 1000)
}

// Adicione um ouvinte de evento ao botão
const botãoAdicionar = document.getElementById("addToCart")
botãoAdicionar.addEventListener("click", exibirMensagem)





/*
const btn = document.getElementById("addToCart")

btn.addEventListener("click", function() {

    let apagarMsg = document.getElementById("apagar-msg")
    apagarMsg.innerHTML = "<p>Essa mensagem vai desaparecer em 5 segundos!</p>"
    // Substituir mensagem
    setTimeout(function() {

        // Remover a tag com o SELETOR "apagar-msg"
        // var msg = document.getElementById("apagar-msg")
        // if(msg.parentNode) {
        // msg.parentNode.removeChild
        // }

        // Substituir mensagem
        document.getElementById("apagar-msg").innerHTML = ""
    }, 5000)

})

*/