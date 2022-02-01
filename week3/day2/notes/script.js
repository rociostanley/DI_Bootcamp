// Exercise 1 - basic add event listener
// 1. Create two buttons - id of "red", id of "blue"
// 2. When we click on the red button -> Change the backgroundcolor of the page to red
// 3. the same for blue

// 1. retrieve ele,ents we want to work with 
// let btnBlue = document.querySelector("#btnBlue");
// let btnRed = document.querySelector("#btnRed");

// // 2. Add an event listener to each of them
// btnBlue.addEventListener("click", clickButtonBlue);
// btnRed.addEventListener("click", clickButtonRed);

// //3/ build the callback function
// function clickButtonBlue (){
// 	document.body.style.backgroundColor = "blue"
// }
// function clickButtonRed (){
// 	document.body.style.backgroundColor = "red"
// }


// Exercise 2 - using the event object
// let colors = ["blue", "yellow", "green", "pink"];
// 1. Add inside the HTML file a div of id "container" (do it directly in the HTML)
// 2. Add one button per color inside the div container (do it directly in the JS)
// 3. Each button should have an "click" event listener that
// changes the background color of the document,
// to the color of the button (do it directly in the JS


let colors = ["blue", "yellow", "green", "pink"];

let divNode = document.getElementById("container");

//add the list of colors in the DOM 
for (let elem of colors){
    let newButton = document.createElement("button"); 
    let newText = document.createTextNode(elem.toUpperCase());
    newButton.setAttribute("id", `btn${elem}`);
    newButton.addEventListener("click", changeColorOfBg);
    newButton.appendChild(newText);
    divNode.appendChild(newButton);
}

//create a callback function for the addEventListener
function changeColorOfBg (e){
    // console.log("e is : ", e);
    // console.log("e.target is : ", e.target);
    let textOfButton = e.target.textContent;
    console.log("e.target.textContent is : ", e.target.textContent);
    let textOfButtonLower = textOfButton.toLowerCase();
    document.body.style.backgroundColor = textOfButtonLower;

    // the same in one line
    // document.body.style.backgroundColor = e.target.textContent.toLowerCase();
}

// when we use addEventListener, automatically an event object is created
// event object is an JS object that contains information about the event 
// that happened
// If we want to use this useful JS OBJECT, we need to retrieve it
// by passing a parameter into the callback function

// BEHIND THE SCENES
//when the user click on a button
//the function addEventListener will be called

// function addEventListener (){
//     let eventObj = {
//         type : "eventType";
//         target : "theTargetElement";
//     }

//     callbackFunction(eventObj)
// }


// function callbackFunction (e) {
//     console.log(e.type) -> "eventType";
// }