function fib(n) {
    let [a, b] = [0, 1];
    while (b < n) {
        console.log(b);
        [a, b] = [b, a + b];
    }
}

export default fib