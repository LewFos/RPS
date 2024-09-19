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

function heardClick (humanSelection) {

    var computerSelection = getComputerChoice();
    console.log("Computer " + computerSelection);
    console.log("Human " + humanSelection);

    
    playRound(humanSelection, computerSelection);

    const container = document.querySelector("#container");
    const content = document.createElement("div");

    content.setAttribute('style', 'white-space: pre;');

    content.classList.add("content");
    content.textContent = "Human Score: " + humanScore + " \r\n";
    content.textContent += "Computer Score: " + computerScore + " \r\n \r\n";
    container.appendChild(content);
    

    if (humanScore === 5) {
        alert("YOU WIN!");
        humanScore = 0;
        computerScore = 0;

        let container = document.getElementById("container");
        empty(container);


    } else if (computerScore === 5) {
        alert("YOU SUCK!");
        humanScore = 0;
        computerScore = 0;

        let container = document.getElementById("container");
        empty(container);
        
    }

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);

}

function empty(element) {
    while(element.firstElementChild) {
       element.firstElementChild.remove();
    }
  }

const buttons = document.querySelectorAll("button");


buttons.forEach((button) => {

  button.addEventListener("click", () => {
    heardClick(button.id);
  });

});
