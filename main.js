const announcerEl = document.querySelector('#announcer');
const arenaEl = document.querySelector('#arena');
const playerScoreEl = document.querySelector('#player-score');
const computerScoreEl = document.querySelector('#computer-score');
const startBtn = document.querySelector('#start-btn');
const choiceBtn = document.querySelectorAll('.choice-btn');

let playerScore = 0;
let computerScore = 0;
let firstGame = true;

startBtn.addEventListener('click', () => {
    announcerEl.style.display = 'block';
    arenaEl.style.display = 'block';
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    startBtn.style.display = 'none';

    choiceBtn.forEach((el) => {
        el.style.display = 'inline';
    });
})