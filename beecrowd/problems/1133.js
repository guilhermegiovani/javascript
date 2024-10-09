export function problem(lines) {
    const [x, y] = [lines[0], lines[1]].map(Number)

    if(x > y) {
        
        for(let i = y + 1; i < x; i++) {

            if(i % 5 == 2 || i % 5 == 3) {
                console.log(i)
            }
        }
    } else {
        for(let i = x + 1; i < y; i++) {

            if(i % 5 == 2 || i % 5 == 3) {
                console.log(i)
            }
        }
    }
}