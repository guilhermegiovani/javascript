/*
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
*/

//------------------------------------------------------------------------------------------------------------------------

/*
Crie um projeto Vite, depois crie um módulo com duas funções: para calcular quantos dias faltam para uma data e para calcular quantos anos se passaram desde uma data. Depois crie um prompt() que pede uma data de nascimento e então calcula quantos anos a pessoa tem e quantos dias faltam para seu aniversário.

Dica: pacote npm Dayjs
*/

import { calcularDiasRestantesParaAniversario, calcularIdade } from './funcoes.js'

// Solicite a data para o usuário
const dataNascimento = prompt("Digite sua data de nascimento (AAAA-MM-DD)")

// Executa as funções
const idade = calcularIdade(dataNascimento)
const diasRestantes = calcularDiasRestantesParaAniversario(dataNascimento)

// Exibe o resultado
alert(`Você tem ${idade} anos e faltam ${diasRestantes} dias para o seu aniversário.`)