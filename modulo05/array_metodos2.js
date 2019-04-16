const nomes = ['Paulo', 'Samuel', 'Valentina', 'Geovana']

//nomes.forEach(nome => console.log(nome))

//var result = nomes.find(nome => nome === 'Valentina')

//var result = nomes.filter(nome => nome.search('o') > 0)

// var result = nomes.map((nome, index) => {
//     return { 
//         index: index,
//         nome: nome
//     }
// })

// var result = nomes.reduce(
//     (acumulador, nome) => acumulador + nome.length, 0)


// var result = nomes.sort((nomeA, nomeB) => {
//     ultimaA = nomeA[nomeA.length - 1]
//     ultimaB = nomeB[nomeB.length - 1]
//     if (ultimaA == ultimaB) {
//         return 0
//     }

//     if (ultimaA < ultimaB) {
//         return -1
//     }

//     if (ultimaA > ultimaB) {
//         return 1
//     }
// })

//var result = nomes.every(nome => nome.search('a') >= 0)

var result = nomes.some(nome => nome.search('S') >= 0)

console.log(result)