// Game elements
const choices = document.querySelectorAll('.choice');
const computerChoiceText = document.getElementById('computer-choice-text');
const resultText = document.getElementById('result-text');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');

// Game state
let playerScoreCount = 0;
let computerScoreCount = 0;

// Game logic
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    }
    
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'player';
    }
    
    return 'computer';
}

function updateScore(winner) {
    if (winner === 'player') {
        playerScoreCount++;
        playerScore.textContent = playerScoreCount;
    } else if (winner === 'computer') {
        computerScoreCount++;
        computerScore.textContent = computerScoreCount;
    }
}

function updateResultText(winner, playerChoice, computerChoice) {
    if (winner === 'draw') {
        resultText.textContent = "It's a draw!";
    } else if (winner === 'player') {
        resultText.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        resultText.textContent = `Computer wins! ${computerChoice} beats ${playerChoice}`;
    }
}

// Event listeners
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.dataset.choice;
        const computerChoice = getComputerChoice();
        
        // Update computer's choice text
        computerChoiceText.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        
        // Determine winner and update game state
        const winner = determineWinner(playerChoice, computerChoice);
        updateScore(winner);
        updateResultText(winner, playerChoice, computerChoice);
        
        // Add animation to the clicked choice
        choice.style.transform = 'scale(0.95)';
        setTimeout(() => {
            choice.style.transform = 'scale(1)';
        }, 100);
    });
}); 