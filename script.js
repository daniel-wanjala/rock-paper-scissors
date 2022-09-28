const rockButton = document.querySelector('.rockButton');
const paperButton = document.querySelector('.paperButton');
const scissorsButton = document.querySelector('.scissorsButton');
const resultsDiv = document.querySelector('#resultsDiv');
const playerScoreCount = document.querySelector('.playerScoreCount')
const computerScoreCount = document.querySelector('.computerScoreCount')


// functions that make's the computer play. 
const getComputerChoice = () => {
    let getRandom = Math.random();
 if (getRandom <= .33) {
    return 'paper';
 } else if (getRandom <= .66) {
    return 'rock';
 } else { 
    return 'scissors';
 }
};

//functions that gets game winner
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection == 'paper') 
    if (computerSelection == 'paper') {
        const p = document.createElement('p');
        p.innerText = "It's a tie!";
        resultsDiv.appendChild(p);
    } else if (computerSelection == 'rock') {
        playerScore ++;
        const p = document.createElement('p');
        p.innerText = "You win!";
        resultsDiv.appendChild(p);
    } else {
        computerScore ++;
        const p = document.createElement('p');
        p.innerText = "You Lose!";
        resultsDiv.appendChild(p);
    }

    if(playerSelection == 'rock')
    if (computerSelection == 'rock') {
        const p = document.createElement('p');
        p.innerText ="It's a tie!";
    } else if (computerSelection == 'paper') {
        computerScore ++;
        const p = document.createElement('p');
        p.innerText = "You Lose!";
        resultsDiv.appendChild(p);
    } else {
        playerSelection ++;
        const p = document.createElement('p');
        p.innerText = "You Win!";   
        resultsDiv.appendChild(p);
    }

    if(playerSelection == 'scissors')
    if (computerSelection == 'scissors') {
        const p = document.createElement('p');
        p.innerText = "It's a tie!";
        resultsDiv.appendChild(p);
    } else if (computerSelection == 'paper') {
        playerScore ++;
        const p = document.createElement('p');
        p.innerText =  "You Win!";
        resultsDiv.appendChild(p);
    } else {
        computerScore ++;
        const p = document.createElement('p');
        p.innerText = "You Lose!";   
        resultsDiv.appendChild(p);
    }
};


const shoWinner = (playerScore, computerScore) => {
    if (playerScore === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('player-won');
        h2.innerText = `You won ${playerScore} to ${computerScore}. Good job`;
        resultsDiv.appendChild(h2);

    } if(computerScore === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('computer-won');
        h2.innerText = `You lost ${playerScore} to ${computerScore}. Try Again `;
        resultsDiv.appendChild(h2);
    }
};

const displaySCore = (playerScore, computerScore) => {
    playerScoreCount.innerText = `Player : ${playerScore}  `
    computerScoreCount.innerText = `Computer : ${computerScore} `
}


rockButton.addEventListener('click' , () =>{
    const computerSelection = getComputerChoice();
    const playerSelection = "rock";
    playRound(playerSelection, computerSelection)
    shoWinner(playerScore, computerScore);
    displaySCore(playerScore, computerScore)
});

paperButton.addEventListener('click',() => {
    const computerSelection = getComputerChoice();
    const playerSelection = "paper";
    playRound(playerSelection, computerSelection)
    displaySCore(playerScore, computerScore)
    shoWinner(playerScore, computerScore);
});

scissorsButton.addEventListener('click',() => {
    const computerSelection = getComputerChoice();
    const playerSelection = "scissors";
    playRound(playerSelection, computerSelection)
    displaySCore(playerScore, computerScore)
    shoWinner(playerScore, computerScore);
});


playerScore = parseInt(0);
computerScore = parseInt(0);

  