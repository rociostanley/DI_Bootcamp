//----------Exercise XP-----------
//---ex1---
let favoriteFood = "sushi";
let favoriteMeal = "lunch";
let foodMeal= `I eat ${favoriteFood} at every ${favoriteMeal}`;
console.log(foodMeal)

//---ex2---
let watchedSeries = ["black mirror", "money heist", "the big bang theory"];
let watchedSeriesLength = watchedSeries.length;
let myWatchedSeries = `${watchedSeries[0]}, ${watchedSeries[1]} and ${watchedSeries[2]}`;
console.log (`I watched ${watchedSeriesLength} series : ${myWatchedSeries}`)
   
   //----pt2----
watchedSeries[watchedSeries.indexOf("the big bang theory")] = "friends"
let newSeries = "Maid";
watchedSeries.push(newSeries);
newSeries = "Mindhunter";
watchedSeries.splice(0,0,newSeries);
watchedSeries.splice(0,1,);
let series = watchedSeries[1];
let letter = series[2];
console.log(letter);
console.log(watchedSeries);

// // ----ex3----
let celsiusTemperature = 25;
let fahrenheit = celsiusTemperature * 9 / 5 + 32;
console.log(fahrenheit);


// ------ex4-----
   let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: 34 + 21 = 55
    // Actual: 55

    a = 2;

    console.log(a+b) //second expression
    // Prediction: 23
    // Actual:

    console.log(3 + 4 + '5');
  // Prediction: 75 NaN= 3+4, 5 = string 
// Actual: 75


// -----ex5------
typeof(15)
// Prediction: number
// Actual: number

typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction: number
// Actual: number

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: NaN can't do subtraction of strings
// Actual: NaN

"1" + "3"
// Prediction: 13 bs its a string
// Actual: 13

"1" - "3"
// Prediction: -2
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: Nan Can't do string subtractions
// Actual: NaN

99 * "hello"
// Prediction: NaN can't do string subtractions
// Actual: NaN

1 != 1
// Prediction: false
// Actual: falso

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: false
// Actual: false



//-------ex6-----
5 + "34"
// Prediction: 534
// Actual:
console.log (5 + "34")

5 - "4"
// Prediction: 1
// Actual:
console.log (5 - "4")

10 % 5
// Prediction: 0  
// Actual: 0
console.log(10 % 5)

5 % 10
// Prediction:5
// Actual:5
console.log(5 % 10)

"Java" + "Script"
// Prediction: JavaScript
// Actual:
console.log ("Java" + "Script")

" " + " "
// Prediction:space
// Actual:
console.log(" " + " ")

" " + 0
// Prediction: space 0
// Actual:
console.log(" " + 0)

true + true
// Prediction: 2
// Actual:
console.log (true + true)

true + false
// Prediction: 1
// Actual:
console.log(true + false)

false + true
// Prediction:1
// Actual:
console.log(false + true)

false - true
// Prediction: -1
// Actual:
console.log(false - true)

!true
// Prediction: false
// Actual:
console.log(!true)

3 - 4
// Prediction: -1
// Actual:
console.log(3 - 4)

"Bob" - "bill"
// Prediction: NaN
// Actual:
console.log("Bob" - "bill")

