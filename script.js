let playerScore = 0;
let computerScore = 0;
let ties = 0;

const scoreHeader = document.querySelector('.scoreHeader');
const scores = document.createElement('div');
scores.classList.add('scores');
scoreHeader.appendChild(scores);

const playerBox = document.createElement('div');
playerBox.classList.add('playerBox');
scores.appendChild(playerBox);
const playerResults = document.createElement('p');
playerResults.setAttribute('id','PlayerScore');
playerResults.textContent = 'Player: 0';
playerBox.appendChild(playerResults);

const computerBox = document.createElement('div');
computerBox.classList.add('computerBox');
scores.appendChild(computerBox);
const computerResult = document.createElement('p');
computerResult.setAttribute('id','computerScore');
computerResult.textContent = 'Computer: 0';
computerBox.appendChild(computerResult);

const winner = document.createElement('div');
winner.classList.add('winner');
winner.setAttribute('id', 'winner');
winner.textContent = ' ';
scoreHeader.appendChild(winner);


const rockButton = document.getElementById("rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

function updateScore() {
  const playerResultPara = document.getElementById('PlayerScore');
  const computerResultPara = document.getElementById('computerScore');

  playerResultPara.textContent = `Player: ${playerScore}`;
  computerResultPara.textContent = `Computer: ${computerScore}`;
}

function getComputerChoice() {
    let arrayChoice = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random()*arrayChoice.length);
    return arrayChoice[randomChoice];
}

function clickListener(event) {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  const playerSelection = event.target.id;
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  let roundResult = playRound(playerSelection, computerSelection);
  score(roundResult);
  updateScore();
console.log('Your score is ' + playerScore);
console.log("The computer's score is " + computerScore);
if (playerScore == 5 || computerScore == 5) {
  declareWinner();
}
}

rockButton.addEventListener('click', clickListener);
paperButton.addEventListener('click', clickListener);
scissorsButton.addEventListener('click', clickListener);



let tie = 'Tie!'
let playerWinRound = 'you win this round'
let computerWinRound = 'you lost this round :('
let playerWon = 'YOU WIN!!!!!!!!!!!!!!!!'
let computerWon = 'SORRY, YOU LOST :('

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return tie;
    } else if (playerSelection === 'rock' && computerSelection == 'scissors') {
        return playerWinRound;
    } else if (playerSelection === 'paper' && computerSelection == 'rock') {
        return playerWinRound;
    } else if (playerSelection === 'scissors' && computerSelection == 'paper') { 
        return playerWinRound;
    } else {
        return computerWinRound;
    }
}

//let playerSelection = prompt('rock, paper, or scissors?').toLowerCase();
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));
//function game() {
    //for (let i = 0; i < 5; i++) {
  //     let playerSelection = prompt('rock, paper, or scissors?').toLowerCase();
 //      const computerSelection = getComputerChoice();
   //    let roundResult = playRound(playerSelection, computerSelection);
//       console.log(roundResult);
//       score(roundResult);
  //     console.log('Your score is ' + playerScore);
 //      console.log("The computer's score is " + computerScore);
       
  //     if (i == 4) {
  //      return declareWinner();
   //    }
  //     } 
   // }
//console.log(game());

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
  const winnerPara = document.getElementById('winner');
    if  (playerScore == computerScore) {
        winnerPara.textContent = tie;
        return; 
    } else if (playerScore > computerScore) {
    winnerPara.textContent = playerWon;
    return;
    } else {
    winnerPara.textContent = computerWon;
    return;
  }
}