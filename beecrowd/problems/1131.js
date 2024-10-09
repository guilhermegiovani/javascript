export function problem(lines) {
    // let r
    let quantGrenais = 0

    let golsInter = 0
    let golsGremio = 0

    let interVic = 0
    let gremioVic = 0
    let empate = 0

    // r = prompt("1-Sim 2-Não")

    // while(r == 1) {
    //     console.log("Novo grenal (1-sim 2-nao)")
    //     if(r == 1) {
    //         quantGrenais += 1
    //     }

    //     r = prompt("1-Sim 2-Não")

    // }
        
    for(let i = 0; i < (quantGrenais * quantGrenais); i += 3) {

        golsInter = lines[i]
        golsGremio = lines[i + 1]

        if(golsInter > golsGremio) {
            interVic += 1
        } else if(golsInter < golsGremio) {
            gremioVic += 1
        } else if(golsGremio == golsInter) {
            empate += 1
        }
    }

    console.log(`${quantGrenais} grenais`)
    console.log(`Inter:${interVic}`)
    console.log(`Gremio:${gremioVic}`)
    console.log(`Empates:${empate}`)

    if(interVic > gremioVic) {
        console.log("Inter venceu mais")
    } else if(interVic < gremioVic) {
        console.log("Gremio venceu mais")
    } else {
        console.log("Empate")
    }

}