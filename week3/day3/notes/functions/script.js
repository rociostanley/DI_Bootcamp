
// ----jsFunctions----

// setTimeout(callback function, timer)
// the callback function will be executer after the timer has ran
// runs once

setTimeout(function () {
	document.body.style.backgroundColor = "lightblue";
	alert("hey here is my newsletter")
}, 2000);

// ---------------
let btn = document.getElementById("btn");
btn.addEventListener("click", welcomeUser);

function welcomeUser(){
	setTimeout(function () {
		alert("hey here is my newsletter")
	}, 2000);
}

// -----------------

setTimeout(changeBg, 2000);
setTimeout(changeBg, 4000);

function changeBg () {
	document.body.classList.toggle("ocean")
}

// setInterval

setInterval(function () {
	console.log("hey here is my newsletter")
}, 2000);

// SET INTERVAL
let section = document.getElementById("container")
let timeId = setInterval(addDiv, 1000);
console.log(timeId); //1

function addDiv(){
	let div = document.createElement("div");
	let text = document.createTextNode("hello");
	div.appendChild(text);
	section.appendChild(div);
}

let button = document.getElementById("btn")
button.addEventListener("click", stopAnimation)

function stopAnimation () {
	clearInterval(timeId)
}

//Several Interval
let section = document.getElementById("container")
let timeId = setInterval(addDiv, 1000);
console.log(timeId); //1

let timeIdSecond = setInterval(addPara, 3000);
console.log(timeIdSecond); //2

function addDiv(){
	let div = document.createElement("div");
	let text = document.createTextNode("hello");
	div.appendChild(text);
	section.appendChild(div);
}

function addPara(){
	let p = document.createElement("p");
	let text = document.createTextNode("new paragraph");
	p.appendChild(text);
	p.style.backgroundColor = 'pink';
	section.appendChild(p);
}

let button = document.getElementById("btn")
button.addEventListener("click", stopAnimation)

function stopAnimation () {
	clearInterval(timeId)
}

//Other possibility, if we want the interval to stop after 5 sec
setTimeout(function () {
	clearInterval(timeId)
}, 5000)






