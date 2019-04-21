const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Entre com três números inteiros e positivos: ", function (numbers) {
    reader.close()
    numbers = numbers.split(' ')
    let [v1, v2, v3] = numbers
    v1 = parseInt(v1)
    v2 = parseInt(v2)
    v3 = parseInt(v3)
    
    if (v1 < v2 && v2 < v3) {
        console.log(`${v1}, ${v2}, ${v3}`)
        return
    } 
    
    if (v1 > v2) {
        let aux = v1
        v1 = v2
        v2 = aux
    }

    if (v2 > v3) {
        let aux = v2
        v2 = v3
        v3 = aux
    } else {
        console.log(`${v1}, ${v2}, ${v3}`)
        return
    }

    if (v1 > v2) {
        let aux = v1
        v1 = v2
        v2 = aux
    }
    console.log(`${v1}, ${v2}, ${v3}`)
});