let comS = ("Computer Says: ");

function computerPlay() {
        let item = ["Rock", "Paper", "Sissors"];
        return item[Math.floor(Math.random() * item.length)];
}

var computerChoice = computerPlay();

console.log(comS + computerChoice);

let playS = ("Player Says: ");

        let playerSelection1 = window.prompt("Please enter your selection of either Rock, Paper or Sissors: ");

        const ps = playerSelection1.charAt(0).toUpperCase();
        const psrest = playerSelection1.slice(1).toLowerCase();
        playerSelection = ps + psrest

        console.log(playS + playerSelection1)
        console.log(playerSelection)
        

let winner = play();

function play() {



        if (playerSelection === "Rock" && computerChoice === "Paper") {
        console.log("You Lose ööööööööö!!!!!!!!!!!!!");
        }   else if (playerSelection === "Rock" && computerChoice === "Rock") {
                console.log("It is a Draw");
        }   else if (playerSelection === "Rock" && computerChoice === "Sissors") {
                console.log("You Win!!!!!!! ööööööööö");
        }    else if (playerSelection === "Paper" && computerChoice === "Rock") {
                console.log("Ya win this one!!!!!!");
        }   else if (playerSelection === "Paper" && computerChoice === "Paper") {
                console.log("Its a Draw!Ö!Ö!Ö!Ö!Ö!Ö!Ö!");
        }   else if (playerSelection === "Paper" && computerChoice === "Sissors") {
                console.log ("You Lose ö!ö!ö!Ö!ö!Ö1Ö!ö!Ö1Ö!Ö!Ö1ö");
        }   else if (playerSelection === "Sissors" && computerChoice === "Paper") {
                console.log("You win this one!!!!!ääääääärrrrrr");
        }   else if (playerSelection === "Sissors" && computerChoice === "Rock") {
                console.log("Looooooooooooser ö!Ö!Ö!Ö!Ö!Ö!Ö!Ö!Ö!Ö");
        }   else if (playerSelection === "Sissors" && computerChoice === "Sissors") {
                console.log("It is a draw!");

}


    


   
        
    
}




