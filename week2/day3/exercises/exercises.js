// -----ExercisesXP------

//-----ex1----
let people = ["Greg", "Mary", "Devon", "James"]

// 1. Write code to remove “Greg” from the people array.
people.shift ();
console.log (people);

// 2. Write code to replace “James” to “Jason”.
people.splice(2,1,"Jason");
console.log(people);

// 3. Write code to add your name to the end of the people array.
people.push("Rocio");
console.log(people)

// 4. Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log (people.indexOf ("Mary"))

// 5. Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
console.log (people.slice(1,3));

// 6. Write code that gives the index of “Foo”. Why does it return -1 ?
console.log (people.indexOf ("Foo"));
// returns -1 because "Foo" is not part of the array

// 7.Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
let last = people[people.length - 1];
console.log(last);


// -----part2-----
// 1. Using a loop, iterate through the people array and console.log each person.
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// // 2. Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
for (let i = 0; i < people.length; i++) {
    if(people[i] != "Jason") {
        console.log(people[i]);
    }else {
        break;
    }
}

// -----ex2-----
let colors = ["pink", "blue", "green", "yellow", "orange"];

for ( counter = 0; counter < colors.length; counter ++) {
    console.log(`My #${(counter +1)} choice is ${colors[counter]}`);
}


// // ------ex3-----

// let number = prompt ("Please enter a number")
// console.log(typeof number)

// while (number < 10){
//     number = prompt("choose another number: ");
// }
// ------ex4----

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}
console.log (building)
// 2. Console.log the number of floors in the building.
console.log (building["numberOfFloors"])
// 3. Console.log how many apartments are on the floors 1 and 3.
console.log(building["numberOfAptByFloor"]["firstFloor"] + building["numberOfAptByFloor"]["thirdFloor"]);
//  4. Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building["nameOfTenants"][1]+ " " + building["numberOfRoomsAndRent"]["dan"][0]);

// 5. Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let sumSarahDavid = building["numberOfRoomsAndRent"]["sarah"][1] + building["numberOfRoomsAndRent"]["david"][1];
console.log(sumSarahDavid);
let sumDan = building["numberOfRoomsAndRent"]["dan"][1];
console.log(sumDan);
while (sumSarahDavid > sumDan){
    sumDan+=1200;
}
console.log(sumDan);


// ------ex5-----

let family = {
        Clemente : 58,
        Flor : 60,
        Federico : 27,
        Alejandro : 26,
        Rocio : 24,
    
}

console.log(Object.keys(family))
console.log(Object.values(family))

//------ex6-----
let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

for (const [key, value] of Object.entries(details)) {
    console.log(`${key} ${value}`);
}

// ------ex7-----
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
let letters = names.map(x => x[0]);
console.log(letters.sort())



