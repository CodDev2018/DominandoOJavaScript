const nomes = ['Paulo', 'Samuel', 'Valentina', 'Geovana']

let index = 0
console.log("Percorrendo array com while")
while(index < nomes.length) {
    console.log(nomes[index])
    index++
}

index = 0

console.log("Percorrendo array com do ... while")
do {
    console.log(nomes[index])
    index++
} while(index < nomes.length)