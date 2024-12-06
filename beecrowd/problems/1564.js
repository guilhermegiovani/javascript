export function problem(lines) {
    let n = 0
    
    function umaOuDuas() {

        for(let i = 0; i <= 1000; i++) {
            n = lines[i]

            if(n == 0) {
                console.log("vai ter copa!")
            } else if(n > 0) {
                console.log("vai ter duas!")
            } else {
                return
            }
        }

    }

    umaOuDuas()

}