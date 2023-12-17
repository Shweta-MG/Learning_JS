//global variables
const playerOne = document.querySelector(".playerOne");
const playerTwo = document.querySelector(".playerTwo");
const reset = document.querySelector(".Reset");
let playerOneScore = document.querySelector("#playerOneScore");
let playerTwoScore = document.querySelector("#playerTwoScore");
let scoreSelection = document.querySelector("#scoreSelection");
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
        playerOneScore.classList.add('winner')
        playerTwoScore.classList.add('loser')
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
        playerOneScore.classList.add('loser')
        playerTwoScore.classList.add('winner')
    }
  }
  playerTwoScore.textContent = playerTwoInitialScore;
  console.log("playerTwoClicked");
};
playerTwo.addEventListener("click", playerTwoClicked);

//score reset
const resetClicked = () => {
  isGameOver = false;
  playerOneScore.textContent = 0;
    playerTwoScore.textContent = 0;
    playerOneInitialScore = 0;
    playerTwoInitialScore = 0;
    playerOneScore.classList.remove('loser','winner')
    playerTwoScore.classList.remove('loser','winner')
  console.log("Score is reset!!");
};

reset.addEventListener("click", resetClicked);


//winning score selection
const winningScoreSelection = (e) => {
  winningScore = +e.target.value;
  resetClicked();
  console.log(e.target.value);
  console.log(winningScore, typeof winningScore);
};
scoreSelection.addEventListener("change", winningScoreSelection);
