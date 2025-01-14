"use strict";

const guessMessageElement = document.getElementById("guess-message");
const currentGuessElement = document.getElementById("current-guess");
const computerGuessElement = document.getElementById("computer-guess");
const guessHistoryElement = document.getElementById("guess-history");
const guessInput = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");




function userGuess() {
   
  currentGuessElement.innerText = guessInput.value;
}

submitBtn.addEventListener("click", function () {
  userGuess();
});
