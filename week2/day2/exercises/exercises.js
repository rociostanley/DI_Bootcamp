//------Ex1-------

let x = 5;
let y = 2;


if(x > y){
    alert("x is the biggest number");
}else {
    alert("y is the biggest number");
}

//------Ex2-------

let newDog = "Chihuahua";
let length = newDog.length;
console.log(length);
console.log(newDog.toLowerCase());
console.log(newDog.toUpperCase());

if(newDog == "Chihuahua"){
    console.log("I love Chihuahuas, it’s my favorite dog breed")
}
else {
    console.log("I dont care, I prefer cats")
}

//------Ex3-------

let number = prompt("choose a number ");
if(number % 2 == 0){
    alert("x is an even number");
}else {
    alert("x is an odd number");
}

//------Ex4-------

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
if(users.length == 0){
    alert("no one is online");
}else if(users.length == 1){
    alert(users[0] + " is online");
}else if(users.length == 2){
    alert(users[0] +","+ users[1] + " are online");
}else if(users.length > 2){
    alert(users[0] +","+ users[1] + " and " + (users.length - 2) + " more are online");
}
