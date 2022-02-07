let comS = ("Computer Says: ");


let item = ["Rock", "Paper", "Sissors"];

const computerPlay = item[Math.floor(Math.random() * item.length)];
console.log(comS + computerPlay);


let playS = ("Player Says: ");

let playerSelection1 = window.prompt("Please enter your selection of either Rock, Paper or Sissors: ");

const ps = playerSelection1.charAt(0).toUpperCase();
const psrest = playerSelection1.slice(1).toLowerCase();
playerSelection = ps + psrest

console.log(playS + playerSelection1)
console.log(playerSelection)

if (playerSelection === "Rock" && computerPlay === "Paper") {
    console.log("You Lose ööööööööö!!!!!!!!!!!!!");
}   else if (playerSelection === "Rock" && computerPlay === "Rock") {
        console.log("It is a Draw");
}   else if (playerSelection === "Rock" && computerPlay === "Sissors") {
        console.log("You Win!!!!!!! ööööööööö");
}    else if (playerSelection === "Paper" && computerPlay === "Rock") {
        console.log("Ya win this one!!!!!!");
}   else if (playerSelection === "Paper" && computerPlay === "Paper") {
        console.log("Its a Draw!Ö!Ö!Ö!Ö!Ö!Ö!Ö!");
}   else if (playerSelection === "Paper" && computerPlay === "Sissors") {
        console.log ("You Lose ö!ö!ö!Ö!ö!Ö1Ö!ö!Ö1Ö!Ö!Ö1ö");
}   else if (playerSelection === "Sissors" && computerPlay === "Paper") {
        console.log("You win this one!!!!!ääääääärrrrrr");
}   else if (playerSelection === "Sissors" && computerPlay === "Rock") {
        console.log("Looooooooooooser ö!Ö!Ö!Ö!Ö!Ö!Ö!Ö!Ö!Ö");
}   else if (playerSelection === "Sissors" && computerPlay === "Sissors") {
        console.log("It is a draw!");

    

    
    


   
        
    
}




