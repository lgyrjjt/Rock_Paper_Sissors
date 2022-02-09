


function playGame() {



        


/* Info for console */

let comS = ("Computer Says: ");

/* Computer's choice for each game */

function computerPlay() {
        let item = ["Rock", "Paper", "Sissors"];
        return item[Math.floor(Math.random() * item.length)];
}

/* Makes function to global variable */

var computerChoice = computerPlay();

/* Log for testing */

console.log(comS + computerChoice);

/* Info for console */

let playS = ("Player Says: ");

/* Player input */

let playerSelection1 = window.prompt("It is best out of 5. Please enter your selection for this game of either Rock, Paper or Sissors: ");

const ps = playerSelection1.charAt(0).toUpperCase();
const psrest = playerSelection1.slice(1).toLowerCase();
playerSelection = ps + psrest

/* Logs the answers for testing */

console.log(playerSelection)
        
/* Calls Function */

let winner = play();

/* Game play function */

function play() {

        console.log("Game Nummber; " + gameNo);



        if (playerSelection === "Rock" && computerChoice === "Paper") {
                console.log("You Lose ööööööööö!!!!!!!!!!!!!");
                computerWins = ++computerWins;
                gameNo = ++gameNo;
                console.log("Player Score: " + playerWins)
                console.log("Computer Score: " + computerWins);
                

       
      
        }   else if (playerSelection === "Rock" && computerChoice === "Rock") {
                console.log("It is a Draw");
                gameNo = ++gameNo;
                console.log("Player Score: " + playerWins)
                console.log("Computer Score: " + computerWins);
               

        }   else if (playerSelection === "Rock" && computerChoice === "Sissors") {
                console.log("You Win!!!!!!! ööööööööö");
                playerWins = ++playerWins;
                gameNo = ++gameNo;
                console.log("Player Score: " + playerWins)
                console.log("Computer Score: " + computerWins);
          

        }    else if (playerSelection === "Paper" && computerChoice === "Rock") {
                console.log("Ya win this one!!!!!!");
                playerWins = ++playerWins;
                gameNo = ++gameNo;
                console.log("Player Score: " + playerWins)
                console.log("Computer Score: " + computerWins);
                

        }   else if (playerSelection === "Paper" && computerChoice === "Paper") {
                console.log("Its a Draw!Ö!Ö!Ö!Ö!Ö!Ö!Ö!");
                gameNo = ++gameNo;
                console.log("Player Score: " + playerWins)
                console.log("Computer Score: " + computerWins);
                

        }   else if (playerSelection === "Paper" && computerChoice === "Sissors") {
                console.log ("You Lose ö!ö!ö!Ö!ö!Ö1Ö!ö!Ö1Ö!Ö!Ö1ö");
                computerWins = ++computerWins;
                gameNo = ++gameNo;
                console.log("Player Score: " + playerWins)
                console.log("Computer Score: " + computerWins);
            

        }   else if (playerSelection === "Sissors" && computerChoice === "Paper") {
                console.log("You win this one!!!!!ääääääärrrrrr");
                playerWins = ++playerWins;
                gameNo = ++gameNo;
                console.log("Player Score: " + playerWins)
                console.log("Computer Score: " + computerWins);
               

        }   else if (playerSelection === "Sissors" && computerChoice === "Rock") {
                console.log("Looooooooooooser ö!Ö!Ö!Ö!Ö!Ö!Ö!Ö!Ö!Ö");
                computerWins = ++computerWins;
                gameNo = ++gameNo;
                console.log("Player Score: " + playerWins)
                console.log("Computer Score: " + computerWins);
               

        }   else if (playerSelection === "Sissors" && computerChoice === "Sissors") {
                console.log("It is a draw!");
                gameNo = ++gameNo;
                console.log("Player Score: " + playerWins)
                console.log("Computer Score: " + computerWins);
                
}


    
}
}
let games = 1;
let playerScore = 0;
let computerScore = 0;
let playerWins = playerScore;
let computerWins = computerScore;
let gameNo = games;
playGame();
playGame();
playGame();
playGame();
playGame();
console.log("Game over");
console.log ("The final scores were:");
console.log ("Player Score: " + playerWins);
console.log ("Computer Score: " + computerWins);
if (playerWins > computerWins) {
        console.log("YOU ARE THE WINNER :))))))))")
} else {
        console.log("THE COMPUTER BEAT YOU THIS TIME!")
}

console.log ("Play again soon");







