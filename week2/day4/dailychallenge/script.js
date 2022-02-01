let words = prompt(" enter 3 words seperated by commas")
let nameArr = words.split(' ')
let word = "";
let topBottom;
function longestStringForLoop(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (word.length < arr[i].length) {
            word = arr[i];
        }
    }
    topBottom = word.length +2
    console.log("*".repeat(topBottom +2))
    frame()
    console.log("*".repeat(topBottom +2))
}

longestStringForLoop(nameArr)
function frame() {
   
    for (i = 0; i < nameArr.length; i++) {
        console.log(`* ${nameArr[i]}`+ " ".repeat((topBottom-nameArr[i].length)-1) + "*")
    }
}