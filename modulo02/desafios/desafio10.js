const readline = require('readline-sync');
//Biblioteca para calculos matemáticos
const math = require('mathjs');

const value1 = Number(readline.question("= "));
const signal = readline.question(`= ${value1} `);
const value2 = Number(readline.question(`= ${value1} ${signal} `));

console.log('= '+ math.eval(`${value1} ${signal} ${value2}`));