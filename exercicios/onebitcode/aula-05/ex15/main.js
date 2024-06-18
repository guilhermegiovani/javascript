/*
Crie um programa que possui um objeto veículo com as propriedades modelo, passageiros, limite de passageiros e velocidade. Ele deve possuir métodos para aumentar e diminuir a velocidade. Nele deve ser possível adicionar um passgeiro á lista de passageiros, mas apenas se o limite ainda não tiver sido atingido e a velocidade atual for 0.
*/

const veiculo = {
    modelo: "carro",
    passageiros: [],
    limitePassageiros: 5,
    velocidade: 0,
    aumentarVelocidade: function(aceleracao) {
        this.velocidade += aceleracao
        alert(`Velocidade aumentada para ${this.velocidade}km/h`)
    },
    diminuirVelocidade: function(desaceleracao) {
        if(this.velocidade - desaceleracao >= 0) {
            this.velocidade -= desaceleracao
            alert(`Velocidade diminuída para ${this.velocidade}km/h`)
        } else {
            this.velocidade = 0
            alert("O veículo está parado.")
        }
    },
    adicionarPassageiro: function(nomePassageiro) {
        if(this.velocidade === 0 && this.passageiros.length < this.limitePassageiros) {
            this.passageiros.push(nomePassageiro)
            alert(`${nomePassageiro} foi adicionado como passageiros.`)
        } else if(this.velocidade > 0) {
            alert("Não é possível adicionar passageiros com veículo em movimento")
        } else {
            alert("Limite de passageiros atingido.")
        }
    }
}

function mostrarMenu() {
    return prompt(`Veículo: ${veiculo.modelo}\nLimite de passageiros: ${veiculo.limitePassageiros}\nVelocidade atual: ${veiculo.velocidade}km/h\nPassageiros: ${veiculo.passageiros.join(", ")}\n\nEscolha uma opção:\n1. Aumentar Velocidade\n2. Diminuir Velocidade\n3. Adicionar Passageiros\n4. Sair`)
}

while(true) {
    const escolha = mostrarMenu()

    switch(escolha) {
        case "1":
            const aceleracao = Number(prompt("Digite a quantidade de aceleração:"))
            veiculo.aumentarVelocidade(aceleracao)
            break
        case "2":
            const desaceleracao = Number(prompt("Digite a quantidade de desaceleração:"))
            veiculo.diminuirVelocidade(desaceleracao)
            break
        case "3":
            const nomePassageiro = prompt("Digite o nome do passageiro:")
            veiculo.adicionarPassageiro(nomePassageiro)
            break
        case "4":
            alert("Saindo...")
            break
        default:
            alert("Opção inválida. Tente novamente")
    }

    if(escolha === "4") {
        break
    }
}