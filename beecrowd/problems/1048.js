export function problem(lines) {
    const salario = Number(lines[0])

    let salarioTot
    let percentual
    let reajuste

    if(salario > 0 && salario <= 400) {
        percentual = 15
        reajuste = (percentual / 100) * salario
        salarioTot = salario + reajuste
    } else if(salario > 400 && salario <= 800) {
        percentual = 12
        reajuste = (percentual / 100) * salario
        salarioTot = salario + reajuste
    } else if(salario > 800 && salario <= 1200) {
        percentual = 10
        reajuste = (percentual / 100) * salario
        salarioTot = salario + reajuste
    } else if(salario > 1200 && salario <= 2000) {
        percentual = 7
        reajuste = (percentual / 100) * salario
        salarioTot = salario + reajuste
    } else {
        percentual = 4
        reajuste = (percentual / 100) * salario
        salarioTot = salario + reajuste
    }

    console.log(`Novo salario: ${salarioTot.toFixed(2)}\nReajuste ganho: ${reajuste.toFixed(2)}\nEm percentual: ${percentual} %`)



    // console.log(`Novo salario: ${salarioTot.toFixed(2)}`)
    // console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    // console.log(`Em percentual: ${percentual} %`)
}