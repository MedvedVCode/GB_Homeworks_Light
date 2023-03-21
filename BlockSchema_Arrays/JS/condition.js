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

const month = 'a'
switch (month) {
    case 12:
        console.log('December')
        break
    case 2:
        console.log('February')
        break
    case 1:
        console.log('January')
        break
    default:
        console.log('Not a month')
}

const values = 5
console.log(values > 0 ? values + 5 : values - 5)