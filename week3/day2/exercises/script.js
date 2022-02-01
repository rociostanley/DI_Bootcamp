
//------ex1----
// let h1 = document.querySelector('h1');
// h1.addEventListener('mouseover', ()=>{
//     document.body.style.fontSize = getRandomFontSize();
// })
// let h2 = document.querySelector('h2');
// h2.addEventListener('mouseover', (e)=>{
//     fade(e.target)
// })
// console.log(h1.innerText);


// document.querySelector('article').lastElementChild.remove();

// document.querySelector('h2').addEventListener('click', (e) => {
//     e.target.style.backgroundColor = "red";
// })

// document.querySelector('h3').addEventListener('click', (e) => {
//     e.target.style.display = "none";
// })

// let button = document.createElement('button');
// button.innerText = "Click"
// button.onclick = () => {
//     document.querySelectorAll('p').forEach(e => e.style.fontWeight = "bold")
// }
// document.body.append(button)


//-----ex2----

// let forms = document.forms
// // console.log(forms)

// let fName = document.getElementById("fname")
// let lName = document.getElementById("lname")
// // console.log(fName, lName)

// let callFirstName = document.getElementsByName("fname")
// let callLasttName = document.getElementsByName("lname")
// // console.log(callFirstName, callLasttName)

// let submit = document.getElementById("submit");
// submit.addEventListener("click", firstNameClick)
// let ul = document.querySelector("ul")


// function firstNameClick(e){
//  e.preventDefault();
//  let li = document.createElement("li");
//  let li2 = document.createElement("li");
//  let text = document.createTextNode(fName.value)
//  let secondText = document.createTextNode(lName.value)
//  li.appendChild(text)
//  ul.appendChild(li)
//  li2.appendChild(secondText)
//  ul.appendChild(li2)
// }
// let firstNameValue = document.getElementsByName("fname")


//-----ex3-----
// let allBoldItems = [];
// function getBold_items(){
//     let stringArr = document.getElementsByTagName('strong');
//     console.log(stringArr);
//     for(let i = 0; i < stringArr.length; i++){
//         allBoldItems[i] = stringArr[i];
//     }
//     return allBoldItems;
// }
// getBold_items();

// function highlight(){
//     let boldArr = getBold_items();
//     for(let i = 0; i<boldArr.length; i++){
//         boldArr[i].style.color = "red";
//     }
//     return boldArr;
// }
// highlight();




//-----ex4---

// let radiusInput = document.getElementById("radius")

// let button = document.getElementById("submit")
// // button.addEventListener("click", checkValue )


// button.addEventListener("click", checkValue)


// function checkValue(e){
//  e.preventDefault()
//  let inputValue = radiusInput.value
//  // Volume = 4/3*pi*radius^3)
//  equatedValue = (4/3*Math.PI*inputValue**3)

//  let volumeBox = document.getElementById("volume")
//  volumeBox.value = equatedValue
// }