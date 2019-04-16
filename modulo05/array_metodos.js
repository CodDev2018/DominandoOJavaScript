const nomes = ['Paulo', 'Samuel', 'Valentina', 'Geovana']

nomes.push('José')

console.log(nomes)

nomes.pop()

console.log(nomes)

nomes.unshift('José')

console.log(nomes)

nomes.shift('José')

console.log(nomes)

console.log(nomes.indexOf('Valentina'))

let novoArray = nomes.join()

console.log(novoArray)

novoArray = nomes.concat('teste', 1, 12)

console.log(novoArray)

console.log(nomes.slice(2))