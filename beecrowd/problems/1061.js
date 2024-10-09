export function problem(lines) {
    // const [diaIni, numDiaIni] = lines[0].split(' ').map(Number)
    // const [horaIni, minIni, segIni] = lines[1].split(' :').map(Number)

    // const [diaFim, numDiaFim] = lines[2].split(' ').map(Number)
    // const [horaFim, minFim, segFim] = lines[3].split(' :').map(Number)
    

    // const [numDiaIni, horaIni, minIni, segIni] = [lines[1], lines[2], lines[4], lines[6]].map(Number)

    // const [numDiaFim, horaFim, minFim, segFim] = [lines[8], lines[9], lines[11], lines[13]].map(Number)

    const inicio = (numDiaIni * 86400) + (horaIni * 3600) + (minIni * 60) + segIni
    const fim = (numDiaFim * 86400) + (horaFim * 3600) + (minFim * 60) + segFim

    let duracaoSegTot

    if(fim > inicio) {
        duracaoSegTot = fim - inicio
    } else {
        duracaoSegTot = (24 * 60 * 60 - inicio) + fim
    }

    let aux
    
    const duracaoDia = Math.floor(duracaoSegTot / 86400)
    aux = duracaoSegTot % 86400

    const duracaoHora = Math.floor(aux /3600)
    aux = aux % 3600

    const duracaoMin = Math.floor(aux / 60)
    
    const duracaoSeg = aux % 60

    console.log(`${duracaoDia} dia(s)`)
    console.log(`${duracaoHora} hora(s))`)
    console.log(`${duracaoMin} minuto(s)`)
    console.log(`${duracaoSeg} segundo(s)`)

    // const iniEvento = [numDiaIni, horaIni, minIni, segIni]
}