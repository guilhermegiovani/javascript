const gerarTab = document.getElementById('button')
gerarTab.addEventListener('click', e => {
    e.preventDefault();

    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''

        for (let c = 1;c <= 10;c++) {
            let s = n * c
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${s}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
})

/*
function GerarTabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''

        for (let c = 1;c <= 10;c++) {
            let s = n * c
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${s}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
*/