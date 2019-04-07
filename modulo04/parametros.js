const square = function (x) {
    x *= x
    return x
}

const power = function (base, exponent) {
    let result = 1
    for (let count = 0; count < exponent; count++) {
        result *= base
    }
    return result
}

console.log(square(2))
console.log(power(2, 10))
