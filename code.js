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
