var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");


var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// array to create blanksa and letters
var letterInChosenWord = [];
var blanksLetters = [];

// array for the user
var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];

// the init function is called when the page load 
function init() {
    getWins();
    getLosses();
}

// the start winGame  function is called when the staart button is clicked 
function startGmame() {
    isWin = false;
    timerCount = 10;
    // prevent start button from being clicked when round is in progress
    renderBlancks()
    startTimer()
}
//  the winGame function is called whe the win condition is met
function winGame() {
    wordBlank.textContent = "YOU WON!!";
    winCounter++
    startButton.disabled = false;
    setWins()

}

//  the losGame function is called when timer reaches 0
function loseGame() {
    wordBlank.textContent = "GAME OVER";
    loseCounter++
    startButton.disabled = false;
    setLoses()
}

//  function is called starts and stops the timer and the triggers  winGame ()and loseGame()
function startTimer(){
    // set timer
    timer =setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            // test win condition is met
        if (isWin && timerCount > 0)  {
                // clear interval and stop timer 
                clearInterval(timer);
                winGame();
            }
        }
        // test if time has run 
        if (timerCount === 0) {
            // clear interl
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}
