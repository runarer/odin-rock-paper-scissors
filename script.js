function getComputerChoice() {
    const choice = Math.floor(Math.random()*3) + 1;
    if (choice === 1) {
        return "rock";
    }
    if(choice === 2) {
        return "paper";
    } 
    return "scissors";    
}

function getHumanChoice() {
    const humanChoice = prompt("Rock, Paper, Scissors?");
    return humanChoice.toLowerCase();
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("No winner!");
        }
        else {
            let computerWon = false;

            if(humanChoice === "rock") {
                computerWon = (computerChoice === "paper");
            } 
            else if(humanChoice === "paper") {
                computerWon = (computerChoice === "scissors");
            }
            else if(humanChoice === "scissors") {
                computerWon = (computerChoice === "rock");
            }

            if (computerWon) {
                computerScore++;
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            } else {
                humanScore++;
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            }
        }
    }

    for(let i = 0; i<5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log(`Human score ${humanScore}`);
    console.log(`Computer score ${computerScore}`);
    
    if (computerScore > humanScore) {
        console.log("Computer won! You suck!");
    } 
    else if (computerScore < humanScore) {
        console.log("You won! Buy new computer");
    }
    else {
        console.log("Tie! You both suck!");
    }
}

playGame();