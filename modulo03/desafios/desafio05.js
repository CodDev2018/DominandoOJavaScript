const rowOfPeople = [
    {
        name: 'Ana',
        age: 22,
        gender: 'F'
    },
    {
        name: 'João',
        age: 17,
        gender: 'M'
    },
    {
        name: 'José',
        age: 22,
        gender: 'M'
    },
    {
        name: 'Fernanda',
        age: 25,
        gender: 'F'
    },
    {
        name: 'Maria',
        age: 15,
        gender: 'F'
    }
 ];
 let index = 0;
 
 do {
    let person = rowOfPeople[index];
    if (person.age >= 18 && person.gender == 'F') {
        console.log('Pode entrar na balada de graça!')
    } else if (person.age >= 18) {
        console.log('Pode entrar na balada pagando...')
    } else {
        console.log('Não pode entrar na balada!')
    }
    index++;
 } while(rowOfPeople.length > index);