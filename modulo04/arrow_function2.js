const square = x => x * x

const power = (base, exponent) => {
    if (exponent > 0) {
        return base * power(base, exponent - 1)
    }
    return 1
}

console.log(square(2))
console.log(power(2, 10000))
