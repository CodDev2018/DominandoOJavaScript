const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const regularExpression = /(\d+\s*(\*|\/|\+|\-)\s*\d*)/
const regex = new RegExp(regularExpression);

const readExpression = (callback) => {
    reader.question("Entre com a expressão aritimética: ", function (expression) {
        reader.close()
        if (!expression.match(regex)) {
            console.log("A expressão aritimética não é válida!");
            return;
        }
    
        let [value1, operator, value2] = expression.split(' ')
        value1 = Number(value1)
        value2 = Number(value2)
        
        callback(expression, value1, operator, value2)
        
    })
}

const calc = (expression, value1, operator, value2) => {
    let result = null
    switch (operator) {
        case '+':
            result = value1 + value2
            break;
        case '-':
            result = value1 - value2
            break;
        case '*':
            result = value1 * value2
            break;
        case '/':
            if (value2 === 0) {
                console.log("Impossivel dividir por 0.")
                return
            }
            result = value1 / value2
            break;
        default:
            console.log("Isso nunca será execultado! :D")
    }

    console.log(`${expression} = ${result}`)
}

readExpression(calc)