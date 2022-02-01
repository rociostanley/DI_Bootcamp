// ------------ PART I ----------------

// array : list of elements
// ordered list
// indexed list
let shopping = ["shampoo", ["chocolate", "vanilla"], ["paper", "pen"]];

//change the value of an element inside the array
shopping[0] = "computer";

//object
// key : value pair
// key: value pair
// {
// 	key : value,
// 	key : value,
// 	key : value,
// }

let shoopingObj = {
	apple: 2,
	pears: 4,
	banana: 5,
	isShampooAvailable: true,
	usernameBuyer: "John",
	coupons : ["12$", "14$"]
};

console.log(shoopingObj)

// objectName.propertyName
console.log("how many apples I need to buy ", shoopingObj.apple)

// objectName["propertyName"]
console.log("how many apples I need to buy ", shoopingObj["apple"])

//value of the second coupon
console.log(shoopingObj["coupons"][1])

//change the value of a key
shoopingObj["usernameBuyer"] = "Thomas";
console.log(shoopingObj)

//add a new key:value pair
shoopingObj["lastNameBuyer"] = "Smith";
console.log(shoopingObj)



let family = {
	lastname : "Smith",
	members : 4,
	hasADog : true,
	nameOfMembers : ["Lea", "David", "Mom", "Dad"],
	friends : {
		name : "Jack",
		lastname : "ABC",
		age : 12,
		favoriteColors : ["blue", "red"],
	}
};

//1. Retrieve the number of the members of the family
console.log(`There are ${family.members} members in the family`)
console.log(`There are ${family["members"]} members in the family`)

//2. Retrieve the name of Lea
// positionLea = 3
// --> she would be the 4th member

// positionLea = 0
// --> she would be the 1th member
let positionOfLea = family["nameOfMembers"].indexOf("Lea");
console.log("index of Lea in the array : " , positionOfLea)
console.log(`The ${positionOfLea+1}# member of the family is Lea`)


// Find the age of my friend
console.log(`The age of my friend ${family.friends.name} is ${family.friends.age}`)
console.log(`The age of my friend ${family["friends"]["name"]} is ${family["friends"]["age"]}`)


//------ex1----
let userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};

// 1. Add the lastname Smith to the object
userCart["lastname"] = "Smith";
console.log(userCart)

// 2. Change the price of the pear, so it will contain the Taxes. 17%
// userCart["prices"]["pear"] = userCart["prices"]["pear"]*1.17
userCart["prices"]["pear"] *= 1.17
console.log(userCart)

// 3. Ask the user for the fruit he wants between Apple, Banana and Pear.
// Make sure that your code accept all type of strings,
// for example "Banana" or "banana" or "BaNaNA"
let answerUser = prompt("Which fruit do you want: Apple,Banana,Pear").toLowerCase()
console.log(answerUser)
// "banana" == "BaNAna" 
// false

// 4. Console.log the price for the specific fruit the user wants
// let priceForSpecificFruit = userCart.prices.answerUser
// dot notation doesn't work with variables
// line 120 not working
let priceForSpecificFruit = userCart["prices"][answerUser];
//if the answer is apple, 
// userCart.prices.answerUser
// userCart.prices.apple
//if the answer is pear, 
// userCart.prices.answerUser
// userCart.prices.pear
console.log("priceForSpecificFruit : ", priceForSpecificFruit)
console.log(`The price for a ${answerUser} is ${priceForSpecificFruit}`)


// // ------------- PART II ----------------

// //Conditionals
// //If I had money i would buy a car

//if else syntax
// if (condition is true) {
	//we do something
// else {
	//we do something else
// }

// If else

let bankAmount = 2000;
let bankAmount = 1200;

if (bankAmount > 1500){
	console.log("I'll buy a car")
} else {
	console.log("I'll buy a bicycle")
}
console.log("Out of the conditionals")

// if else

let bankAmount = 2000;
let farmAnimals = ["cow", "horse"];
let priceNewAnimal = 200;

if (bankAmount >= priceNewAnimal){
	console.log("I bought the new animal");
	bankAmount -= priceNewAnimal;
	farmAnimals.push("pig");
	console.log(bankAmount, farmAnimals)
} else {
	console.log("I couldn't buy the new animal")
}

console.log("Out of the conditionals")

