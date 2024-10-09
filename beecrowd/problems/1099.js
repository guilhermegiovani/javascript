export function problem(lines) {
    const quantTeste = Number(lines[0])
    const x = [].map(Number)
    const y = [].map(Number)

    let somaImpar = 0

    for(let i = 1; i <= quantTeste * 2; i++) {
        if(i % 2 >= 1){
            x.push(lines[i])
        } else {
            y.push(lines[i])
        }
    }

    for(let i = 0; i < x.length; i++) {

        if(x[i] > y[i]) {

            for(let c = y[i]; c <= x[i]; c++) {

                if(c != x[i] && c != y[i] && c % 2 >= 1) {
                    somaImpar += c
                } 
                
                if(c != x[i] && c != y[i] && c % 2 == 0 && somaImpar == 0) {
                    somaImpar = 0
                }
                
            }
            
            console.log(somaImpar)

            somaImpar = 0

        } else {

            for(let c = x[i]; c <= y[i]; c++) {

                if(c != x[i] && c != y[i] && c % 2 >= 1) {
                    somaImpar += c
                }
                
                if(c != x[i] && c != y[i] && c % 2 == 0 && somaImpar == 0) {
                    somaImpar = 0
                }

                //if(c != x[i] && c != y[i] && c % 2 == 0)
            }
            
            console.log(somaImpar)

            somaImpar = 0

        }
        
    }

    console.log(x, y)
}