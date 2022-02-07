console.log("Computer Choice");



let item = ["Rock", "Paper", "Sissors"];
let lose = ["Bad luck you lose!"]

    function computerPlay() {
        
        const computerChoice = item[Math.floor(Math.random() * item.length)];
        
       
        console.log(computerChoice);
        return(computerChoice);
    }

computerPlay();

let playS = ("Player Says: ");

let playerSelection = window.prompt("Please enter your selection of either Rock, Paper or Sissors: ");
console.log(playS + playerSelection)

function game(computerChoice) {
    if (playerSelection === "Rock" && computerChoice === "Paper") {
        console.log("Bad Luck you lose!!!!!");
    } else {
            console.log("YOU WIN");
        }
    
}

game();







