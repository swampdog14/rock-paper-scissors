//generate a random number between 0 and 1.
//multiply that number by 3, round it down.
//assign each number to rock, paper or scissors

function computerPlay() {
let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return 'Rock';
    } else if (choice == 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}
console.log(computerPlay());

let playerSelection = 'rock';

//User's input is the playerSelection variable
//Function playRound will compare this string to the computer's string
//If they equal eachother, it will output "You both played the same, try again"

//playerSelection = rock, computerSelection = rock
    //output tie message
//playerSelection = rock, computerSelection = paper
    //output paper beats rock message, you lose
//playerSelection = rock, computerSelection = scissors
    //output rock beats scissors, you win

//playerSelection = paper, computerSelection = rock
    //output paper beats rock, you win
//playerSelection = paper, computerSelection = paper
    //output tie message
//playerSelection = paper, computerSelection =scissors
    //output scissors beats paper, you lose

//playerSelection = scissors, computerSelection = rock
    //output rock beats scissors, you lose
//playerSelection = scissors, computerSelection = paper
    //output scissors beats paper, you win
//playerSelecttion = scissors, computerSelection = scissors
    //output tie message


