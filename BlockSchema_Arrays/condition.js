const sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of arguments is not a number!'
    }
    if (a < 0 || b < 0) {
        return 'One of numbers are less than 0!'
    }
    return a + b
}

console.log(sumPositiveNumbers('a', 10))
console.log(sumPositiveNumbers(-1, 10))
console.log(sumPositiveNumbers(15, 10))
