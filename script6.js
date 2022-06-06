let games =1;
let playerScore = 0;
let computerScore = 0;

function play() {

    const button = document.querySelectorAll('button');

        button.forEach((button) => {

            button.addEventListener('click', () => {

                if (button.id === "R") {
                    playerSelect = "Rock";

                }   else if (button.id === "P") {
                    playerSelect = "Paper"

                }   else if (button.id === "S") {
                    playerSelect = "Sissors";
                }
                console.log("Player Choice: " + playerSelect);
                playGame();
            })
           
        })

}

function computerChoice() {

    let item = ["Rock", "Paper", "Sissors"];
    return item [Math.floor(Math.random() * item.length)];
    
}

function logComp(){
    console.log("Computer Choice: " + computerChoiceVAR);
}

function playGame() {
    if (playerSelect === "Rock" && computerChoiceVAR === "Paper") {
        console.log("You Lose ööööööööö!!!!!!!!!!!!!");
        computerWins = ++computerWins;
        gameNo = ++gameNo;
        console.log("Player Score: " + playerWins)
        console.log("Computer Score: " + computerWins);

}   else if (playerSelect === "Rock" && computerChoiceVAR === "Rock") {
        console.log("It is a Draw");
        gameNo = ++gameNo;
        console.log("Player Score: " + playerWins)
        console.log("Computer Score: " + computerWins);
  
}   else if (playerSelect === "Paper" && computerChoiceVAR === "Rock") {
        console.log("Ya win this one!!!!!!");
        playerWins = ++playerWins;
        gameNo = ++gameNo;
        console.log("Player Score: " + playerWins)
        console.log("Computer Score: " + computerWins);
        
}   else if (playerSelect === "Paper" && computerChoiceVAR === "Paper") {
        console.log("Its a Draw!ÖplayerSelection!Ö!Ö!Ö!Ö!Ö!Ö!");
        gameNo = ++gameNo;
        console.log("Player Score: " + playerWins)
        console.log("Computer Score: " + computerWins);                
    
}   else if (playerSelect === "Paper" && computerChoiceVAR === "Sissors") {
        console.log ("You Lose ö!ö!ö!Ö!ö!Ö1Ö!ö!Ö1Ö!Ö!Ö1ö");
        computerWins = ++computerWins;
        gameNo = ++gameNo;
        console.log("Player Score: " + playerWins)
        console.log("Computer Score: " + computerWins);
        
}   else if (playerSelect === "Sissors" && computerChoiceVAR === "Paper") {
        console.log ("You Lose ö!ö!ö!Ö!ö!Ö1Ö!ö!Ö1Ö!Ö!Ö1ö");
        computerWins = ++computerWins;
        gameNo = ++gameNo;
        console.log("Player Score: " + playerWins);     
        console.log("Computer Score: " + computerWins);

}   else if (playerSelect === "Sissors" && computerChoiceVAR === "Rock") {
        console.log("Looooooooooooser ö!Ö!Ö!Ö!Ö!Ö!Ö!Ö!Ö!Ö");
        computerWins = ++computerWins;
        gameNo = ++gameNo;
        console.log("Player Score: " + playerWins)
        console.log("Computer Score: " + computerWins);
        

}   else if (playerSelect === "Sissors" && computerChoiceVAR === "Sissors") {
        console.log("It is a draw!");
        gameNo = ++gameNo;
        console.log("Player Score: " + playerWins)
        console.log("Computer Score: " + computerWins);
     

}}
       
       



playerChoice = "";

play();
computerChoice();
playGame();
var computerChoiceVAR = computerChoice();
var playerSelect = playerChoice;
logComp();


