const rollButton = document.getElementById('rollButton');
const resetButton = document.getElementById('resetButton');
const computerScore = document.getElementById('computerScore');
const playerScore = document.getElementById('playerScore');

let playerCounter = true;
let computerCounter = false;

let playerTotal = 0;
let computerTotal = 0;


rollButton.addEventListener('click', () => {
    if(playerCounter) {
        playerTotal += Math.floor(Math.random() * 10 + 1);
        playerScore.textContent = playerTotal;
        playerCounter = false;
    } else {
        computerTotal += Math.floor(Math.random() * 10 + 1);
        computerScore.textContent = computerTotal;
        playerCounter = true;
        computerCounter = false;
    }
    winningRules()
})

resetButton.addEventListener('click', resetGame)

function winningRules() {
    if(playerTotal > 50) {
        playerScore.textContent = "Wins!";
        rollButton.disabled = true;
        resetButton.style.display = 'block';
    } else if (computerTotal > 50) {
        computerScore.textContent = 'Wins!';
        rollButton.disabled = true;
        resetButton.style.display = 'block';
    } else if (computerTotal === 50 && playerTotal === 50) {
        computerScore.textContent = 'Tie!';
        playerScore.textContent = "Tie!";
        rollButton.disabled = true;
        resetButton.style.display = 'block';
        
    }
}

function resetGame() {
    playerTotal = 0;
    computerTotal = 0;
    playerScore.textContent = '-';
    computerScore.textContent = '-';
    playerCounter = true;
    computerCounter = false;
    rollButton.disabled = false;
    resetButton.style.display = 'none';
}