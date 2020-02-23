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

console.log(computerPlay());