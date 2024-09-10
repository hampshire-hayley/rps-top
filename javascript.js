var humanScore = 0;
var computerScore = 0;

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

    //repeats playRound logic five times to complete a full game
    function playGame(){
        let counter = 0
        while (counter < 5){
           let humanChoice = getHumanChoice()
           let computerChoice = getComputerChoice()
           
        if (humanChoice == 'paper') {
            counter += 1;
            if (computerChoice == 'rock') {
                humanScore += 1;
            } else if (computerChoice == 'scissors'){
                computerScore += 1;
            }
            console.log(`Human: ${humanScore} Computer: ${computerScore}`)
        }   

        if (humanChoice == 'rock'){
            counter += 1;
            if (computerChoice == 'paper') {
                computerScore += 1;
            } else if (computerChoice == 'scissors') {
                humanScore += 1;
            }
            console.log(`Human: ${humanScore} Computer: ${computerScore}`)

        }  
        if (humanChoice == 'scissors'){
            counter += 1;
            if (computerChoice == 'rock'){
                computerScore += 1;
            } else if (computerChoice == 'paper') {
                humanScore += 1;
            } else if (computerChoice == 'scissors') {
            }
            console.log(`Human: ${humanScore} Computer: ${computerScore}`)

        }
    }
    if (humanScore > computerScore) {
        return (`You win! The final score is: ${humanScore} vs ${computerScore}`)
    } else if (humanScore < computerScore) {
        return(`You lose! The final score is: ${computerScore} vs ${humanScore}`)
    } else {
        return(`It's a tie! The final score is: ${computerScore} vs ${humanScore}`)
    }

}

    //const humanSelection = getHumanChoice();
    //const computerSelection = getComputerChoice();
    
    console.log(playGame())
   // console.log(`Your score is: ${humanScore}`)
