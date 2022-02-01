// //------Ex1------

let divName = document.getElementById("navBar")
divName.setAttribute("id", "socialNetworkNavigation")
console.log(divName)



let newLi = document.createElement("li")
console.log(newLi)

let newNode = document.createTextNode("Logout")
console.log(newNode)
newLi.append(newNode);

document.getElementById("socialNetworkNavigation").children[0].appendChild(newLi)


// //-----Ex2-------

// let firstUl = document.getElementsByTagName("ul")[0];
// let secondLi = firstUl.lastElementChild;
// secondLi.textContent = "Richard";

// let uls = document.getElementsByTagName("ul");

// for (i=0; i<uls.length; i++) {
// 	uls[i].firstElementChild.textContent = "Rocio";
// }

// for (i=0; i<uls.length; i++) {
// 	let newLi = document.createElement("li");
// 	let Text = document.createTextNode("Hey students");
// 	newLi.appendChild(Text);
// 	uls[i].appendChild(newLi);
// }

// secondLi = uls[1];
// secondLi.removeChild(secondLi.children[1]);

// //---bonus--

// for (i=0; i<uls.length; i++) {
// 	uls[i].classList.add("student_list");
// }

// firstUl.classList.add("university", "attendance");


// // -----Ex3----

// let div = document.getElementsByTagName("div")[0];
// div.style.backgroundColor="lightblue";

// let firstUser = document.getElementsByTagName("li")[0];
// firstUser.style.visibility="hidden";

// let secondUser = document.getElementsByTagName("li")[1];
// secondUser.style.border="2px solid pink"

// let body = document.getElementsByTagName("body")[0];
// body.style.fontSize="26px";

// //---bonus--
// if (div.style.backgroundColor == "lightblue") {
// 	alert(`Hello ${firstUser.textContent} and ${secondUser.textContent}`);
// }