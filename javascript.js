var humanScore = 0;
var computerScore = 0;


const rbutton = document.querySelector('#rbutton')
const pbutton = document.querySelector('#pbutton')
const sbutton = document.querySelector('#sbutton')

//randomly returns string a string value for either rock, paper or scissors
function getComputerChoice() {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(3);
    let random_num = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
    if (random_num == 0) return('rock');
    if (random_num == 1) return('paper');
    if (random_num == 2) return('scissors');
}

//uses built in prompt function to get user input
function getHumanChoice() {
    let humanchoice = prompt("Choose your weapon: ");
    humanchoice = humanchoice.toLowerCase()

    if (humanchoice == 'rock'){
        return humanchoice
    } else if (humanchoice == 'paper') {
        return humanchoice
    } else if (humanchoice == 'scissors') {
        return humanchoice
    } else {
        return ('error! Please enter a valid choice.')
    }
    }

    //containes logic for function of rock paper scissors round
    function playRound (humanChoice, computerChoice) {
        if (humanChoice == 'paper') {
            if (computerChoice == 'rock') {
                humanScore += 1;
                return ('You win! Paper beats rock.');
            } else if (computerChoice == 'scissors'){
                computerScore += 1;
                return ('You Lose! Scissors beat paper.');
            } else if (computerChoice == 'paper'){
                return ("It's a tie!")
            }
        }   else if (humanChoice == 'rock'){
            if (computerChoice == 'rock'){
                return ("It's a tie!")
            } else if (computerChoice == 'paper') {
                computerScore += 1;
                return ('You lose! Paper beats rock.')
            } else if (computerChoice == 'scissors') {
                humanScore += 1;
                return ('You win! Rock beats scissors.')
            }
        }   else if (humanChoice == 'scissors'){
            if (computerChoice == 'rock'){
                computerScore += 1;
                return ("You lose! Rock beats scissors.")
            } else if (computerChoice == 'paper') {
                humanScore += 1;
                return ('You win! Scissors beat paper.')
            } else if (computerChoice == 'scissors') {
                return ("It's a tie!")
            }
        }
    }

//activates round on click
rbutton.addEventListener("click", () =>{
    alert(playRound('rock', getComputerChoice()));
});

pbutton.addEventListener("click", () =>{
    alert(playRound('paper', getComputerChoice()));
});

sbutton.addEventListener("click", () =>{
    alert(playRound('scissors', getComputerChoice()));
});


