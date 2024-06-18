function GerarTabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (c = 1; c <= 10; c++) {
            let s = n * c
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${s}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}