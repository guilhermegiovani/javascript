/*
Crie um novo projeto e use o npm para instalar o pacote lodash. Em seguida, importe e use função .kebabCase() para criar frases sem espaços e letras maiúsculas.
*/

import _ from "lodash"

// let frase = "Essa é uma frase de Exemplo"
// let fraseKebab = _.kebabCase(frase)
// console.log(fraseKebab)

// frase = "Este é um Título Ficticio Para um Artigo"
// fraseKebab = _.kebabCase(frase)
// console.log(fraseKebab)

let frase = prompt("Escreva uma frase:")

alert(_.kebabCase(frase.toUpperCase()))