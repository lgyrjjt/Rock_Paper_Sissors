


function playGame() {
    
        buttonPlay();

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
var computerChoice = computerPlay();
/* Player input */

var playerSelection = playerSelection2();

// buttons is a node list. It looks and acts much like an array. CodePen: '3 button'


/* Game play function */

function play() {

        console.log("Game Number; " + gameNo);

}

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
               
                var computerChoice = computerPlay();
        }   else if (playerSelection === "Rock" && computerChoice === "Sissors") {
                console.log("You Win!!!!!!! ööööööööö");
                playerWins = ++playerWins;
                gameNo = ++gameNo;
                console.log("Player Score: " + playerWins)
                console.log("Computer Score: " + computerWins);
          
        }   else if (playerSelection === "Paper" && computerChoice === "Rock") {
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
                        console.log("Player Score: " + playerWins);
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

function buttonPlay() {
    
        const button = document.querySelectorAll('button');
        
        // we use the .forEach method to iterate through each button
        
        button.forEach((button) => {
        
         //and for each one we add a 'click'listener
                
                button.addEventListener('click', () => {
                        
                        if (button.id === "R") {
                                playerSelection2 = "Rock"
                        
                        } else if (button.id === "P") {
                                playerSelection2 = "Paper"
                                
                        } else if (button.id === "S") {
                                playerSelection2 = "Sissors"
                        
                                console.log(playerSelection2);
                        }
                        alert(button.id);
                        alert(playerSelection2);

                        console.log(playerSelection2);
                
                        

                        });
        
        
        
        // adds player selection

      
        
        
        
        
        
        
        });

        /* Makes PlayerSelection global variable
        
        /* Logs the answers for testing */
        
      
                
        /* Calls Function */
 
        /* TAKEN OUT TO TEST
        let winner = play();
        */

        }

        

let games = 1;
let playerScore = 0;
let computerScore = 0;
let playerWins = playerScore;
let computerWins = computerScore;
let gameNo = games;


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
