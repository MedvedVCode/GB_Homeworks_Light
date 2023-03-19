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