export function problem(lines) {

    function data() {
        const temperatura = []

        for(let i = 0; i < 3; i++) {
            temperatura.push(lines[i])
        }

        
        return temperatura.map(Number)
    }

    function felizOuTriste() {
        const temp = data()

        if(temp[0] > temp[1] && temp[1] <= temp[2]) {
            console.log(":)")
        } else if(temp[0] < temp[1] && temp[1] >= temp[2]) {
            console.log(":(")
        } else if(temp[0] < temp[1] && temp[1] < temp[2] && Math.abs(temp[0] - temp[1]) > Math.abs(temp[1] - temp[2])) {
            console.log(":(")
        } else if(temp[0] < temp[1] && temp[1] < temp[2] && Math.abs(temp[1] - temp[2]) >= Math.abs(temp[0] - temp[1])) {
            console.log(":)")
        } else if(temp[0] > temp[1] && temp[1] > temp[2] && Math.abs(temp[0] - temp[1]) > Math.abs(temp[1] - temp[2])) {
            console.log(":)")
        } else if(temp[0] > temp[1] && temp[1] > temp[2] && Math.abs(temp[1] - temp[2]) >= Math.abs(temp[0] - temp[1])) {
            console.log(":(")
        } else if(temp[0] == temp[1] && temp[1] < temp[2]) {
            console.log(":)")
        } else {
            console.log(":(")
        }

    }

    felizOuTriste()

}

// 100 0 0