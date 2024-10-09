export function problem(lines) {
    const valor = Number(lines[0])
    const anoEmDias = 365
    const mesEmDias = 30

    const quantAnos = parseInt(valor / anoEmDias)
    const quantMes = parseInt((valor % anoEmDias) / mesEmDias)
    const quantDias = parseInt((valor % anoEmDias) % mesEmDias)

    console.log(`${quantAnos} ano(s)`)
    console.log(`${quantMes} mes(es)`)
    console.log(`${quantDias} dia(s)`)
    
}