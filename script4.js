let games = 1;
let playerScore = 0;
let computerScore = 0;
let playerWins = playerScore;
let computerWins = computerScore;
let gameNo = games;

function toplay () {


const button = document.querySelectorAll('button');

    button.forEach((button) => {

        button.addEventListener('click', () => {

            if (button.id === "R") {
                playerChoice = "Rock"
                playGame();

            } else if (button.id ==="P") {
                playerChoice = "Paper"
                playGame();

            } else if (button.id === "S") {
                playerChoice = "Sissors";
                playGame();
            }

    console.log("Player Chooses: " + playerChoice);  
   
    return playerChoice;

        })
        computerChoice();
    })
    

function computerChoice() {

    let item = ["Rock", "Paper", "Sissors"];
    return item [Math.floor(Math.random() * item.length)];
    

}

var computerChoiceVAR = computerChoice();
console.log("Computer Chooses: " + computerChoiceVAR);

function playGame() {
       

    if (playerChoice === "Rock" && computerChoiceVAR === "Paper") {
            console.log("You Lose ööööööööö!!!!!!!!!!!!!");
            computerWins = ++computerWins;
            gameNo = ++gameNo;
            console.log("Player Score: " + playerWins)
            console.log("Computer Score: " + computerWins);
  
    }   else if (playerChoice === "Rock" && computerChoiceVAR === "Rock") {
            console.log("It is a Draw");
            gameNo = ++gameNo;
            console.log("Player Score: " + playerWins)
            console.log("Computer Score: " + computerWins);
      
    }   else if (playerChoice === "Paper" && computerChoiceVAR === "Rock") {
            console.log("Ya win this one!!!!!!");
            playerWins = ++playerWins;
            gameNo = ++gameNo;
            console.log("Player Score: " + playerWins)
            console.log("Computer Score: " + computerWins);
            
    }   else if (playerChoice === "Paper" && computerChoiceVAR === "Paper") {
            console.log("Its a Draw!ÖplayerSelection!Ö!Ö!Ö!Ö!Ö!Ö!");
            gameNo = ++gameNo;
            console.log("Player Score: " + playerWins)
            console.log("Computer Score: " + computerWins);                
        
    }   else if (playerChoice === "Paper" && computerChoiceVAR === "Sissors") {
            console.log ("You Lose ö!ö!ö!Ö!ö!Ö1Ö!ö!Ö1Ö!Ö!Ö1ö");
            computerWins = ++computerWins;
            gameNo = ++gameNo;
            console.log("Player Score: " + playerWins)
            console.log("Computer Score: " + computerWins);
            
    }   else if (playerChoice === "Sissors" && computerChoiceVAR === "Paper") {
            console.log ("You Lose ö!ö!ö!Ö!ö!Ö1Ö!ö!Ö1Ö!Ö!Ö1ö");
            computerWins = ++computerWins;
            gameNo = ++gameNo;
            console.log("Player Score: " + playerWins);     
            console.log("Computer Score: " + computerWins);

    }   else if (playerChoice === "Sissors" && computerChoiceVAR === "Rock") {
            console.log("Looooooooooooser ö!Ö!Ö!Ö!Ö!Ö!Ö!Ö!Ö!Ö");
            computerWins = ++computerWins;
            gameNo = ++gameNo;
            console.log("Player Score: " + playerWins)
            console.log("Computer Score: " + computerWins);
            

    }   else if (playerChoice === "Sissors" && computerChoiceVAR === "Sissors") {
            console.log("It is a draw!");
            gameNo = ++gameNo;
            console.log("Player Score: " + playerWins)
            console.log("Computer Score: " + computerWins);
            
}

console.log("Player Score: " + playerWins);
console.log("Computer Score: " + computerWins);


}

}









var playerChoice = "";

toplay();





