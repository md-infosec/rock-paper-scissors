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