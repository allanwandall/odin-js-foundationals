let playerCount = 0;
let computerCount = 0;

const match = document.querySelector('.match'); 
const playerScore = document.querySelector('.player');
const computerScore = document.querySelector('.computer');
const bod = document.querySelector('.bod');


function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() *3) + 1;
    let choice;
    switch (randomNumber){
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
        default:
            choice = "error";
            break;
    }

    console.log("The computer chose " + choice);
    return choice;
}

function updateMatch(userInput, computerInput, evaluation){
    let userEmoji;
    let computerEmoji;

    switch (userInput){
        case "rock":
            userEmoji = "🪨";
            break;
        case "paper":
            userEmoji = "📰";
            break;
        case "scissors":
            userEmoji = "✂️";
            break;
    }

    switch (computerInput){
        case "rock":
            computerEmoji = "🪨";
            break;
        case "paper":
            computerEmoji = "📰";
            break;
        case "scissors":
            computerEmoji = "✂️";
            break;
    }

    match.textContent = `${userEmoji} ${evaluation} ${computerEmoji}`;
}

function updateScore() {
    playerScore.textContent = `Player: ${playerCount}`;
    computerScore.textContent = `Computer: ${computerCount}`;

    if(playerCount >= 5 || computerCount >= 5){
        window.addEventListener('click', function(event) {
            event.stopImmediatePropagation();
        }, true);
        const gameover = document.createElement('h1');
        gameover.classList.add('gameover');
        bod.appendChild(gameover);

        if(playerCount >= 5){
            gameover.textContent = "GAME OVER - YOU WON";
        }else{
            gameover.textContent = "GAME OVER - YOU LOST";
        }
        
    }
}


function evaluateWinner(userInput){
    const computerInput = getComputerChoice();
    let evaluation;

    console.log(`You chose ${userInput}`)
    switch(true){
        case userInput === computerInput:
            evaluation = "DRAW";
            console.log("DRAW!");
            break;
        case userInput === "rock" && computerInput === "scissors":
            evaluation = "WIN";
            console.log("YOU WIN!");
            playerCount++;
            break;
        case userInput === "scissors" && computerInput === "paper":
            evaluation = "WIN";
            playerCount++;
            console.log("YOU WIN!");
            break;
        case userInput === "paper" && computerInput === "rock":
            evaluation = "WIN";
            playerCount++;
            console.log("YOU WIN!");
            break;
        case userInput === "rock" && computerInput === "paper":
            evaluation = "LOSE";
            computerCount++;
            console.log("YOU LOSE!");
            break;
        case userInput === "scissors" && computerInput === "rock":
            evaluation = "LOSE";
            computerCount++;
            console.log("YOU LOSE!");
            break;
        case userInput === "paper" && computerInput === "scissors":
            evaluation = "LOSE";
            computerCount++;
            console.log("YOU LOSE!");
            break;
        default:
            console.log("COMPUTER ERROR");
            break;
    }
    updateMatch(userInput,computerInput,evaluation);
    updateScore();
}


const btnRock = document.getElementById("rock");
btnRock.addEventListener('click', function(){
    evaluateWinner("rock");
});

const btnPaper = document.getElementById("paper");
btnPaper.addEventListener('click', function(){
    evaluateWinner("paper");
});

const btnScissors = document.getElementById("scissors");
btnScissors.addEventListener('click', function(){
    evaluateWinner("scissors");
});
