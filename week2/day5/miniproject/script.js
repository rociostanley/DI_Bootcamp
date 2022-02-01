let numberOfGuesses = 0;
function playTheGame() {
  let userNumber;

  const userWantsToPlay = confirm("would you like to play the game");

  if (userWantsToPlay === false) {
    alert("No problem, Goodbye");
  } else {
    userNumber = Number(prompt("choose a number between 0 and 10"));

    if (isNaN(userNumber)) {
      alert("Sorry, not a number. Try again");
    } else if (userNumber > 10) {
      alert("Sorry, not a good number. Try again");
    } else {
      const computerNumber = Math.round(Math.random() * 10);
      numberOfGuesses++;
      test(userNumber, computerNumber);
    }
  }
}

function test(userNumber, computerNumber){
    let numberOfGuesses = 0
    while (numberOfGuesses < 3){
        numberOfGuesses++;
        if (userNumber == computerNumber) 
            {alert("WINNER") 
        return;

            } else if (userNumber > computerNumber) {
        alert("Your number is bigger then the computer's, guess again")
        userNumber = prompt("please give a new number")
    // numberOfGuesses.push(userNumber);
} else if (userNumber < computerNumber){
    alert("Your number is smaller than the computer's guess again")
    userNumber = prompt("please give a new number")
    // numberOfGuesses.push(userNumber);
    }else if (numberOfGuesses == 3){
        alert("Sorry, you're out of guesses")
}
}
}