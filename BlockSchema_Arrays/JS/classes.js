class Comments {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }
    upvote() {
        this.votesQty += 1
    }

    static mergeCommnets(first, second) {
        return `${first} + ${second}`
    }
}

const firstComment = new Comments('First')
const secondComment = new Comments('Second')

firstComment.upvote()
firstComment.upvote()
firstComment.upvote()
firstComment.upvote()
secondComment.upvote()
secondComment.upvote()

console.log(firstComment.votesQty)
console.log(secondComment.votesQty)

console.log(Comments.mergeCommnets(firstComment.text, secondComment.votesQty))

class MyArray extends Array {
    max() {
        return this.reduce((el, acc) => { if (acc < el) return acc = el })
    }
}

const array = new MyArray(1, 2, 3, 4, 5)
console.log(array)
console.log(array.max())
