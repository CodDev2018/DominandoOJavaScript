const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lerAposta = (callback) => {
    reader.question("Entre com 0 para PAR e 1 para Impar e um número inteiro de 1 até 5: ", function (numbers) {
        reader.close()
        numbers = numbers.split(' ')
        let [aposta, valor] = numbers
        aposta = parseInt(aposta)
        valor = parseInt(valor)
        callback(aposta, valor)
    })
}

const calcularVencedor = (aposta, valor) => {
    let valorComputador = Math.floor(Math.random() * 5) + 1

    let total = valor + valorComputador

    let resultado = parseInt(total % 2)

    if (resultado === aposta) {
        console.log("Você ganhou!")
    } else {
        console.log("Você perdeu.")
    }

    // log(aposta, valor, valorComputador, total, resultado)
}

const log = (aposta, valor, valorComputador, total, resultado) => {
    console.log({
        "Sua aposta": aposta == 0 ? "PAR" : "IMPAR",
        "Seu Valor": valor,
        "Valor Computador": valorComputador,
        "Soma total": total,
        "Resultado": resultado == 0 ? 'PAR' : 'IMPAR'
    })
}

lerAposta(calcularVencedor)