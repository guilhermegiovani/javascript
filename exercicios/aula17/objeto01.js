// Objetos são variáveis(guarda valores) e guarda funcionabilidade(métodos)

let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou!')
    this.peso += p
}}

amigo.engordar(1)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)