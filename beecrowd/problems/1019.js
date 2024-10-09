export function problem(lines) {
    const valor = Number(lines[0])

    const tempo = {
        'horas': parseInt(valor / 3600),
        'min': parseInt((valor % 3600) / 60),
        'seg': valor % 60
    }

    console.log(`${tempo.horas}:${tempo.min}:${tempo.seg}`)
}