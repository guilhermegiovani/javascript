// Importar uma function de outro script/arquivo

// Com a exportação comum as é preciso usar o nome exato dentra das chaves{}
import { ola, nome } from "./funcoes.js"

// Pode definir qualquer nome se for exportado com Padrão/Principal
import qualquer from "./funcoes.js"

ola()

// Function não é a única coisa que pode ser importada

// Podemos importar valores/variaveis também
alert(`A variavel nome tem o valor ${nome}`)

// Export default
alert(`O export default é ${qualquer}`)