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
    computerSelection = 'rock';

    switch(playerSelection) {
        case 'rock': 
            return "player chose rock";    
            break;
        case 'paper': 
            return "player chose paper";    
            break;
        case 'scissors': 
            return "player chose scissors";    
            break;
    }
}






// console.log(computerPlay());
console.log(playRound('paper'));
