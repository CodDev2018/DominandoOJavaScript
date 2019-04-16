const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
let arr = []
reader.question('Entre com uma frase: ', (string) => {
    reader.close()
    let index = 0
    while (index < string.length) {
        let chari = string.charAt(index).toLowerCase()
        if (alphabet.indexOf(chari) > -1) {
            arr.push(alphabet.indexOf(chari))
        }
        index++
    }
    console.log(arr)
})