function computerPlay() {
    zero = "Rock";
    one = "Paper";
    two = "Scissors";
    pick = Math.floor(Math.random() * 3);
    if (pick === 0) {
        return zero
    } else if (pick === 1) {
        return one
    } else if (pick === 2) {
        return two
    }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "Rock" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Scissors") || 
        (playerSelection === " Paper" && computerSelection === "Paper")) {
        return `It's a Tie! You both threw ${playerSelection}.`
    } else
    if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") || 
        (playerSelection === "Paper" && computerSelection === "Rock")) {
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    } else
    if ((playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Scissors" && computerSelection === "Rock") || 
        (playerSelection === "Paper" && computerSelection === "Scissors")) {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`
    } else {
        return `Invalid Input.`
    }
}

function game() {
    alert("Let's play 5 rounds of Rock-Paper-Scissors against a computer!")
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Please enter Rock, Paper, or Scissors.", "Rock");
        if (playerChoice === null) {
            alert("See you again!")
            return
        }
        if (onlyLetters(playerChoice)) {
            let playerChoiceRead = playerChoice.trim();
            let playerChoiceReadLowered = playerChoiceRead.toLowerCase();
            let playerChoiceReadLoweredFinal = playerChoiceReadLowered.charAt(0).toUpperCase()
                + playerChoiceReadLowered.slice(1);
            alert(playRound(playerChoiceReadLoweredFinal, computerPlay()));
        } else {
            alert("Please only input either Rock, Paper, or Scissors (case-insensitive).");
        }

    }
}

console.log(computerPlay());

function onlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
}

game()