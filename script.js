const ROCK = 0, PAPER = 1, SCISSORS = 2;

let playerScore = 0, computerScore = 0;
let gameOn = true;

function computerPlay() {
    return Math.floor(Math.random() * 3);
}

function playString(play) {
    switch (play) {
        case ROCK:
            return `rock`;
        case PAPER:
            return `paper`;
        default:
            return `scissors`;
    }
}

function playRound(playerMove) {
    if (gameOn) {
        const WIN = 1, TIE = 0, LOSE = -1;
        let computerMove;
        let result;

        switch (playerMove) {
            case ROCK:
                switch (computerMove = computerPlay()) {
                    case ROCK:
                        result = TIE;
                        break;
                    case PAPER:
                        result = LOSE;
                        break;
                    default:
                        result = WIN;
                }
                break;
            case PAPER:
                switch (computerMove = computerPlay()) {
                    case ROCK:
                        result = WIN;
                        break;
                    case PAPER:
                        result = TIE;
                        break;
                    default:
                        result = LOSE;
                }
                break;
            default:
                switch (computerMove = computerPlay()) {
                    case ROCK:
                        result = LOSE;
                        break;
                    case PAPER:
                        result = WIN;
                        break;
                    default:
                        result = TIE;
                }
        }

        switch (result) {
            case WIN:
                playerScore++;
                updateGame(`You win! ${playString(playerMove)} beats ${playString(computerMove)}.`);
                break;
            case LOSE:
                computerScore++;
                updateGame(`You lose! ${playString(computerMove)} beats ${playString(playerMove)}.`);
                break;
            default:
                updateGame(`Tie! ${playString(playerMove)} ties with ${playString(computerMove)}.`);
        }
    }
}

function updateGame(message) {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            message += `\nYou win the game!`;
        } else {
            message += `\nYou lose the game!`;
        }
        gameOn = false;
    }
    document.querySelector('#score-box').textContent = `${playerScore}-${computerScore}`;
    document.querySelector('#message-box').textContent = message;
}

document.querySelector('#rock-button').addEventListener('click', () => playRound(ROCK));
document.querySelector('#paper-button').addEventListener('click', () => playRound(PAPER));
document.querySelector('#scissors-button').addEventListener('click', () => playRound(SCISSORS));