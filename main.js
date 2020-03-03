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
                return 0;
            } else if (computerSelection == 'paper') {
                alert("You lose! Paper beats rock");
                return -1;
            } else if (computerSelection == 'scissors') {
                alert("You win! Rock beats scissors");
                return 1;
            } else {
                alert("Error, did not input a suitable selection");
            }
            break;
            
        case 'paper':
            if (computerSelection == 'rock') {
                alert("You win! Paper beats rock");
                return 1;
            } else if (computerSelection == 'paper') {
                alert("It's a tie. Both selected paper");
                return 0;
            } else if (computerSelection == 'scissors') {
                alert("You lose! Scissors beats paper");
                return -1;
            } else {
                alert("Error, did not input a suitable selection");
            }
            break;

        case 'scissors':
            if (computerSelection == 'rock') {
                alert("You lose! Rock beats scissors");
                return -1;
            } else if (computerSelection == 'paper') {
                alert("You win! Scissors beats paper");
                return 1;
            } else if (computerSelection == 'scissors') {
                alert("It's a tie. Both selected scissors");
                return 0;
            } else {
                alert("Error, did not input a suitable selection");
            }
            break;
        }
    }

/*    
function game() {
    let score = 0;
    let playerPlay;

    for (let i = 0; i < 5; i++) {
        playerPlay = prompt("Choose your weapon: rock, paper, scissors");
        score += playRound(playerPlay, computerPlay());
    }

    if (score > 0) {
        alert("You win! You beat the computer.");
    } else {
        alert("You lost. The computer beat you.");
    }
}
*/

const container = document.querySelector('body');

const btnRock = document.createElement('button');
btnRock.textContent = 'rock';

const btnPaper = document.createElement('button');
btnPaper.textContent = 'paper';

const btnScissors = document.createElement('button');
btnScissors.textContent = 'scissors';



container.appendChild(btnRock);
container.appendChild(btnPaper);
container.appendChild(btnScissors);


btnRock.addEventListener('click', (e) => alert('rock'));
btnPaper.addEventListener('click', (e) => alert('paper'));
btnScissors.addEventListener('click', (e) => alert('scissors'));
