export function problem(lines) {
    const ddd = lines

    const tabelaDDD = {
        '61': 'Brasilia',
        '71': 'Salvador',
        '11': 'Sao Paulo',
        '21': 'Rio de Janeiro',
        '32': 'Juiz de Fora',
        '19': 'Campinas',
        '27': 'Vitoria',
        '31': 'Belo Horizonte'
    }

    const cidade = tabelaDDD[ddd]

    if(!tabelaDDD[ddd]) {
        console.log("DDD nao cadastrado")
    } else {
        console.log(cidade)
    }

}