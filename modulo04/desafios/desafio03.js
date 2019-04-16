const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const menu = '\n[1] Para contar J e S ou\n[2] Para contar um caracter\n[3] Para inverter uma string\nSua opção: '

const run = () => {
    reader.question(menu, (option) => {
        switch (option) {
            case '1':
                countJS()
                break
            case '2':
                countChar()
                break
            case '3':
                inverter()
                break
            default:
                console.log('Opção inválida!')
                exit()
        }
    })
}

const exit = () => {
    reader.question('\nEntre com [S] para sair ou qualquer tecla para continuar... ', (option) => {
        if (option.toUpperCase() === 'S') {
            console.log('Até a próxima!!!')
            reader.close()
            return
        }
        run()
    })
}

const countJS = () => {
    reader.question('Entre com uma frase: ', (string) => {
        let index = 0
        let countJ = 0
        let countS = 0
        while (index < string.length) {
            let char = string.charAt(index)
            if ('J' === char.toUpperCase()) {
                countJ++
            }
            if ('S' === char.toUpperCase()) {
                countS++
            }
            index++
        }

        console.log(`Encontrado: ${countJ} "J" e ${countS} "S".`)
        exit()
    })
}

const countChar = () => {
    reader.question('Entre com uma frase: ', (string) => {
        reader.question('Entre com uma letra: ', (key) => {
            let index = 0
            let count = 0
            while (index < string.length) {
                let char = string.charAt(index)
                if (key.toUpperCase() === char.toUpperCase()) {
                    count++
                }
                index++
            }

            console.log(`Encontrado: ${count} "${key.toLocaleUpperCase()}".`)
            exit()
        })
    })
}

const inverter = () => {
    reader.question('Entre com uma frase: ', (string) => {
        let index = 0
        let inverted = ''
        while (index < string.length) {
            let char = string.charAt(index)
            inverted = char + inverted
            index++
        }

        console.log(inverted)
        exit()
    })
}

run()