"use strict";

// Define Variables

const guessMessageElement = document.getElementById("guess-message");
const currentGuessElement = document.getElementById("current-guess");
const computerGuessElement = document.getElementById("computer-guess");
const guessHistoryElement = document.getElementById("guess-history");
const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");
const guessInput = document.getElementById("guess-input");
let randomNum;
let attempt = 0;
let guessHistory = [];


//convert number input datatype string to number value

function userGuess() {
  let userguess = Number(guessInput.value);
  currentGuessElement.innerText = userguess;
  return userguess;
}

//generate random number between 1-10

function computerGuess() {
  randomNum = Math.floor(Math.random() * 10) + 1;

  return randomNum;
}
computerGuess();

function guessMessage() {
  let userValue = userGuess();

  if (userValue === randomNum) {
    guessMessageElement.innerText = "You win! 🎉";
    computerGuessElement.innerText = randomNum;
    submitBtn.disabled = true;
    restartBtn.disabled = false;
  } else if (userValue < randomNum) {
    guessMessageElement.innerText = "Number is too low";
  } else if (userValue > randomNum) {
    guessMessageElement.innerText = "Number is too high";
  }
}

//checks number of attempts & stores input history in array
//stores guess history in array
// execute game logic/render

function render() {
  attempt++;

  let userValue = userGuess();
  guessHistory.push(userValue);

  if (attempt > 2) {
    guessMessageElement.innerText = "👾 Game Over 👾 ";
    computerGuessElement.innerText = randomNum;
    submitBtn.disabled = true;
    restartBtn.disabled = false;
  } else {
    guessMessage();
  }
  guessHistoryElement.innerText = guessHistory.join(", ");


  // Console Info

  console.log(`User Guess: ${userGuess()}`);
  console.log(`Computer Guess: ${randomNum}`);
  console.log(`this is attempt: ${attempt}`);
  console.log(guessHistory);
  
}

submitBtn.addEventListener("click", function () {
  render();
});

//Enable Submit button and disable Restart button on click
// Erase content inside elements rendered to page.
//Erase values of guess input & computer guess.
//Erase attempts
//Erase guess history array
//Generate computer guess for new game

restartBtn.addEventListener("click", function () {
  submitBtn.disabled = false;
  restartBtn.disabled = true;
  guessMessageElement.innerText = "";
  computerGuessElement.innerText = "";
  currentGuessElement.innerText = "";
  guessHistoryElement.innerText = "";
  guessInput.value = "";
  randomNum = 0;
  attempt = 0;
  guessHistory = [];
  computerGuess();
});