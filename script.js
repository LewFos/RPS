function getComputerChoice() {

      let computerChoice;
      let oneAndThree;
      oneAndThree = Math.floor(Math.random() * 3) + 1;

          if (oneAndThree === 1) {
            computerChoice = ("rock");
          } else if (oneAndThree === 2) {
            computerChoice = ("paper");
          } else {computerChoice= ("scissors");
          }
    
      return(computerChoice);

 }


function getHumanChoice() {

const humanChoice1 = prompt("What's your choice, cherry boy?");
const humanChoice = humanChoice1.toLowerCase();
    
return(humanChoice);


}

let humanScore = 0;
let computerScore = 0;
let gameLoop = 1;


function playRound(humanChoicePlay, computerChoicePlay) {

    console.log("Game "+ gameLoop);
    gameLoop = gameLoop + 1;
    
    if (humanChoicePlay === "rock") {
        
        if (computerChoicePlay === "paper") {
            console.log("LOSER!");
            computerScore = computerScore + 1;
        } else if (computerChoicePlay === "scissors") {
            console.log("WINNER!");
            humanScore = humanScore + 1;
        } else {
            console.log("TIE!");
        }
            
    } else if (humanChoicePlay === "paper") {

        if (computerChoicePlay === "scissors") {
            console.log("LOSER!");
            computerScore = computerScore + 1;
        } else if (computerChoicePlay === "rock") {
            console.log("WINNER!");
            humanScore = humanScore + 1;
        } else {
            console.log("TIE!");
        }

    } else if (humanChoicePlay ==="scissors") {
        
        if (computerChoicePlay === "rock") {
            console.log("LOSER!");
            computerScore = computerScore + 1;
        } else if (computerChoicePlay === "paper") {
            console.log("WINNER!");
            humanScore = humanScore + 1;
        } else {
            console.log("TIE!");
        }   
    
    } else if (humanChoicePlay === "satan") {

        alert("NOTHING BEATS SATAN!!");
        humanScore = humanScore + 666;

    } else {
        alert("pick a proper choice, moron");
    }

}


// one
var humanSelection = getHumanChoice();
var computerSelection = getComputerChoice();
console.log("Computer " + computerSelection);
console.log("Human " + humanSelection);

  
playRound(humanSelection, computerSelection);

console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);

// two
var humanSelection = getHumanChoice();
var computerSelection = getComputerChoice();
console.log("Computer " + computerSelection);
console.log("Human " + humanSelection);

  
playRound(humanSelection, computerSelection);

console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);

// three
var humanSelection = getHumanChoice();
var computerSelection = getComputerChoice();
console.log("Computer " + computerSelection);
console.log("Human " + humanSelection);

  
playRound(humanSelection, computerSelection);

console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);

// four
var humanSelection = getHumanChoice();
var computerSelection = getComputerChoice();
console.log("Computer " + computerSelection);
console.log("Human " + humanSelection);

  
playRound(humanSelection, computerSelection);

console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);

// five
var humanSelection = getHumanChoice();
var computerSelection = getComputerChoice();
console.log("Computer " + computerSelection);
console.log("Human " + humanSelection);

  
playRound(humanSelection, computerSelection);

console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);
