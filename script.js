

function playerSelection2() {
    
        const button = document.querySelectorAll('button');
        
        // we use the .forEach method to iterate through each button
                
        button.forEach((button) => {
        
         //and for each one we add a 'click'listener
                
                button.addEventListener('click', () => {
                        
                        if (button.id === "R") {
                               playerSelection2 = "Rock"
                               console.log(playerSelection2);
                        
                        } else if (button.id === "P") {
                                playerSelection2 = "Paper"
                                console.log(playerSelection2);
                                
                        } else if (button.id === "S") {
                                playerSelection2 = "Sissors";  
                                console.log(playerSelection2);                              ;              
                                
                        }
                
console.log("Player Selection!!!! " + playerSelection2);
                        
                                                });

                        });
                };





function playGame() {
       

        if (playerSelection2 === "Rock" && computerChoice === "Paper") {
                console.log("You Lose ööööööööö!!!!!!!!!!!!!");
                computerWins = ++computerWins;
                gameNo = ++gameNo;
                console.log("Player Score: " + playerWins)
                console.log("Computer Score: " + computerWins);
      
        }   else if (playerSelection2 === "Rock" && computerChoice === "Rock") {
                console.log("It is a Draw");
                gameNo = ++gameNo;
                console.log("Player Score: " + playerWins)
                console.log("Computer Score: " + computerWins);
          
        }   else if (playerSelection2 === "Paper" && computerChoice === "Rock") {
                console.log("Ya win this one!!!!!!");
                playerWins = ++playerWins;
                gamplay();eNo = ++gameNo;
                console.log("Player Score: " + playerWins)
                console.log("Computer Score: " + computerWins);
                
        }   else if (playerSelection2 === "Paper" && computerChoice === "Paper") {
      
                console.log("Its a Draw!ÖplayerSelection!Ö!Ö!Ö!Ö!Ö!Ö!");
                gameNo = ++gameNo;
                console.log("Player Score: " + playerWins)
                console.log("Computer Score: " + computerWins);                
                  

        }    else if (playerSelection2 === "Paper" && computerChoice === "Sissors") {
                console.log ("You Lose ö!ö!ö!Ö!ö!Ö1Ö!ö!Ö1Ö!Ö!Ö1ö");
                computerWins = ++computerWins;
                play();       gameNo = ++gameNo;
                console.log("Player Score: " + playerWins)
                console.log("Computer Score: " + computerWins);
                
        }   else if (playerSelection2 === "Sissors" && computerChoice === "Paper") {
                        console.log ("You Lose ö!ö!ö!Ö!ö!Ö1Ö!ö!Ö1Ö!Ö!Ö1ö");
                        computerWins = ++computerWins;
                        play();       gameNo = ++gameNo;
                        console.log("Player Score: " + playerWins);     
                        console.log("Computer Score: " + computerWins);

        }   else if (playerSelection2 === "Sissors" && computerChoice === "Rock") {
                console.log("Looooooooooooser ö!Ö!Ö!Ö!Ö!Ö!Ö!Ö!Ö!Ö");
                computerWins = ++computerWins;
                gameNo = ++gameNo;
                console.log("Player Score: " + playerWins)
                console.log("Computer Score: " + computerWins);
                

        }   else if (playerSelection2 === "Sissors" && computerChoice === "Sissors") {
                console.log("It is a draw!");
                gameNo = ++gameNo;
                console.log("Player Score: " + playerWins)
                console.log("Computer Score: " + computerWins);
                
}

}

function play() {
                
        console.log("Game Number; " + gameNo);

}

function end () {
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
        }           

    




        

let games = 1;
let playerScore = 0;
let computerScore = 0;
let playerWins = playerScore;
let computerWins = computerScore;
let gameNo = games;

playerSelection2();




let comS = ("Computer Says: ");

        function computerPlay() {
                let item = ["Rock", "Paper", "Sissors"];
                return item[Math.floor(Math.random() * item.length)];
                }
                
                
                
                /* Makes function to global variable */
                
                var computerChoice = computerPlay();
                
                /* Log for testing */
                
                console.log(comS + computerChoice);
                
                /* Info for console */



computerPlay();
playGame();






   