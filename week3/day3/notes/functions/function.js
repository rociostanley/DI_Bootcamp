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