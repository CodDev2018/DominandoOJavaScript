const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question('Qua o seu nome? ', function (name) {
    console.log(`Seja bem vindo ${name}!!`);
    reader.question('Qua a sua idade? ', function (age) {
        console.log(`você tem ${age} anos!!`);
        reader.close();
    });
});