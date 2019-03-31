const comparacao = function (x, y) {
    console.log([x, y])
    return x == y
}
console.log(!(comparacao(10, 20) || comparacao('50', 50) &&
    comparacao(10, 20) || comparacao('50', 50)))