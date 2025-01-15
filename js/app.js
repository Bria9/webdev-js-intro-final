"use strict";

const guessMessageElement = document.getElementById("guess-message");
const currentGuessElement = document.getElementById("current-guess");
const computerGuessElement = document.getElementById("computer-guess");
const guessHistoryElement = document.getElementById("guess-history");
const guessInput = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");




function userGuess() {
  let userValue =  Number(guessInput.value);

  if(userValue !== '' && (isNaN(userValue) || userValue < 1 || userValue > 10)){
    document.getElementById("error").style.display = "block";
  }
  else{
    document.getElementById("error").style.display = "none";
  }
  currentGuessElement.innerText = userValue;
}


function computerGuess() {
  let randomNum = Math.floor(Math.random() * 10) + 1; 

    computerGuessElement.innerText = randomNum;

}



function render() {
    userGuess();
    computerGuess();
}

submitBtn.addEventListener("click", function () {



  
  render();
});
