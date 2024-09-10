//console.log("Hello World!")

//randomly returns string a string value for either rock, paper or scissors
function getComputerChoice() {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(3);
    let random_num = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
    if (random_num == 0) return('Rock')
    if (random_num == 1) return('Paper')
    if (random_num == 2) return('Scissors')
}

console.log(getComputerChoice())