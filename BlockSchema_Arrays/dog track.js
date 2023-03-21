// какое расстояние пройдет собака, бегая от одного друга к другому
let distanceBetweenFriends = 1000
let dogRunsFromFriend = 1
const friendOneSpeed = 1
const friendSecondSpeed = 2
const dogSpeed = 5
let count = 0
let dogRunTime = 0
let dogTrack = 0;
while (distanceBetweenFriends > 10) {
    if (dogRunsFromFriend === 1) {
        dogRunTime = distanceBetweenFriends / (dogSpeed + friendSecondSpeed)
        dogTrack += distanceBetweenFriends - dogRunTime*friendSecondSpeed
        dogRunsFromFriend = 2
    } else {
        dogRunTime = distanceBetweenFriends / (dogSpeed + friendOneSpeed)
        dogTrack += distanceBetweenFriends - dogRunTime*friendOneSpeed
        dogRunsFromFriend = 1
    }
    distanceBetweenFriends -= dogRunTime * (friendSecondSpeed + friendSecondSpeed)
    count++
}
console.log(count)
console.log(dogTrack)

