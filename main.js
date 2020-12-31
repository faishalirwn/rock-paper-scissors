const announcerEl = document.querySelector('#announcer');
const playerScoreEl = document.querySelector('#player-score');
const computerScoreEl = document.querySelector('#computer-score');
const resultEl = document.querySelector('#result');
const arenaEl = document.querySelector('#arena');
const playerChoiceEl = document.querySelector('#player-choice');
const computerChoiceEl = document.querySelector('#computer-choice');
const startBtn = document.querySelector('#start-btn');
const choiceBtn = document.querySelectorAll('.choice-btn');


// Game state
let playerScore = 0;
let computerScore = 0;
let firstGame = true;


// Start button behavior
startBtn.addEventListener('click', () => {
    if (firstGame) {
        announcerEl.style.display = 'block';
        arenaEl.style.display = 'block';
    }

    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = 0;
    computerScoreEl.textContent = 0;
    playerChoiceEl.textContent = '';
    computerChoiceEl.textContent = '';
    startBtn.style.display = 'none';
    resultEl.style.display = 'none';

    choiceBtn.forEach((el) => {
        el.style.display = 'inline';
    });
})

// Randomized computer choice
function computerPlay() {
    const choices = ['👊', '✋', '✌️']
    const indexChoice = Math.floor(Math.random() * 3);
    return choices[indexChoice];
}


function determineWinner(playerChoice, computerChoice) {
    if ((playerChoice === '👊' && computerChoice === '✌️') || 
        (playerChoice === '✋' && computerChoice === '👊') || 
        (playerChoice === '✌️' && computerChoice === '✋')) {
            playerScore++;
    } else if ((computerChoice === '👊' && playerChoice === '✌️') || 
        (computerChoice === '✋' && playerChoice === '👊') || 
        (computerChoice === '✌️' && playerChoice === '✋')) {
            computerScore++;
    }
}


// Choice button behavior
choiceBtn.forEach((el) => {
    el.addEventListener('click', (e) => {
        const playerChoice = e.target.textContent;
        const computerChoice = computerPlay();
        playerChoiceEl.textContent = playerChoice;
        computerChoiceEl.textContent = computerChoice;
        determineWinner(playerChoice, computerChoice);
        playerScoreEl.textContent = playerScore;
        computerScoreEl.textContent = computerScore;

        if (playerScore === 5 || computerScore === 5) {
            choiceBtn.forEach((el) => {
                el.style.display = 'none';
            });            
            startBtn.style.display = 'inline';

            if (firstGame === true) {
                startBtn.textContent = 'Play again';
            }

            if (playerScore === 5) {
                resultEl.textContent = 'Player win!';
            } else {
                resultEl.textContent = 'Computer win!';
            }
            resultEl.style.display = 'block';

        }
    })
})