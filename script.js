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
 
function gameOver() {
    const announcement = document.querySelector(".announcement");
    const humanScore = parseInt(humanScoreDisplay.textContent);
    const computerScore = parseInt(computerScoreDisplay.textContent);
    
    if (computerScore > humanScore) {
       announcement.textContent = "Computer won! You suck!";
    } 
    else if (computerScore < humanScore) {
        announcement.textContent = "You won! Buy new computer";
    }
    else {
        announcement.textContent = "Tie! You both suck!";
    }
    
    handRock.removeEventListener("click",rockFunc);
    handPaper.removeEventListener("click",paperFunc);
    handScissors.removeEventListener("click",scissorsFunc);
}

let rounds = 0;
const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score");

function playGame(humanSelection) {
    rounds++;

    let humanScore = parseInt(humanScoreDisplay.textContent);
    let computerScore = parseInt(computerScoreDisplay.textContent);
    
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
    
    playRound(humanSelection, getComputerChoice());

    humanScoreDisplay.textContent = "" + humanScore;
    computerScoreDisplay.textContent = "" + computerScore;
            
    if(rounds === 5) {        
        gameBox.dispatchEvent(new CustomEvent("gameOver"));
    }

}

const handRock = document.getElementById("rock");
const handPaper = document.getElementById("paper");
const handScissors = document.getElementById("scissors");

// This creates function object so they dont run
// on load and I can remove listeners later.
let rockFunc = () => playGame("rock");
let paperFunc = () => playGame("paper");
let scissorsFunc = () => playGame("scissors");

handRock.addEventListener("click", rockFunc);
handPaper.addEventListener("click", paperFunc);
handScissors.addEventListener("click",scissorsFunc);

const gameBox = document.querySelector(".gameBox");
gameBox.addEventListener("gameOver",gameOver);
