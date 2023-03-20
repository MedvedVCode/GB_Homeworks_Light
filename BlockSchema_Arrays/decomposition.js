const userProfile = {
    name: 'Denya',
    commentsQty: 23,
    hasSigned: false
}

const userInfo = ({ name, commentsQty }) => {
    if (!commentsQty) {
        return `User ${name} has no comments`
    } else {
        return `User ${name} has ${commentsQty} comments`
    }
}

console.log(userInfo(userProfile))

const userProfile01 = {
    name: 'Anya',
    commentsQty: 0,
    hasSigned: false
}
console.log(userInfo(userProfile01))
