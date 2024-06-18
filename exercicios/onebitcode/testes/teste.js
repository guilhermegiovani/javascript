

// let dateAtual = new Date()

// console.log(dateAtual.toLocaleDateString())

function contagemAnoNovo() {
    const agora = new Date("05 04 2020");
    const anoNovo = new Date('01 01 2025')

    const tempoRestante = anoNovo.getTime() - agora.getTime();

    const diasRestantes = tempoRestante / (1000 * 60 * 60 * 24)

    console.log(diasRestantes);
    console.log(anoNovo.toLocaleDateString())
    console.log(agora.toLocaleDateString())
}

contagemAnoNovo()

// function diasFaltam(a, b) {
//     let dataIni = Date.UTC(a.getFullYear(2020), a.getMonth(6), a.getDate(15))
//     let dataFim = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())

//     return dataIni, dataFim
// }

// let dataI = Number(prompt("Digite a data inicial:"))
// let dataF = Number(prompt("Digite a data final:"))
// let diaFalta = Math.floor((dataF - dataI) / (1000 * 60 * 60 *24))

// alert (`Data Inicial: ${diasFaltam(dataI.toLocaleString)}`)