const readline = require('readline')

const reader = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

reader.question("Qual sua linguagem de programação? ", function(linguagem) {
   
    switch(linguagem) {
        case "Java":
            console.log("Muito pesado!");
            break;
        case "PHP":
            console.log("Altas gambiarras!");
            break;
        case "Java":
            console.log("Cópia do Java!");
            break;
        case "JavaScript":
            console.log("Mandou Bem!");
            break;
        default: 
            console.log("Deve ser modinha");
    }
    reader.close()
});
