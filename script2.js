

let comS = ("Computer Says: ");

function computerPlay() {
        let item = ["Rock", "Paper", "Sissors"];
        return item[Math.floor(Math.random() * item.length)];
}/* Game play function */

/* Makes function to global variable */

var computerChoice = computerPlay();

/* Log for testing */

console.log(comS + computerChoice);

/* Info for console */

function playerSelection2() {
    
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
                                ;              
                                
                        }
                
console.log("Player Selection!!!! " + playerSelection2);
                        
    
                            
                                        
                                        
                        
                                                });
                                
                                
                                
                                   
                

                        });
                }
        
        
        
           playerSelection2();
        
        
        
        
        
        ;


function playGame() {
       

        if (playerSelection2 === "Rock" && computerChoice === "Paper") {
                ;      console.log("You Lose ööööööööö!!!!!!!!!!!!!");
                computerWins = ++computerWins;
                gameNo = ++gameNo;
                console.log("Player Score: " + playerWins)
                console.log("Computer Score: " + computerWins);
                

       
      
        }   else if (playerSelection2 === "Rock" && computerChoice === "Rock") {
                console.log("It is a Draw");
                gameNo = ++gameNo;
                console.log("Player Score: " + playerWins)
                console.log("Computer Score: " + computerWins);
               
                var computerChoice = computerPlay();
        }   else if (playerSelection2 === "Rock" && computerChoice === "Sissors") {
                console.log("You Win!!!!!!! ööööööööö");
                playerWins = ++playerWins;
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
                

        }   else if (playerSelection2 === "Paper" && computerChoice === "Sissors") {
                console.log ("You Lose ö!ö!ö!Ö!ö!Ö1Ö!ö!Ö1Ö!Ö!Ö1ö");
                computerWins = ++computerWins;
                play();       gameNo = ++gameNo;
                console.log("Player Score: " + playerWins)
                console.log("Computer Score: " + computerWins);
            
                play();
        }   else if (playerSelection2 === "Sissors" && computerChoice === "Paper") {
                        console.log("Player Score: " + playerWins);
                        function play() {

                                console.log("Game Number; " + gameNo);
                        
                        }
                        
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



 

    




        

let games = 1;
let playerScore = 0;
let computerScore = 0;
let playerWins = playerScore;
let computerWins = computerScore;
let gameNo = games;

playerSelection2();
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
                