const nomes = ['Paulo', 'Samuel', 'Valentina', 'Geovana']

console.log("Percorre array utilizando FOR")
for(let index = 0; index < nomes.length; index++) {
    console.log(nomes[index])
}


console.log("Percorre array utilizando FOR ... OF")
for (let nome of nomes) {
    console.log(nome)
}