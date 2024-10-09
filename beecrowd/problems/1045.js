export function problem(lines) {
    let [a, b, c] = lines[0].split(' ').map(Number)
    let aux

    if (a < b) {
        aux = a
        a = b
        b = aux
    }

    if (a < c) {
        aux = a
        a = c
        c = aux
    }

    if (b < c) {
        aux = b
        b = c
        c = aux
    }
    
    function verificarTriangulo(a, b, c) {

        if(a >= b + c) {
            console.log("NAO FORMA TRIANGULO")
        } else {
            if(a**2 == b**2 + c**2) {console.log("TRIANGULO RETANGULO")}
            if(a**2 > b**2 + c**2) {console.log("TRIANGULO OBTUSANGULO")} 
            if(a**2 < b**2 + c**2) {console.log("TRIANGULO ACUTANGULO")} 
            if(a == b && b == c) {console.log("TRIANGULO EQUILATERO")} 
            if(a == b && b != c || b == c && c != a || a == c && c != b) {console.log("TRIANGULO ISOSCELES")}
        }

    }

    verificarTriangulo(a, b, c)
}