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

function AlgoChoice(){
    let choice = Math.random();
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

function HumanChoice (play){
    if (play == "1"){
        return("paper")
    }
    else if (play == "2"){
        return("rock")
    }
    else{
        return("scissors")
    }
};

let winner = function() {
    let play = HumanChoice();
    if(play == AlgoChoice()){
        return(draw)
    }
    else if((play == rock && AlgoChoice() == scissors) ||
            (play == scissors && AlgoChoice() == paper) ||
            (play == paper && AlgoChoice() == rock)){
        return(Hwin)
    }
    else{
        return(Hlose)
    }
};
let score = function(){
    console.log("player chose: ", HumanChoice());
    console.log("computer chose: ", AlgoChoice());
    console.log(winner());
};

function playGame(){
    while (roundCounter < 5){
        let play = prompt("1 for paper | 2 for rock | 3 for scissors")
        console.log("Round :", roundCounter + 1);
        AlgoChoice();
        HumanChoice(play);
        score();
        roundCounter++;
    }
};

console.log('Wanna play rock-paper-scissors? Write "PlayGame()"');