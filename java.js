let playerSelection;
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

let buttons = document.querySelectorAll('button');

buttons.forEach((item) => { // Event lister for button click that assigns playerSelection
    item.addEventListener('click', function(e) {
        playerSelection = (e.target.id);
        if (rounds < 4) {
            playRound(playerSelection, computerSelect());
        } else {
            playRound(playerSelection, computerSelect());
            gameOver();
        }
    });
});

function gameOver() { // Printers Winner or Loser and resets game state

    if (playerScore > computerScore) {
        document.querySelector('#result').textContent = 'You win :) Click to play again!';
    } else if (computerScore > playerScore) {
        document.querySelector('#result').textContent = 'You lose :( Click to play again!';
    } else if (computerScore == playerScore) {
        document.querySelector('#result').textContent = 'Tie game! Click to play again!';
    }

    rounds = 0;
    playerScore = 0;
    computerScore = 0;
}

function computerSelect() { // Computer Randomly Selects Weapon
    let num = Math.floor((Math.random() * 3));

    if (num == 0) {
        return 'rock';
    } else if (num == 1) {
        return 'paper';
    } else {
        return 'scissors'; 
    }  
}

function playerWin() {// player wins the round
    rounds++;
    playerScore++;
}

function computerwin() {// computer wins the round
    rounds++
    computerScore++;
}

function printScore() {// Update text div with rounds and score
    document.querySelector('#score').textContent = `Round: ${rounds} Player: ${playerScore} Computer: ${computerScore}`;
}

function playRound(playerChoice, computerChoice) {

    if (playerChoice == computerChoice) {
        document.querySelector('#result').textContent = 'This rounds a tie!';
        rounds++;
        printScore();   
    } else if (playerChoice  == 'rock' && computerChoice == 'scissors') {
        document.querySelector('#result').textContent = 'Player point! rock beats scissors!';
        playerWin();
        printScore(); 
    } else if (playerChoice  == 'scissors' && computerChoice == 'paper') {
        document.querySelector('#result').textContent = 'Player point! scissors beats paper!';
        playerWin();
        printScore(); 
    } else if (playerChoice  == 'paper' && computerChoice == 'rock') {
        document.querySelector('#result').textContent = 'Player point! paper beats rock!';
        playerWin();
        printScore();  
    } else {
        computerwin();
        document.querySelector('#result').textContent = `Computer point! ${computerChoice} beats ${playerChoice}`;
        printScore();
    }
}