//Syntax else if
if (condition is true) {
	//we do something
} else if (condition 2 is true) {
	//enter the else if, if 
	//condition 1 is false, but the condition 2 is true
	//we do something else
} else {
	//if both of the conditions above are false
	//we do something else
}


// with an else if

let bankAmount = 3000;
let farmAnimals = ["cow", "horse"];
let priceNewAnimal = 200;
let priceNewMachine = 1000;

if (bankAmount >= priceNewMachine){
	console.log("I bought the new machine");
	bankAmount -= priceNewMachine;
	console.log(bankAmount)
} else if (bankAmount >= priceNewAnimal) {
	console.log("I bought the new animal");
	bankAmount -= priceNewAnimal;
	farmAnimals.push("pig");
	console.log(bankAmount, farmAnimals)
} else {
	console.log("I couldn't buy anything")
}

console.log("Out of the conditionals")

//Syntax with several else if

if (condition 1 is true) {
	//we do something
} else if (condition 2 is true) {
	//enter the else if, only if 
	//condition 1 is false, but the condition 2 is true
	//we do something else
} else if (condition 3 is true) {
	//enter the else if, only if
	//condition 1 is false, and the condition 2 is false and the condition 3 is true
	//we do something else
} else if (condition 4 is true) {
	//enter the else if, only if
	//condition 1 is false, and the condition 2 is false, and the condition 3 is false and the condition 4 is true
	//we do something else
} else {
	//if all of the conditions above are false
	//we do something else
}

//several else if

let bankAmount = 3000;
let farmAnimals = ["cow", "horse"];
let priceNewAnimal = 200;
let priceNewMachine = 1000;
let priceCandy = 2;

if (bankAmount >= priceNewMachine){
	console.log("I bought the new machine");
	bankAmount -= priceNewMachine;
	console.log(bankAmount)
} else if (bankAmount >= priceNewAnimal) {
	console.log("I bought the new animal");
	bankAmount -= priceNewAnimal;
	farmAnimals.push("pig");
	console.log(bankAmount, farmAnimals)
} else if (bankAmount >= priceCandy) {
	console.log("I bought the new candy");
	bankAmount -= priceCandy;
	console.log(bankAmount)
} else {
	console.log("I couldn't buy anything")
}

console.log("Out of the conditionals")


// AND and OR

//AND
let johnAge = 14;
let johnHeight = 1.60

let minAge = 12;
let minHeight = 1.40;

// && 
// both conditions need to be true
if (johnAge >= minAge && johnHeight >= minHeight) {
	console.log("John will go to the rollercoaster")
} else {
	console.log("John will stay at home")
}

// OR
let johnAge = 10;
let johnHeight = 1.60

let minAge = 12;
let minHeight = 1.40;

// && 
// at least 1 condition needs to be true
if (johnAge >= minAge || johnHeight >= minHeight) {
	console.log("John will go to the rollercoaster")
} else {
	console.log("John will stay at home")
}


//Combining
let johnAge = 10;
let johnHeight = 1.60

let minAge = 12;
let minHeight = 1.40;

let lookOlder = true

//combine
if ((johnAge >= minAge && johnHeight >= minHeight) || lookOlder)  {
	console.log("John will go to the rollercoaster")
} else {
	console.log("John will stay at home")
}


//boolean
let johnTall = true;

if (johnTall) {
	console.log("He will enter the rollercoaster")
} else if (!johnTall){
	console.log("He will NOT enter the rollercoaster")

//--------ex2-----
let userCart = {
	username : "Johnny",
	password: 12345,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};
let userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};

// 1. If the user is SignedIn - show him his name and password
// 2. If not - alert the user "you need to sign in"
if (userCart["isUserSignedIn"]){
	alert(`Your username is ${userCart["username"]} and your password is ${userCart["password"]} `)
} else {
	alert("You need to sign in")
}

// 3rd exercise
//  1. If the user is Johnny AND his password is 12345 - alert him "You are signed in"
//  2. If the user is not Johnny OR his password is not 12345 - alert him "One credential is false"
//  3. Else, alert the user "you need to sign in"

if (userCart["username"] == "Johnny" && userCart["password"] == 12345 ) {
	console.log("You are signed in")
} else if (userCart["username"] == "Johnny" || userCart["password"] == 12345) {
	console.log("One credential is false")
} else {
	console.log("you need to sign in")
}