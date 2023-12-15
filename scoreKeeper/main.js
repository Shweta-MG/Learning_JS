//global variables
const playerOne = document.querySelector(".playerOne");
const playerTwo = document.querySelector(".playerTwo");
const reset = document.querySelector(".Reset");
let playerOneScore = document.querySelector("#playerOneScore");
let playerTwoScore = document.querySelector("#playerTwoScore");
let playerOneInitialScore = 0;
let playerTwoInitialScore = 0;
let winningScore = 5;
let isGameOver = false;

//playerOne button clicked
const playerOneClicked = () => {
  if (!isGameOver) {
    playerOneInitialScore += 1;
    if (playerOneInitialScore === winningScore) {
      isGameOver = true;
    }
  }
  playerOneScore.textContent = playerOneInitialScore;
  console.log("playerOneClicked");
};

playerOne.addEventListener("click", playerOneClicked);

//playerTwo button clicked
const playerTwoClicked = () => {
  if (!isGameOver) {
    playerTwoInitialScore += 1;
    if (playerTwoInitialScore === winningScore) {
      isGameOver = true;
    }
  }
  playerTwoScore.textContent = playerTwoInitialScore;
  console.log("playerTwoClicked");
};
playerTwo.addEventListener("click", playerTwoClicked);

//score reset
const resetClicked = () => {
  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;
  console.log("Score is reset!!");
};

reset.addEventListener("click", resetClicked);
