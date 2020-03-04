function computerPlay() {
    let x = Math.random()*3;
    y = Math.floor(x);

    switch (y) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection) {

        case 'rock':
            if (computerSelection == 'rock') {
                alert("It's a tie. Both selected rock");
                return;
            } else if (computerSelection == 'paper') {
                alert("You lose! Paper beats rock");
                computerScore++;
                return;
            } else if (computerSelection == 'scissors') {
                alert("You win! Rock beats scissors");
                playerScore++;
                return;
            } else {
                alert("Error, did not input a suitable selection");
            }
            break;
            
        case 'paper':
            if (computerSelection == 'rock') {
                alert("You win! Paper beats rock");
                playerScore++;
                return;
            } else if (computerSelection == 'paper') {
                alert("It's a tie. Both selected paper");
                return;
            } else if (computerSelection == 'scissors') {
                alert("You lose! Scissors beats paper");
                computerScore++;
                return;
            } else {
                alert("Error, did not input a suitable selection");
            }
            break;

        case 'scissors':
            if (computerSelection == 'rock') {
                alert("You lose! Rock beats scissors");
                computerScore++;
                return;
            } else if (computerSelection == 'paper') {
                alert("You win! Scissors beats paper");
                playerScore++;
                return;
            } else if (computerSelection == 'scissors') {
                alert("It's a tie. Both selected scissors");
                return;
            } else {
                alert("Error, did not input a suitable selection");
            }
            break;   
    }
}


let computerScore = 0;
let playerScore = 0;

/* Adding JS to HTML */
const container = document.querySelector('body');

const btnRock = document.createElement('button');
btnRock.textContent = 'rock';
container.appendChild(btnRock);

const btnPaper = document.createElement('button');
btnPaper.textContent = 'paper';
container.appendChild(btnPaper);

const btnScissors = document.createElement('button');
btnScissors.textContent = 'scissors';
container.appendChild(btnScissors);

btnRock.addEventListener('click', (e) => {
    playRound('rock', computerPlay());
    results.textContent = playerScore;
    }
);
btnPaper.addEventListener('click', (e) => playRound('paper', computerPlay()));
btnScissors.addEventListener('click', (e) => playRound('scissors', computerPlay()));

results = document.createElement('div');
results.textContent = playerScore; //this for update
container.appendChild(results);
