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
                console.log("It's a tie. Both selected rock");
                return 0;
            } else if (computerSelection == 'paper') {
                console.log("You lose! Paper beats rock");
                return -1;
            } else if (computerSelection == 'scissors') {
                console.log("You win! Rock beats scissors");
                return 1;
            } else {
                console.log("Error, did not input a suitable selection");
            }
            break;
            
        case 'paper':
            if (computerSelection == 'rock') {
                console.log("You win! Paper beats rock");
                return 1;
            } else if (computerSelection == 'paper') {
                console.log("It's a tie. Both selected paper");
                return 0;
            } else if (computerSelection == 'scissors') {
                console.log("You lose! Scissors beats paper");
                return -1;
            } else {
                console.log("Error, did not input a suitable selection");
            }
            break;

        case 'scissors':
            if (computerSelection == 'rock') {
                console.log("You lose! Rock beats scissors");
                return -1;
            } else if (computerSelection == 'paper') {
                console.log("You win! Scissors beats paper");
                return 1;
            } else if (computerSelection == 'scissors') {
                console.log("It's a tie. Both selected scissors");
                return 0;
            } else {
                console.log("Error, did not input a suitable selection");
            }
            break;
        }
    }

function game() {
    let score = 0;
    let playerPlay;

    for (let i = 0; i < 5; i++) {
        playerPlay = prompt("Choose your weapon: rock, paper, scissors");
        score += playRound(playerPlay, computerPlay());
    }

    if (score > 0) {
        console.log("You win! You beat the computer.");
    } else {
        console.log("You lost. The computer beat you.");
    }
}

console.log(game());
