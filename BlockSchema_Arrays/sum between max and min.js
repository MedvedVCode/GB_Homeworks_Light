const a = new Array(3, 4, 1, 2, 6, 7, 3, 9)
let min = a[0]
let max = a[0]
let posMin = 0
let posMax = 0
for (let i = 0; i < a.length; i++) {
    if (a[i] < min) {
        min = a[i]
        posMin = i
    }
    if (a[i] > max) {
        max = a[i]
        posMax = i
    }
}
console.log('max = ' + max + ' and posMax = ' + posMax)
console.log('min = ' + min + ' and posMin = ' + posMin)
let from, to
if (posMin > posMax) {
    from = posMax
    to = posMin
} else {
    from = posMin
    to = posMax
}
let sum = 0
for (let i = from + 1; i < to; i++) {
    sum += a[i]
}
console.log('sum = ' + sum)
