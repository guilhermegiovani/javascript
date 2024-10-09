export function problem(lines) {
    const num = Number(lines[0])

    const fibonacci = [0, 1]
    let [ultimo, penultimo] = [1, 0]
    let soma = 0

    for(let i = 0; i < num - 2; i++) {
        soma = ultimo + penultimo
        fibonacci.push(soma)
        penultimo = ultimo
        ultimo = soma
    }

    console.log(...fibonacci)
}