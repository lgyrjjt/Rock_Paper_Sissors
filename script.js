console.log("Hello World Piglet");



let item = ["Rock", "Paper", "Sissors"];
let lose = ["Bad luck you lose!"]

    function computerPlay() {
        
        let computerChoice = item[Math.floor(Math.random() * item.length)];
        
       
        console.log(computerChoice);
        return(item);
    }

computerPlay();

let playerSelection = window.prompt("Please enter your selection of either Rock, Paper or Sissors: ");
console.log(playerSelection)

function game() {
    if (playerSelection === "Rock") {
        console.log("Bad Luck you lose!!!!!")
    }
}

game();







