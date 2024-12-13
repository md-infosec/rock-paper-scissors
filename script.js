let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNum = Math.random(1, 3);
    let scaledNum = Math.floor(randomNum * 3) + 1;
    
    if (scaledNum == 1) {
        return "rock";
    }

    else if (scaledNum == 2) {
        return "paper";
    }

    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanAnswer = prompt("rock, paper, or scissors?");
    return humanAnswer;
}


function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice();

    if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        return("You lose! Paper beats rock.");
    }

    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        return("You win! Paper beats rock.")
    }

    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        return("You lose! Rock beats scissors.");
    }

    else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        return("You win! Rock beats scissors.");
    }

    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        return("You lose! Scissors beat paper.");
    }

    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        return("You win! Scissors beat paper.");
    }

    else {
        return("Draw! Try again.")
    }
}

function playGame () {

    for (let i = 1; i <= 5; i++) {
        playRound();
    }

    return "Final Score: Human: " + humanScore + ", Computer: " + computerScore;
}