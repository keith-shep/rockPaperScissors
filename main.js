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
                return "It's a tie. Both selected rock";
            } else if (computerSelection == 'paper') {
                return "You lose! Paper beats rock";
            } else if (computerSelection == 'scissors') {
                return "You win! Rock beats scissors";
            } else {
                return "Error, did not input a suitable selection";
            }
            break;
            
        case 'paper':
            if (computerSelection == 'rock') {
                return "You win! Paper beats rock";
            } else if (computerSelection == 'paper') {
                return "It's a tie. Both selected paper";
            } else if (computerSelection == 'scissors') {
                return "You lose! Scissors beats paper";
            } else {
                return "Error, did not input a suitable selection";
            }
            break;

        case 'scissors':
            if (computerSelection == 'rock') {
                return "You lose! Rock beats scissors";
            } else if (computerSelection == 'paper') {
                return "You win! Scissors beats paper";
            } else if (computerSelection == 'scissors') {
                return "It's a tie. Both selected scissors";
            } else {
                return "Error, did not input a suitable selection";
            }
            break;
        }

    }







// console.log(computerPlay());
console.log(playRound('scissors', 'rock'));
