//поиск среднего арифметического массива
const numbers = [2, 5, 13, 7, 6, 4]
const size = numbers.length
let sum = 0
let avg = 0
let index = 0
while (index < size) {
    sum += numbers[index]
    index++
}
avg = sum / size
console.log(avg)
