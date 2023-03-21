let a = new Array(3, 4, 1, 2, 6, 9, 3, 7)
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i; j++) {
        if (a[j] < a[j - 1]) {
            let temp = a[j]
            a[j] = a[j - 1]
            a[j - 1] = temp
        }
    }
    console.log(a)
}
console.log(a)
a.push(true)
console.log(a)
a.pop()
console.log(a.pop(6))
console.log(a)
a.unshift('abc')
console.log(a)
let count = 0
a.forEach(el => {
    if (el % 2 === 0) {
        console.log(el + '[' + count + ']')
    }
    count++
})
console.log(a)
const a1 = a
    .map(el => el + 1)
    .filter(el => el % 2 === 0)
console.log(a1)

