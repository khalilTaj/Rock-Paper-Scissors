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

// console.log(AlgoChoice());

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

// console.log(HumanChoice());
// console.log(HumanChoice("3"));

