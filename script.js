function getComputerChoice() {
    let arrayChoice = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random()*arrayChoice.length);
    return arrayChoice[randomChoice];
}