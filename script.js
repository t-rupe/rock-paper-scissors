function getComputerChoice() {
    let arrayChoice = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random()*arrayChoice.length);
    return arrayChoice[randomChoice];
}

let tie = 'Tie!'
let playerWinRound = 'You Wwn this round!'
let computerWinRound = 'You lost this round :('
let playerWon = 'You win the game!'
let computerWon = 'You lost the game :('

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        return tie;
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        return playerWinRound;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        return playerWinRound;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') { 
        return playerWinRound;
    } else {
        return computerWinRound;
    }
}
const playerSelection = prompt('rock, paper, or scissors?');
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
       console.log(playRound(playerSelection, computerSelection));
    if 
    }
}

function score(result) {
  if (result == playerWinRound) {
    playerScore++;
  } else if (result == tie) {
    ties++;
  } else {
    computerScore++;
  }

  if (playerScore == 5) {
    console.log(playerWon);
    return;
  }
  if (computerScore == 5) {
    console.log(computerWon);
    return;
  }