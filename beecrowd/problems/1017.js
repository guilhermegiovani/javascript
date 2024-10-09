export function problem(lines) {
    const tempoGasto = Number(lines[0])
    const velMed = Number(lines[1])
    const consumoCombus = 12
    const litrosGastos = velMed * tempoGasto / consumoCombus

    console.log(litrosGastos.toFixed(3))
}