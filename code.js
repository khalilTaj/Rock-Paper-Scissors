// console.log("hello world")

const paper = "paper";
const rock = "rock";
const scissors = "scissors";

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

// console.log("computer chose: ", AlgoChoice());

let round = prompt("1 for paper | 2 for rock | 3 for scissors");

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

// console.log("player chose: ", HumanChoice());
// console.log(HumanChoice("3"));
const Hwin = "You won!";
const Hlose = "You lost..";
const draw = "Draw!";

let winner = function() {
    if(HumanChoice == al)
}


/* let  winner = function (){
    switch(HumanVsComputer){
        case draw:
            HumanChoice() == AlgoChoice()
            return(console.log("Draw"))
        case RockWin:
            HumanChoice == rock && AlgoChoice == scissors
            return(Hwin)
        case ScissorsWin:
            HumanChoice == scissors && AlgoChoice == paper
            return(Hwin)
        case PaperWin:
            HumanChoice == paper && AlgoChoice == rock
            return(Hwin)
        default:
        return(Hlose)
    };
}; */

console.log(winner());
