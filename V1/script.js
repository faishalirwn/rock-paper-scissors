const optionsDiv = document.querySelector('.options'),
      option = document.querySelectorAll('.option'),
      main = document.querySelector('main'),
      startBtn = document.querySelector('.start'),
      score = document.querySelector('.score'),
      countdown = document.querySelector('.countdown'),
      player = document.querySelector('.player'),
      computer = document.querySelector('.computer');

let playerScore = 0,
    computerScore = 0,
    rounds,
    step = 0;

function computerPlay() {
    const randomNum = Math.floor(Math.random() * 3) + 1
    switch (randomNum) {
        case 1:
            return "rock"
            break;
        case 2:
            return "paper"
            break;
        case 3:
            return "scissors"
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    switch (computerSelection) {
        case "rock":
            computer.textContent = "👊"
            break;
        case "paper":
            computer.textContent = "✋"
            break;
        case "scissors":
            computer.textContent = "✌️"
            break;
    }            

    if ((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "scissors")) {

    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        computerScore++;                
    } else {
        score.textContent = 'There seem to be bugs in this sacred land, report to me for fix';
        return
    }

    score.textContent = `Current score: ${playerScore} : ${computerScore}`;
    return
}

function resetRound() {
    score.textContent = `The score was: ${playerScore} : ${computerScore}. Thanks for playing`;

    playerScore = 0,
    computerScore = 0;

    startBtn.textContent = 'Start';

    option.forEach(function(el) {
        el.classList.add('disabled');
    })
}

startBtn.addEventListener('click', function(e) {
    if (startBtn.textContent === 'Start') {
        rounds = prompt('How many rounds do you want to play?');
        if (rounds === null) {
            return alert('Canceled')
        } else if (isNaN(rounds) || rounds <= 0) {
            return alert('Please enter a valid number')
        } else if (rounds > 0) {
            rounds = Number(rounds)

            main.style.display = 'block';

            startBtn.textContent = 'Reset';
            score.textContent = '';
            player.textContent = '';
            computer.textContent = '';

            playerScore = 0,
            computerScore = 0,
            step = 0;

            option.forEach(function(el) {
                el.classList.remove('disabled');
            })
        }
    } else if (startBtn.textContent === 'Reset') {
        resetRound()
    }
    
})

optionsDiv.addEventListener('click', function(e) {

    if (step >= rounds || option[0].className.includes('disabled')) {
        return
    }

    if (e.target.className.includes('rock') || e.target.className.includes('paper') || e.target.className.includes('scissors')) {
        if (!(option[0].className.includes('disabled'))) {
            option.forEach(function(el) {
                el.classList.add('disabled');
            })
        }
        
        let playerSelection = e.target.classList[1]
        player.textContent = e.target.textContent
        computer.textContent = '';
        
        let countdownSec = 3
        let countdowning = setInterval(function() {
            countdown.textContent = countdownSec;
            countdownSec--;

            if (countdownSec === -1) {
                playRound(playerSelection, computerPlay())
                clearInterval(countdowning)
                countdown.textContent = '';
                
                step++;

                option.forEach(function(el) {
                    el.classList.remove('disabled');
                })

                if (step === rounds) {                            
                    resetRound()
                }
            }
        }, 1000)
    }
});