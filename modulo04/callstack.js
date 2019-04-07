// function greet(who) {
//     console.log(`Hello ${who}`)
// }

// greet('João')

// console.log('Bye!')

function chicken() {
    return egg()
}

function egg() {
    return chicken()
}

console.log(chicken() + " nasceu primeiro.")