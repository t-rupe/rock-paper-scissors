let playerScore = 0;
let computerScore = 0;
let ties = 0;

function getComputerChoice() {
    let arrayChoice = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random()*arrayChoice.length);
    return arrayChoice[randomChoice];
}

let tie = 'Tie!'
let playerWinRound = 'you win this round'
let computerWinRound = 'you lost this round :('
let playerWon = 'YOU WIN!!!!!!!!!!!!!!!!'
let computerWon = 'SORRY, YOU LOST :('

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
function game() {
    for (let i = 0; i < 5; i++) {
       let playerSelection = prompt('rock, paper, or scissors?').toLowerCase();
       const computerSelection = getComputerChoice();
       let roundResult = playRound(playerSelection, computerSelection);
       console.log(roundResult);
       score(roundResult);
       console.log('Your score is ' + playerScore);
       console.log("The computer's score is " + computerScore);
       
       if (i == 4) {
        return declareWinner();
       }
       } 
    }
console.log(game());

function score(result) {
  if (result == playerWinRound) {
    playerScore++;
  } else if (result == tie) {
    ties++;
  } else {
    computerScore++;
  }
  }

function declareWinner() {
    if  (playerScore == computerScore) {
        console.log(tie);
        return; 
    } else if (playerScore > computerScore) {
    console.log(playerWon);
    return;
    } else {
    console.log(computerWon);
    return;
  }
}