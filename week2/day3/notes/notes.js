console.log("hello")
console.log("hello")
console.log("hello")

// for (statement 1; statement 2; statement 3) {
//       // code block to be executed
// }

// statement 1: when do I start the loop - starting point
// statement 2: condition - while the condition is true,
// run the loop
// statement 3: how we should increase the counter


for (let counter = 0; counter <= 2; counter++) {
    console.log("hello");
}

// 1st step
//  counter = 0
//  0 <= 2 -> true
//  console.log("hello")
//  counter ++ -> counter = 1

// 2nd step
//  counter = 1
//  1 <= 2 -> true
//  console.log("hello")
//  counter ++ -> counter = 2

// 3rd step
//  counter = 2
//  2 <= 2 -> true
//  console.log("hello")
//  counter ++ -> counter = 3

// 4th step
//  counter = 3
//  3 <= 2 -> false 
//  STOP THE LOOP

//same
for (let counter = 1; counter <= 3; counter++) {
    console.log("hello");
}

//same
for (let counter = 1; counter < 4; counter++) {
    console.log("hello");
}

for (let counter = 1; counter < 11; counter += 2) {
    console.log("counter", counter)
    console.log("hello");
}

// 1st step
//  counter = 1
//  1 < 11 -> true
//  console.log(counter) => 1
//  console.log("hello")
//  counter+=2 -> counter = 3

// 2nd step
//  counter = 3
//  3 < 11 -> true
//  console.log(counter) => 3
//  console.log("hello")
//  counter+=2 -> counter = 5

// 3rd step
//  counter = 2
//  2 <= 2 -> true
//  console.log("hello")
//  counter ++ -> counter = 3


//------ex1------

for (let counter = 0; counter <= 15; counter++){
    if(counter % 2 == 0){
        console.log(`The number ${counter} is even`);
    } else {
        console.log(`The number ${counter} is odd`)
    }
}

// Loops and arrays

let colors = ["blue", "yellow", "red"];

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

// -> console.log(colors[n])

for (let n = 0; n <= 2; n++){
    console.log("n is : ", n)
    console.log("the color is ", colors[n])
}

colors.push("pink")
console.log(colors)

// for (let n = 0; n <= 2; n++){
//  console.log("n is : ", n)
//  console.log("the color is ", colors[n])
// }

//to make the loop dynamic - but the result is not good 
for (let n = 0; n <= colors.length ; n++){
    console.log("n is : ", n)
    console.log("the color is ", colors[n])
}


// 1st step
//  n = 0;
//  0 <= 4 -> true
//  console.log(colors[0]) -> blue
//  n++ -> 1

// 2nd step
//  n = 1;
//  1 <= 4 -> true
//  console.log(colors[1]) -> red
//  n++ -> 2

// 1st step
//  n = 2;
//  2 <= 4 -> true
//  console.log(colors[2]) -> yellow
//  n++ -> 3

// 1st step
//  n = 3;
//  3 <= 4 -> true
//  console.log(colors[3]) -> pink
//  n++ -> 4

// 1st step
//  n = 4;
//  4 <= 4 -> true
//  console.log(colors[4]) -> UNDEFINED
//  n++ -> 5

// We have 2 possibilities

//same
for (let n = 0; n < colors.length ; n++){
    console.log("n is : ", n)
    console.log("the color is ", colors[n])
}

// //same
for (let n = 0; n <= colors.length-1 ; n++){
    console.log("n is : ", n)
    console.log("the color is ", colors[n])
}

//Example
let fruits = ["apple", "banana", "pear", "melon"];

// length -> 4

//if we write it like this, we have a problem
for (let n = 0; n <= fruits.length ; n++){
    console.log("the color is ", fruits[n])
}

// fruits[0]
// fruits[1]
// fruits[2]
// fruits[3]
// fruits[4] -> undefined

// so we need to change it to:

for (let n = 0; n <= fruits.length -1 ; n++){
    console.log("the FRUIT is ", fruits[n])
}

// or 

for (let n = 0; n < fruits.length ; n++){
    console.log("the FRUIT is ", fruits[n])
}


// 1. Change in the array, apple to apples
// fruits[0] = "apples";
// fruits[0] = fruits[0]+"s";
// fruits[0] += "s"

// -> the result
// let fruits = ["apples", "bananas", "pears", "melons"];

for (let n = 0; n <= colors.length-1; n ++){
    fruits[n] = fruits[n]+"s";
}

console.log(fruits)

// 1st loop
// n=0
// fruits[0] = fruits[0]+"s";

// 2nd loop
// n=1
// fruits[1] = fruits[1]+"s";

//----exercise------

// let users = [
//     {
//         username:"John",
//         lastName : "Smith"
//     },
//     {
//         username:"Tom",
//         lastName : "Smith"
//     },
//     {
//         username:"Lea",
//         lastName : "Smith"
//     }
// ];

 1. console.log the username of each user
for (let element of users){
    console.log (element) //element retrieved each pbject inside the 
    console.log (element["username"])
}
 for (let )




