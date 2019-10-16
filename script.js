let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    switch (Math.floor(Math.random() * 3)) {
        case 0 :
            return `rock`;
        case 1:
            return `paper`;
        case 2:
            return `scissors`;
    }
}

function playRound(playerSelection, computerSelection) {
    const WIN = 1, TIE = 0, LOSE = -1;
    let result;
    if (/rock/i.test(playerSelection)) {
        if (computerSelection === `rock`) {
            result = TIE;
        } else if (computerSelection === `paper`) {
            result = LOSE;
        } else {
            result = WIN;
        }
    } else if (/paper/i.test(playerSelection)) {
        if (computerSelection === `rock`) {
            result = WIN;
        } else if (computerSelection === `paper`) {
            result = TIE;
        } else {
            result = LOSE;
        }
    } else if (/scissors/i.test(playerSelection)) {
        if (computerSelection === `rock`) {
            result = LOSE;
        } else if (computerSelection === `paper`) {
            result = WIN;
        } else {
            result = TIE;
        }
    } else {
        return `Invalid move.`
    }

    if (result === WIN) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (result === LOSE) {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `Tie! ${playerSelection} ties with ${computerSelection}`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(prompt(`Choose your move: `), computerPlay()));
    }
    console.log(playerScore < computerScore ? `You lose!`
        : playerScore === computerScore ? `Tie!`
            : `You win!`);
    console.log(`${playerScore} to ${computerScore}`);
}

game();