/*
Crie um projeto Vite, depois crie um módulo com duas funções: para calcular quantos dias faltam para uma data e para calcular quantos anos se passaram desde uma data. Depois crie um prompt() que pede uma data de nascimento e então calcula quantos anos a pessoa tem e quantos dias faltam para seu aniversário.

Dica: pacote npm Dayjs
*/


import dayjs from "dayjs"

export function calcularDiasRestantesParaAniversario(dataNascimento) {
    // Salva a data de hoje e a data de nascimento no formato do dayjs
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Muda o ano da data de nascimento para o mesmo ano da data de hoje
    let proximoAniversario = nascimento.year(hoje.year())

    // Se o aniversário do ano atual já passou, aumenta 1 ano na data
    if(proximoAniversario.isBefore(hoje)) {
        proximoAniversario = proximoAniversario.add(1, "year")
    }

    console.log(proximoAniversario, hoje)
    // Calcula a diferença e retorna ela na unidade "day"
    const diasRestantes = proximoAniversario.diff(hoje, "day")
    return diasRestantes
}

export function calcularIdade(dataNascimento) {
    // Salva a data de hoje e a data de nascimento no formato do dayjs
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Calcula a diferença entre elas e retorna no formato "year"
    const idade = hoje.diff(nascimento, "year")
    return idade
}

// function diasFaltam() {
//     // let dataIni = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())
//     // let dataFim = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())
//     let dataIni = new Date('01 05 2021')
//     let dataFim = new Date('05 09 2025')
//     let dataFinal = Math.floor((dataFim - dataIni) / (1000 * 60 * 60 *24))

//     console.log(`Data ini: ${dataIni.toLocaleDateString()}
//     Data fim: ${dataFim.toLocaleDateString()}
//     Faltam: ${dataFinal} dias para a data final`)

//     // return dataFinal
// }

// diasFaltam()