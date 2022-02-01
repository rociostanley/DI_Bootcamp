//-----ex1-----
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).

function infoAboutMe(){
    console.log("my name is Rocio, I am 24 years old and I love to do sports and outdoor activities :)")
}
// Call the function.
infoAboutMe();

// -----pt2----

//Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log("Your name is " + personName + " your age is " + personAge + " and your favorite color is "+ personFavoriteColor);
}
// Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");


// ---------Ex2---------
// let total = parseInt(prompt("John, please tell me the total amount of the bill"))
function calculateTip() {
    let total = parseInt(prompt("John, please tell me the total amount of the bill"))
    if (total < 50) {
        totalWithTip = (total * 1.20).toFixed(2)
        tip = (totalWithTip - total).toFixed(2)
        console.log(tip)
        console.log(totalWithTip)
    } else if (total >= 50 && total <= 200) {
        totalWithTip = (total * 1.15).toFixed(2)
        tip = (totalWithTip - total).toFixed(2)
        console.log(tip)
        console.log(totalWithTip)
    } else {
        totalWithTip = (total * 1.10).toFixed(2)
        tip = (totalWithTip - total).toFixed(2)
        console.log(tip);
        console.log(totalWithTip);
    }
}
calculateTip()

// // -------Ex3--------

// function isDivisible() {
//     let sum = 0;
//     for (i = 0; i <= 500; i++){
//         if (i % 23 == 0) {
//             console.log(i)
//             sum = sum + i
//        }
//     }
//     console.log(sum)
// }

// isDivisible()

// // ---bonus---

// function isDivisible(divisor){
//     let sum = 0;
//     for(let i=0; i < 500; i++){
//         if(i % divisor == 0){
//             console.log(i);
//             sum+= i;
//         }
//     }
//     console.log("sum: " + sum);
// }
// isDivisible(100);


// -----Ex3--------
let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

let shoppingList = ["banana", "orange", "apple"]

function myBill() {
    let sum = 0;
    for (let items of shoppingList) {
        if (stock[items] >= 1) {
            sum = sum + (prices[items])

//----Bonus---
            stock[items] --;
        }
    }
    console.log(sum)
}

myBill()
console.log(stock["banana"])
console.log(stock["orange"])

// -----Ex5---------
function changeEnough(itemPrice, amountOfChange) {
    let changeSum = (amountOfChange[0] * .25) + (amountOfChange[1] * .10) + (amountOfChange[2] * .05) + (amountOfChange[3] * .01)
    console.log(changeSum)
    console.log(itemPrice);
       if(changeSum >= itemPrice){
        return true;
    }else {
        return false;
    }
}

changeEnough(4.25, [25, 20, 5, 0])

// ---------Ex6------------
function hotelCost() {
    let nights;
    let nightsStay;
    let cost;
    do {
        nights = prompt("How many Nights would you like to stay in the hotel")
        nightsStay = Number(nights);
        cost = nights * 140;
    } while (nightsStay != nights);
    console.log(cost)
    return cost;
}


function planeRideCost() {
    let dest;
    let destCost;
    dest = prompt("Where would you like to go?").toLowerCase();
    if (dest == "paris") {
        destCost = 220;
    } else if ( dest == "london"){
        destCost = 183;
    } else {
        destCost = 300;
    }
    console.log(destCost)
    return destCost
} 


function rentalCarCost(){
    let days;
    let numberDays;
    let carCost;
    do {
        days = prompt("How many days do you want to rent a car?")
        numberDays = Number(days);
        carCost = days * 40;
        console.log(carCost)
    } while (numberDays != days);
    
    if (days >= 11) {
        carCost = carCost *.95
    } else {

    }
    console.log(carCost)
    return carCost;
}


function totalVacationCost() {
    totalCost = hotelCost() + planeRideCost() + rentalCarCost();
    return totalCost
}

console.log(totalVacationCost())