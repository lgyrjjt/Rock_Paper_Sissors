let games =1;
let playerScore = 0;
let computerScore = 0;

function play() {

    const button = document.querySelectorAll('button');

        button.forEach((button) => {

            button.addEventListener('click', () => {

                if (button.id === "R") {
                    playerChoice = "Rock";

                }   else if (button.id === "P") {
                    playerChoice = "Paper"

                }   else if (button.id === "S") {
                    playerChoice = "Sissors";
                }
                console.log("Player Choice: " + playerChoice);
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

playerChoice = "";
play();
computerChoice();
var computerChoiceVAR = computerChoice();
logComp();

