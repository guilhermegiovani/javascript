export function problem(lines) {
    const numCasos = lines[0]

    function conduite(casos) {
        let [r1, r2] = 0
        let r3 = 0

        for(let i = 1; i <= casos; i++) {
            [r1, r2] = lines[i].split(" ").map(Number)
            r3 = r1 + r2
            console.log(r3)
        }
    }

    conduite(numCasos)
}