// console.log("hello world")

const paper = "paper";
const rock = "rock";
const scissors = "scissors";
const Hwin = "You won!";
const Hlose = "You lost..";
const draw = "Draw!";
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

let choice = Math.random();
// console.log(choice);

function AlgoChoice(){
    if (choice < 0.33){
        return(paper);
    }
    else if (0.33 < choice && choice < 0.66){
        return(rock);
    }
    else {
        return(scissors);
    };
};

HumanChoice = function (){
    if (round == "1"){
        return("paper")
    }
    else if (round == "2"){
        return("rock")
    }
    else{
        return("scissors")
    }
};

// console.log(HumanChoice("3"));


function playRound (){
    while (roundCounter < 5){
        console.log(roundCounter);
        roundCounter++;
    }
    return(roundCounter)
};

let winner = function() {
    if(HumanChoice() == AlgoChoice()){
        return(draw)
    }
    else if((HumanChoice() == rock && AlgoChoice() == scissors) ||
            (HumanChoice() == scissors && AlgoChoice() == paper) ||
            (HumanChoice() == paper && AlgoChoice() == rock)){
        return(Hwin)
    }
    else{
        return(Hlose)
    }
};

// let round = prompt("1 for paper | 2 for rock | 3 for scissors");
console.log("player chose: ", HumanChoice());
console.log("computer chose: ", AlgoChoice());
console.log(winner());