console.log("Hello, World!")

const validOptions = ["rock", "paper", "scissors"];
let score = 0;

game();

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

function getUserInput(){
    let input;
    while(true){
        input = prompt("Please pick rock paper or scissors:");
        input = input.toLowerCase();
        if(validOptions.indexOf(input) >= 0){
            break;
        }
    }
    console.log("You chose " + input);
    return input;
}

function evaluateWinner(userInput,computerInput){
    switch(true){
        case userInput === computerInput:
            console.log("DRAW!");
            playRound();
            break;
        case userInput === "rock" && computerInput === "scissors":
            console.log("YOU WIN!");
            score++;
            break;
        case userInput === "scissors" && computerInput === "paper":
            console.log("YOU WIN!");
            score++;
            break;
        case userInput === "paper" && computerInput === "rock":
            console.log("YOU WIN!");
            score++;
            break;
        case userInput === "rock" && computerInput === "paper":
            console.log("YOU LOSE!");
            break;
        case userInput === "scissors" && computerInput === "rock":
            console.log("YOU LOSE!");
            break;
        case userInput === "paper" && computerInput === "scissors":
            console.log("YOU LOSE!");
            break;
    }
}


function playRound(){
    evaluateWinner(getUserInput(),getComputerChoice());
}

function game(){

    let noGames = 5;

    for (let i = 0; i < noGames; i++){
        playRound();
    }

    console.log("You won " + score + " games out of " + noGames + ".")
}
