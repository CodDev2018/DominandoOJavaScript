let x = 10
let y = 2

x += y
console.log('X += Y | X = ' + x)

x -= y
console.log('X -= Y | X = ' + x)

x *= y
console.log('X *= Y | X = ' + x)

x /= y
console.log('X /= Y | X = ' + x)

x %= y
console.log('X %= Y | X = ' + x)

for(let string = '*'; string.length < 10; string += '*') {
    console.log(string)
}