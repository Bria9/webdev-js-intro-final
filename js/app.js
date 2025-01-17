"use strict";

const guessMessageElement = document.getElementById("guess-message");
const currentGuessElement = document.getElementById("current-guess");
const computerGuessElement = document.getElementById("computer-guess");
const guessHistoryElement = document.getElementById("guess-history");
const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");

const guessInput = document.getElementById("guess-input");
let randomNum;
let attempt = 0;




function userGuess() {
 let userguess = Number(guessInput.value)
 currentGuessElement.innerText = userguess;
return userguess;
 
}



function computerGuess() {
   randomNum = Math.floor(Math.random() * 10) + 1; 

  //  computerGuessElement.innerText = randomNum;
   return randomNum;

}
computerGuess();



function guessMessage(){
  let userValue = userGuess();
  

      if(userValue === randomNum){
      guessMessageElement.innerText = "You win! 🎉";
      computerGuessElement.innerText = randomNum;
      submitBtn.disabled = true;
      restartBtn.disabled = false;

      }
      else if (userValue < randomNum){
        guessMessageElement.innerText = "Number is too low";
      }
      else if (userValue > randomNum){
        guessMessageElement.innerText = "Number is too high";
      }
  
}





function render() {
  attempt++;
  
  if(attempt > 2){
    guessMessageElement.innerText = "Sorry, you loose...";
    computerGuessElement.innerText = randomNum;
    submitBtn.disabled = true;
    restartBtn.disabled = false;}
    else{ guessMessage(); }


  console.log(userGuess());
   console.log(randomNum);
   console.log(`this is attempt: ${attempt}`);
    
   
}

submitBtn.addEventListener("click", function () {
 
  render();

});
restartBtn.addEventListener("click", function () {
 
  submitBtn.disabled = false;
  restartBtn.disabled = true;
  guessMessageElement.innerText = "";
  guessInput.value = "";
  randomNum = 0;
  attempt = 0;
  computerGuess();

});

