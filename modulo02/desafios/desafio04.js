const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.question("Qual o seu nome? ", function (name) {
    reader.question("Qual a sua idade? ", function (age) {
        reader.question("Qual o seu WhatsApp? ", function (phoneNumber) {
            console.log(`${name} tem ${age} anos e seu telefone é ${phoneNumber}.`);
            reader.close();
        });
    });
});