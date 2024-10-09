export function problem(lines) {
    const [x, y] = [lines[0], lines[1]].map(Number)

    let somaNaoMultiplos = 0

    if(y > x) {

        for(let i = x; i <= y; i++) {
    
            if(i % 13 != 0) {
                somaNaoMultiplos += i
            }
        }
    } else {

        for(let i = y; i <= x; i++) {

            if(i % 13 != 0) {
                somaNaoMultiplos += i
            }
        }
    }


    console.log(somaNaoMultiplos)
}