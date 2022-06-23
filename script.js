// The transition effects for the images (or buttons) were from Wes Bos's 
// 01-Drum Kit Exercise in his JavaScript30 repo.

//Settings up variables.
const buttons = document.querySelectorAll(".inputButton");
const paraResult = document.getElementById("Result");
const playerScoreText = document.getElementById("playerScore");
const computerScoreText = document.getElementById("computerScore");
let playerScore = 0;
let computerScore = 0;
var whoWon = 0;

// This part of the code triggers when any of the three buttons is pressed and calls 
// the function playRound which takes the input from the player and a random
// computer input and outputs the result.
buttons.forEach(button => button.addEventListener("click", function (e) {
    tempPlayer = this.id;
    tempComputer = computerPlay();
    const result = playRound(`${tempPlayer}`, tempComputer);
    let playerResult = document.getElementById("playerResult");
    let computerResult = document.getElementById("computerResult");
    let chosenButton = document.getElementById(`${tempPlayer}`);
    chosenButton.classList.add("buttonOnClick");
    console.log(chosenButton);
    if (whoWon == 0) {
        playerResult.classList.add("playing-tie");
        computerResult.classList.add("playing-tie");
    } else if (whoWon == 1) {
        playerResult.classList.add("playing-winner");
        computerResult.classList.add("playing-loser");
    } else if (whoWon == 2) {
        playerResult.classList.add("playing-loser");
        computerResult.classList.add("playing-winner");
    }
    playerResult.src=`./images/${tempPlayer}.png`;
    computerResult.src=`./images/${tempComputer}.png`;
    paraResult.textContent = result;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    if (playerScore == 5 || computerScore == 5) {
        endOfMatch()
    }
}));

// from Wes Bos's code which removes classLists (transition classes) from
// the images by calling removeTransition function

const keys = Array.from(document.querySelectorAll('.Result'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing-tie');
    this.classList.remove('playing-winner');
    this.classList.remove('playing-loser');
    this.classList.remove('buttonOnClick');
    whoWon = 0;
}

// Responsible for the scoreboard and the text result.
// Called only when either the player or the computer reaches a score of 5.
function endOfMatch() {
    if (playerScore == 5) {
        setTimeout(function() {
            alert("You won!");
        }, 2);
        
        // paraResult.textContent = "You won. Congratulations!";
    } else if (computerScore == 5) {
        setTimeout(function() {
            alert("You lost!");
        }, 2);
        // paraResult.textContent = "You lost. Better luck next time!";
    }
    playerScore = 0;
    computerScore = 0;
    setTimeout(function() {
        playerScoreText.textContent = playerScore;
    }, 0.1);
    setTimeout(function() {
        computerScoreText.textContent = computerScore;
    }, 0.1);
    setTimeout(function() {
        paraResult.textContent = "Test your luck!";
    }, 0.1);
}

// Outputs the random computer input
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

//Determine who won, player or computer.
function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "Rock" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Scissors") || 
        (playerSelection === "Paper" && computerSelection === "Paper")) {
        whoWon = 0;
        return `It's a Tie! You both threw ${playerSelection}.`
    } else
    if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") || 
        (playerSelection === "Paper" && computerSelection === "Rock")) {
        playerScore += 1;
        whoWon += 1;
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    } else
    if ((playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Scissors" && computerSelection === "Rock") || 
        (playerSelection === "Paper" && computerSelection === "Scissors")) {
        computerScore += 1;
        whoWon += 2;
        return `You Lose! ${computerSelection} beats ${playerSelection}.`
    } else {
        return `Invalid Input.`
    }
}


// this code was from the earlier implementation without GUI
// function game() {

//     for (let i = 0; i < 5; i++) {
//         let playerChoice = prompt("Please enter Rock, Paper, or Scissors.", "Rock");
//         if (playerChoice === null) {
//             alert("See you again!")
//             return
//         }
//         if (onlyLetters(playerChoice)) {
//             let playerChoiceRead = playerChoice.trim();
//             let playerChoiceReadLowered = playerChoiceRead.toLowerCase();
//             let playerChoiceReadLoweredFinal = playerChoiceReadLowered.charAt(0).toUpperCase()
//                 + playerChoiceReadLowered.slice(1);
//             alert(playRound(playerChoiceReadLoweredFinal, computerPlay()));
//         } else {
//             alert("Please only input either Rock, Paper, or Scissors (case-insensitive).");
//         }

//     }
// }

//
// function onlyLetters(str) {
//     return /^[a-zA-Z]+$/.test(str);
// }

// game()