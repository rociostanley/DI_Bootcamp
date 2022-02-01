// ------- Functions 

// DECLARING A FUNCTION
function makeChocolate (){
	console.log("chocolate bar")
}

// // INVOKING/CALLING A FUNCTION
makeChocolate()


//DECLARE A FUNCTION
// between the () we pass parameters

function makeChocolateBar (numberCacaoBeans){
	console.log(`chocolate bar made with ${numberCacaoBeans} cacao beans`)
}

// // INVOKING/CALLING A FUNCTION
// //between the () we pass an argument
makeChocolateBar(10)


//DECLARE THE FUNCTION WITH 2 PARAMETERS
function makeChocolateBarType (numberCacaoBeans, typeOfChocolate){
	console.log(`${typeOfChocolate} chocolate bar made with ${numberCacaoBeans} cacao beans`)
}

// INVOKING/CALLING A FUNCTION
//between the () we pass an argument
makeChocolateBarType(10, "white");
makeChocolateBarType(25, "milk");
makeChocolateBarType(60, "dark");
//importance of the order
makeChocolateBarType("pink", 2);


// default parameter
function makeChocolateBarWorker (numberCacaoBeans, typeOfChocolate, workerName="the manager"){
	console.log(`${typeOfChocolate} chocolate bar made 
	with ${numberCacaoBeans} cacao beans by ${workerName}`)
}

// INVOKING/CALLING A FUNCTION
//between the () we pass an argument
makeChocolateBarWorker(10, "white", "John");
makeChocolateBarWorker(25, "milk");

// // ----- Return---- 

function addition (a, b) {
	let sum = a + b;
	//1st step, return the variable
	return sum;
}

addition(2,3);
addition(4,7);

// 2nd step: I call the function
let newSum = addition(2,3)*10
// the same as : let newSum = the value of the sum variable * 10
// the same as : let newSum = 5 * 10

//returning several values
function additionSecond (a, b) {
	let normalSum = a + b;
	let superSum = (a + b)*2;
	return [normalSum, superSum];
}

console.log(additionSecond(2,3));

let newSumSecond = additionSecond(2,3)[0]*10

// return no value

function addition (a, b) {
	let normalSum = a + b;
	console.log("normalSum is :", normalSum)
	return;
	console.log("hello")
	// WONT BE ACCESSED console.log("hello")
}

addition(2,3);

// Example

function calculator (a, b, operator) {
	let resultNumber;
	if(operator == "+") {
		resultNumber = a + b;
	} else if (operator == "-") {
		resultNumber = a - b;
	} else {
		resultNumber = "I don't know"
	}

	return resultNumber;
}

// // console.log(resultNumber); //undefined
console.log(calculator(2,3, "-"))

let numberWithTaxes = calculator(2,3, "+") * 1.17;












