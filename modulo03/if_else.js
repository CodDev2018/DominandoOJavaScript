const person1 = {
    name: 'Ana',
    age: 20,
    gender: 'F'
}

const person2 = {
    name: 'João',
    age: 20,
    gender: 'M'
}

const person3 = {
    name: 'maria',
    age: 16,
    gender: 'F'
}

const person = person3

if (person.age >= 18 && person.gender == 'F') {
    console.log('Pode entrar na balada de graça!')
} else if (person.age >= 18) {
    console.log('Pode entrar na balada pagando...')
} else {
    console.log('Não pode entrar na balada!')
}