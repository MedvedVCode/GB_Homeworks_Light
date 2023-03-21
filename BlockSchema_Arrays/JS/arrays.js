const array = ['one', 'two', 'three', 'four', 'five']
array.forEach(
    (el, i) => {
        console.log(`Element '${el}' has number ${i}`)
    }
)

const myName = 'Denya'
for (const char of myName) {
    console.log(`Letter ${char} has Ascii number ${char.charCodeAt()}`)
}