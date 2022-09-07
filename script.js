function getComputerChoice() {
    let arrayChoice = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random()*arrayChoice.length);
    return arrayChoice[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'rock') {
        return 'Tie! Try again';
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        return 'You lose! Paper beats Rock';
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'paper') { 
        return 'Tie! Try again';
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        return 'You Win! Paper beats Rock';
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        return 'You Lose! Scissors beats Paper';
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        return 'You Lose! Rock beats Scissors';
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        return 'You Win! Scissors beats Paper';
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'scissors') {
        return 'Tie! Try again';   
    } else {
        return 'invalid choice: please choose either "rock" "paper" or "scissors"';
    }
}
const playerSelection = prompt('rock, paper, or scissors?');
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));