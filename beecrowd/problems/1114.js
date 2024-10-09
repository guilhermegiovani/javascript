export function problem(lines) {
    const senha = lines

    for(let i = 0; i <= 4; i++) {

        if(senha[i] == 2002) {
           return console.log("Acesso Permitido")
        } else {
            console.log("Senha Invalida")
        }
    }
    
}