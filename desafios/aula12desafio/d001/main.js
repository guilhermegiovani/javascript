// var carregar = document.getElementById('carregar')
// carregar.addEventListener('load', carregar)

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 6 && hora < 12) {
        // BOM DIA!
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#fcee76'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#c97d5f'
    } else if (hora >= 18 && hora <= 23) {
        // Pode ser usado também o if (hora >= 18 || hora < 0)
        // BOA NOITE
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#515154'
    } else {
        // BOA MADRUGADA
        img.src = 'imagens/fotomadrugada.png'
        document.body.style.background = '#1b1b1b'
    }
}