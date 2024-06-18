function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('nasc')
    var res = document.querySelector('div#res')

    if (nasc.value.length == 0 || Number(nasc.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(nasc.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'

            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bb_mas.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem_mas.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto_mas.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso_mas.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bb_fem.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem_fem.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto_fem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso_fem.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        img.style.width = '250px'
        img.style.height = '250px'
        img.style.borderRadius = '50%'
    }
}