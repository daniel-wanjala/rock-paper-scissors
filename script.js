function computerPlay(){
    const random = Math.random();
   if (random < .33) {
       return "rock"
   } else if (random <= .66){
       return "paper"
   } else return "scissors"

}
function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === "rock"){
        if (computerSelection === "rock"){
          return "Tie"
        }else if (computerSelection === "paper"){
            computerScore ++;
            return "computer wins!"
        } else {
            playerScore ++;
            return "you win!"
        }
    }
if (playerSelection === "paper"){
if ( computerSelection === "rock"){
    playerScore ++;
    return "you win!"
          } else if (computerSelection === "scissors"){
    computerScore ++;
    return "computer wins!"
          } else {
       return "Tie"
        }
 }

if (playerSelection === "scissors"){
    if (computerSelection === "rock"){
        computerScore ++;
        return "computer wins!"
    } else if (computerSelection === "paper"){
        playerScore ++;
        return "you win!"
    }else {
        return "tie"
    }
 }
 } 

 playerScore = parseInt(0)
 computerScore = parseInt(0)
 
 function game(){
    for (let i = 1; i <= 5; i++){
let playerSelection = prompt("Let's play rock paper scissors! ");
   const computerSelection = computerPlay();
    console.log(playRound(playerSelection,computerSelection));
    console.log(`Player score = `+ playerScore);
    console.log(`Computer score = `+ computerScore);
 }
}


game();




