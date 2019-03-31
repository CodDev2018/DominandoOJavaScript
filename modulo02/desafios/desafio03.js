const readline = require('readline-sync');


const name = readline.question("Qual o seu nome? ");
const age = readline.question("Qual a sua idade? ");
const phoneNumber = readline.question("Qual o seu WhatsApp? ");

console.log(`${name} tem ${age} anos e seu telefone é ${phoneNumber}.`);
