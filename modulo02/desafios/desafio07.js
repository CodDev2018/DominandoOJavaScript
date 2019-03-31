const readline = require('readline-sync');

const value1 = Number(readline.question("= "));
const value2 = Number(readline.question(`${value1} * `));

console.log(`= `+(value1 * value2))