// ------ LESSON ---------

//NOT GOING TO USE
function inform(){
    confirm("Do you want to play the game")
}


//NOT GOING TO USE
//doesn't work when the same event is several times on the same element
let button = document.getElementById("btn");

button.onclick = function() {
    confirm("Do you want to play the game");
}

button.onclick = function() {
    console.log("Hello")
}


// -------------AddEventListener------------
// 1. retrieve the element
let buttonNode = document.getElementById("btnNode");

// //2. Add the event listener method
// // element.addEventListener(click,callback function)

// //anonymous function
// // buttonNode.addEventListener(
// //   "click", 
// //   function () {
// //       console.log("you clicked")
// //   }
// // )

// // to call the callback function, we write the function without parentheses
// // -> meaning we are calling the reference of the function
buttonNode.addEventListener("click", informUser)

function informUser () {
    console.log("you clicked")
}


// // Buttons
let btnBlue = document.getElementById("btnBlue");
let btnRed = document.getElementById("btnRed");

// //an even is FIRED
btnRed.addEventListener("click", clickButton);
btnRed.addEventListener("click", welcomeUser);

function clickButton(){
    console.log("You clicked the RED button")
}

function welcomeUser(){
    console.log("Hello User")
}

btnBlue.addEventListener("mouseover", hoverButton);

function hoverButton(){
    console.log("You hovered on the BLUE button")
}

// Buttons - several events on the same element
let btnYellow = document.getElementById("btnYellow");
let btnGreen = document.getElementById("btnGreen");

btnYellow.addEventListener("click", clickButtonSecond);
btnYellow.addEventListener("mouseover", hoverButtonSecond);

btnGreen.addEventListener("mouseover", hoverButtonSecond);

function clickButtonSecond(){
    console.log("You clicked the YELLOW button")
}

function hoverButtonSecond(){
    console.log("You hovered on the button")
}

//Exercise 

//NOT EFFICIENT WITHOUT EVENTS

let btnPink = document.getElementById("btnPink");
let btnOrange = document.getElementById("btnOrange");

btnPink.addEventListener("click", clickButtonPink);
btnOrange.addEventListener("click", clickButtonOrange);

function clickButtonPink () {
    document.body.style.backgroundColor = "pink";
}

function clickButtonOrange () {
    document.body.style.backgroundColor = "orange";


//Exercise with event
let btnBlue = document.getElementById("btnBlue");
let btnRed = document.getElementById("btnRed");

btnBlue.addEventListener("click", clickButtonEvent);
btnRed.addEventListener("click", clickButtonEvent);

//My point: I want the function clickButtonEvent to be reusable
//automatically when we use the addEventListener, an event object is passed
//to the callback function

function clickButtonEvent (event) {
    console.log("event is : ", event)
    console.log("event target is : ", event.target); //event.target is the button
    console.log("event id is : ", event.target.id);
    console.log("event textContent is : ", event.target.textContent);
    document.body.style.backgroundColor = event.target.textContent.toLowerCase();
}
}