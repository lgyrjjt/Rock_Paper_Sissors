let games =1;
let playerScore = 0;
let computerScore = 0;
let computerChoiceVAR = "";

function buttonPress() {

    const button = document.querySelectorAll('button'); 

        button.forEach((button) => {

            button.addEventListener('click', (e) => {

                if (button.id === "R") {
                    playerChoice = "Rock";
                    e.stopImmediatePropagation();
                    removeEvent();

                }   else if (button.id === "P") {
                    playerChoice = "Paper"
                    e.stopImmediatePropagation();
                    removeEvent();

                }   else if (button.id === "S") {
                    playerChoice = "Sissors";
                    e.stopImmediatePropagation();
                    removeEvent();
                }

               
                console.log("Player Choice: " + playerChoice);
                
                button.removeEventListener('click', this, false);
                playRound(computerChoiceVAR);
            })

            
           
        })

}

function removeEvent() {
    const button = document.querySelectorAll('button'); 

    button.forEach((button) => {

        button.removeEventListener('click', this);    
   
})


}

function computerChoice() {

    let item = ["Rock", "Paper", "Sissors"];
    return item [Math.floor(Math.random() * item.length)];
    
}

function logComp(){
    var computerChoiceVAR = computerChoice();
    console.log("Computer Choice: " + computerChoiceVAR);
}

function playRound(){

    computerChoice();
    var computerChoiceVAR = computerChoice();
    logComp ();
    removeEvent();
    
    if (playerChoice === "Rock" && computerChoiceVAR === "Paper") {
        console.log("Player Loses");
        games = ++games;
        computerScore = ++computerScore
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore);
        console.log(games);
        playAgain();
    
    } else if (playerChoice === "Paper" && computerChoiceVAR === "Sissors") {
        console.log("Player Loses");
        games = ++games;
        computerScore = ++computerScore
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore);
        console.log(games);
        playAgain();

    } else if (playerChoice === "Sissors" && computerChoiceVAR === "Rock") {
        console.log("Player Loses");
        games = ++games;
        computerScore = ++computerScore
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore);
        console.log(games);
        playAgain();

    } else if (playerChoice === "Rock" && computerChoiceVAR === "Sissors") {
        console.log("Player Wins");
        games = ++games;
        playerScore = ++playerScore
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore);
        console.log(games);
        playAgain();

    } else if (playerChoice === "Paper" && computerChoiceVAR === "Rock") {
        console.log("Player Wins");
        games = ++games;
        playerScore = ++playerScore
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore);
        console.log(games);
        playAgain();

    } else if (playerChoice === "Sissors" && computerChoiceVAR === "Paper") {
        console.log("Player Wins");
        games = ++games;
        playerScore = ++playerScore
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore);
        console.log(games);
        playAgain();

    } else if (playerChoice === "Rock" && computerChoiceVAR === "Rock") {
        console.log("Draw");
        games = ++games;
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore);
        console.log(games);
        playAgain();

    } else if (playerChoice === "Paper" && computerChoiceVAR === "Paper") {
        console.log("Draw");
        games = ++games;
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore);
        console.log(games);
        playAgain();

    } else if (playerChoice === "Sissors" && computerChoiceVAR === "Sissors") {
        console.log("Draw");
        games = ++games;
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore);
        console.log(games);
        playAgain();
}
}

function playAgain(computerChoiceVAR) {
    if (games <= 5) {
        playerChoice = "";

        computerChoice(computerChoiceVAR);

        buttonPress();
       
       
       

       

    } else {
        console.log("GAME OVER");
    }
}



playAgain(computerChoiceVAR);















